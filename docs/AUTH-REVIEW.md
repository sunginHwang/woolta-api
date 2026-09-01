# 인증 체계 리뷰 — 표준 패턴 대비 (2026-09-02)

`src/shared/auth/` + `src/apps/user/` 의 인증·인가 구현이 일반적인 로그인 패턴과 얼마나 일치하는지 점검한 문서.
구조 설명은 `ARCHITECTURE.md` §2를 참고하고, 이 문서는 **표준에서 벗어난 지점과 그 표준형**만 다룬다.

한 줄 결론: **골격(httpOnly 쿠키 + JWT access/refresh + 리졸버 가드)은 표준. 세부 구현 8개가 표준에서 벗어나 있었고, 그중 1번은 실질적인 취약점이었다.**

> **적용 상태 (2026-09-02)** — §1~8 전부 코드에 반영 완료(§7만 부분 적용). 각 절 상단의 `적용` 블록과 맨 아래 [배포 전 필수 작업](#배포-전-필수-작업) 참고.
> **이 변경은 FE 동시 배포가 필요하다** — 로그인 뮤테이션의 입력·반환 타입이 바뀌었다.

---

## 0. 표준에 부합하는 부분 (유지)

| 요소                                             | 비고                                                                          |
| ------------------------------------------------ | ----------------------------------------------------------------------------- |
| JWT를 `httpOnly + Secure` 쿠키로 전달            | localStorage 보관 대비 XSS에 안전. 현재 권장 방식                             |
| access / refresh 2토큰 분리                      | 표준 구조                                                                     |
| 소셜 로그인 시 미가입자 자동 생성                | JIT provisioning — 일반적                                                     |
| context에서 인증 파싱 → 리졸버에서 가드          | GraphQL 단일 엔드포인트에서는 URL 기반 인가가 불가능하므로 리졸버 가드가 정석 |
| `.woolta.com` 쿠키 공유로 서브도메인 SSO         | 흔한 패턴                                                                     |
| access 만료 시 refresh로 서버 사이드 투명 재발급 | 클라이언트 재시도 로직이 필요 없어 오히려 깔끔                                |

---

## 1. `loginBySocial`이 소셜 provider 토큰을 검증하지 않는다 🔴 **최우선**

> **적용 완료** — `LoginBySocialInput`에서 `socialId`를 제거하고 `token`(provider 발급 토큰)을 받는다.
> `services/SocialAuthService.ts`가 provider에 되물어 검증한 식별자만 `socialId`로 사용한다.
> 신규 env 필수: `GOOGLE_CLIENT_ID`, `KAKAO_APP_ID`, `FACEBOOK_APP_ID`, `FACEBOOK_APP_SECRET` (미설정 시 해당 provider 로그인은 실패 — fail closed).

**현재** — `src/apps/user/schema/auth/resolvers/Mutation/loginBySocial.ts`

```ts
const userInfo = await getSocialUser(input.socialId, dbLoginType);
// input.socialId 를 그대로 신뢰하고 세션 발급
```

클라이언트가 보낸 `socialId` 문자열만으로 로그인이 성립한다. 즉 **타인의 카카오/구글 socialId 값 하나만 알면 그 계정으로 로그인된다.**
인증(authentication)이 아니라 자기신고(self-asserted identity)에 가깝다. 레거시 `woolbankApi`에서 그대로 넘어온 부분.

**표준 패턴 (OAuth 2.0 / OIDC)**

```
FE: provider SDK 로그인 → id_token(JWT) 또는 access_token 획득
FE → BE: 그 토큰을 전달 (socialId는 보내지 않는다)
BE: ① id_token 서명 검증 (provider JWKS) + iss / aud / exp 검증
    ② 또는 access_token 으로 provider 프로필 API 호출
    ③ 검증 결과의 sub(고유 식별자)를 socialId 로 사용
BE: 자체 세션/토큰 발급
```

**적용 방향** — 입력을 `socialId` → `idToken`(구글) / `accessToken`(카카오)으로 바꾸고 서버에서 검증 후 `sub`를 추출한다.
DB의 `social_id` 컬럼 값 자체는 그대로 유지되므로 기존 계정 매칭은 깨지지 않는다. FE와 동시 배포 필요.

---

## 2. access 토큰 수명이 7일

> **적용 완료** — `config.ts` `ACCESS_TOKEN_EXPIRE: '7d' → '15m'`. FE 변경 불필요(갱신은 `buildAuthContext`가 처리).

**현재** — `src/shared/auth/config.ts`: `ACCESS_TOKEN_EXPIRE: '7d'`, `ACCESS_REFRESH_EXPIRE: '60d'`

access를 짧게 두는 이유는 "탈취되어도 곧 만료된다"인데, 7일이면 refresh와 노출 창이 비슷해져 2토큰으로 나눈 의미가 사라진다.
`buildAuthContext`의 자동 재발급 경로도 사실상 거의 실행되지 않는다.

**표준** — access 5~~30분 / refresh 7~~30일.

**적용 방향** — `ACCESS_TOKEN_EXPIRE: '15m'`. 토큰 포맷이 바뀌지 않으므로 레거시 호환과 무관하고, 재발급은 이미 `buildAuthContext`가 처리하므로 FE 변경도 없다. **가장 저렴한 개선.**

---

## 3. refresh 토큰에 저장소도 회전(rotation)도 없다

> **적용 완료** — `user_refresh_token` 테이블(DDL: `scripts/userRefreshTokenDdl.sql`) + `shared/auth/refreshStore.ts` 계약,
> 구현체 `apps/user/services/RefreshTokenService.ts`를 `app.ts` 부팅 시 주입. 회전·재사용 감지·패밀리 폐기 포함.
> `AUTH_REFRESH_STORE_STRICT=1`을 켜면 저장소에 없는 refresh(레거시 발급분)를 거부한다 — **레거시 Koa 서버를 내린 뒤 켤 것.**
> 회전에는 **유예창**이 필요하다(`AUTH_REFRESH_REUSE_GRACE_MS`, 기본 10초): access 만료 직후 브라우저가 동시에 쏜 요청들이
> 같은 refresh를 함께 쓰는 것은 정상이므로, 유예창이 없으면 정상 사용자가 재사용 감지에 걸려 로그아웃된다.

**현재** — refresh가 순수 stateless JWT라 서버가 특정 토큰을 무효화할 방법이 없다. 유출되면 60일간 유효하다.

**표준**

- refresh 토큰(또는 그 해시)을 DB/Redis에 저장 → 로그아웃·비밀번호 변경·기기 해제 시 삭제하여 즉시 무효화
- **rotation**: refresh 사용 시마다 새 refresh 발급 + 기존 것 폐기
- **reuse detection**: 이미 폐기된 refresh가 다시 오면 탈취로 간주하고 해당 사용자의 토큰 패밀리 전체 폐기

**적용 방향** — `user_refresh_token(user_id, token_hash, expires_at, revoked_at)` 테이블 추가. `createAuthToken` / `buildAuthContext` 재발급 지점에만 훅을 걸면 되므로 도메인 코드 변경은 없다.

---

## 4. `logout`이 서버 상태를 바꾸지 않는다

> **적용 완료** — `endAuthSession()`이 해당 유저의 유효 refresh를 전부 폐기하고 `res.clearCookie`로 쿠키를 실제 삭제한다.

**현재** — `Mutation/logout.ts`가 `setAuthCookie(res, '', '')`로 브라우저 쿠키만 비운다. 이미 유출된 토큰은 그대로 살아있다.
부수적으로 `clearCookie`가 아니라 빈 문자열 + 만료 1년으로 덮어쓰는 형태라 의도 표현도 부정확하다(빈 값은 `!accessToken`에 걸려 결과적으로는 비인증 처리된다).

**표준** — 로그아웃 = 서버 측 refresh 무효화 + 쿠키 삭제. 3번이 선행되어야 성립한다.

**적용 방향** — 3번 적용 후 `revoke` 호출 추가, 쿠키는 `res.clearCookie(name, { domain, path, sameSite, secure })`로 교체.

---

## 5. `checkRefreshToken`이 refresh 토큰을 GraphQL 인자로 받는다

> **적용 완료** — 토큰 값이 GraphQL 입출력에서 완전히 사라졌다(쿠키 전용).
> `checkRefreshToken(input)` → **`refreshSession: Boolean!`**(인자 없음, 쿠키에서 읽고 쿠키로 갱신),
> `checkToken` **제거**(`me` + 필요 시 `refreshSession`으로 대체), `loginBySocial`/`loginByShareCode` 반환 타입 `LoginResult` → **`UserInfo!`**.
> 사용처 없어진 `LoginResult` / `AuthTokens` / `CheckTokenResult` / `CheckRefreshTokenInput` 타입 삭제.

**현재** — `Mutation/checkRefreshToken.ts`

```graphql
checkRefreshToken(input: { refreshToken: "..." }): AuthTokens!
```

refresh를 `httpOnly` 쿠키에 넣은 목적은 JS가 읽지 못하게 하는 것인데, 이 API는 **클라이언트가 그 값을 알고 있어야** 호출된다.
즉 FE 어딘가에 refresh 사본이 존재한다는 뜻이고 httpOnly의 이점을 스스로 무효화한다. 게다가 이 뮤테이션은 쿠키를 갱신하지도 않아, `buildAuthContext`의 자동 재발급과 역할이 중복된다.
`checkToken`이 새 토큰 쌍을 응답 body로 내려주는 것도 같은 계열의 어색함이다.

**표준** — refresh는 쿠키에서만 읽고, 응답도 `Set-Cookie`로만 내려준다. 토큰 값이 응답 body에 노출되지 않는다.

**적용 방향** — `checkRefreshToken`은 제거하거나 `_ctx.req.cookies[REFRESH_TOKEN_NAME]`을 읽어 `setAuthCookie`로 응답하도록 변경. `checkToken`은 `AuthTokens`를 응답에서 빼고 쿠키 재세팅으로 대체.

---

## 6. CSRF 방어가 없다 (+ CORS 미설정)

> **적용 완료** — 쿠키 `sameSite` 기본값을 `'none' → 'lax'`로 내렸다(`AUTH_COOKIE_SAMESITE`로 조정 가능).
> 크로스 오리진이 실제로 필요하면 `CORS_ORIGINS`에 허용 오리진을 넣는다 — `shared/cors.ts`가 허용 목록 기반 CORS 헤더와 Origin 검증(미허용 Origin은 403)을 처리한다.
> `CORS_ORIGINS` 미설정 시 미들웨어 자체가 붙지 않아 기존 동작(동일 오리진)이 그대로 유지된다.

**현재** — 쿠키 기반 인증 + `sameSite: 'none'`인데 CSRF 토큰도 Origin 검증도 없다.
한편 `src/`와 `package.json` 어디에도 `cors`가 없어, 브라우저의 cross-origin 자격증명 요청은 애초에 통과하지 못한다 → **실제 배포는 리버스 프록시로 동일 오리진에 묶여 있을 가능성이 높다.**

**표준** — 쿠키 인증은 `SameSite=Lax`(동일 사이트 구성) 또는 `SameSite=None` + CSRF 토큰 / Origin 헤더 검증.

**적용 방향** — 동일 오리진(프록시) 구성이 맞다면 `cookie.ts`의 `sameSite: 'none'` → `'lax'` 로 바꾸는 것만으로 CSRF가 상당 부분 닫힌다.
크로스 오리진이 실제로 필요하다면 `cors({ origin: [...woolta 도메인], credentials: true })`를 명시하고 Origin 검증을 추가한다.
**선행 확인 필요**: 배포 구성이 프록시인지 크로스 오리진인지.

---

## 7. 소셜 전용인데 `password` 컬럼에 `scrypt(socialId, salt=user.id)`를 저장한다

> **부분 적용** — scrypt 유도와 2단계 트랜잭션을 제거하고 단일 INSERT로 `password: ''`를 저장한다.
> **컬럼 nullable 전환은 보류** — `user` 테이블은 레거시 `woolbankApi`와 공유하므로 스키마 변경은 레거시 서버 정리 후에 한다.

**현재** — `services/UserService.ts`의 `saveSocialUser`가 user 생성 후 `password`를 `scrypt(socialId, salt = id.toString())`로 덮어쓴다.

비밀번호 로그인 경로가 없는데 password를 유도해 저장하고 있고, salt가 순차 증가하는 `user.id`라 salt의 목적(예측 불가·유일성)에도 맞지 않는다.
이 값이 인증에 사용되지 않으므로 실질 위험은 낮은 **레거시 잔재**.

**표준** — 소셜 전용 계정은 `password`를 nullable로 두고 비운다. 비밀번호 로그인을 추가할 때 bcrypt/argon2 + 계정별 랜덤 salt를 쓴다.

**적용 방향** — 레거시 `woolbankApi`가 이 컬럼을 읽지 않는지 확인 후 2단계 트랜잭션 제거. 우선순위 낮음.

---

## 8. share 세션이 소유자의 userId를 그대로 들고 다닌다 (fail-open)

> **적용 완료 (1번 방식: 규칙 반전)** — 모든 Mutation 리졸버의 기본 가드를 `requireRealUser`로 통일했다(10개 파일 변경).
> 이제 Query만 `requireAuth`를 쓴다 → 새 뮤테이션을 추가할 때의 기본값이 안전한 쪽이 된다.
> 토큰 `scope` 도입(2번 방식)은 미적용 — 현 구조에서는 규칙 반전으로 충분하다고 판단.

**현재** — `loginByShareCode`가 발급하는 토큰의 `userId`는 **공유한 소유자 본인**이고, `authType`만 `'share'`로 다르다.
따라서 리졸버에서 `requireRealUser`를 한 군데만 빠뜨리면 즉시 타인 계정에 대한 쓰기 권한이 열린다. 안전 여부가 "가드를 빠짐없이 붙였는가"에만 의존하는 fail-open 구조.

**표준** — 토큰에 권한 스코프를 담고(`scope: ['read']`), 기본이 거부가 되도록 한다. 공유 링크는 계정 세션이 아니라 별도의 capability로 취급.

**적용 방향** — 두 가지 중 선택.

1. (가벼움) 규칙을 뒤집는다 — 기본은 `requireRealUser`, **읽기 전용 리졸버만 명시적으로** `requireAuth`. 새 리졸버를 추가할 때의 기본값이 안전 쪽이 된다.
2. (정석) 토큰에 `scope`를 추가하고 가드를 `requireScope('write')` 형태로 전환.

현재 규칙(`ARCHITECTURE.md` §2 "인증 적용 규칙")은 1번의 반대 방향이라, 신규 리졸버가 늘수록 누락 위험이 커진다.

---

## 적용 결과 (2026-09-02)

| 항목                               | 상태    | 주요 변경 파일                                                                                                                                                    |
| ---------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. 소셜 토큰 검증                  | ✅      | `apps/user/services/SocialAuthService.ts`(신규), `Mutation/loginBySocial.ts`, `schema/auth/schema.graphql`                                                        |
| 2. access 수명 15분                | ✅      | `shared/auth/config.ts`                                                                                                                                           |
| 3. refresh 저장소·회전·재사용 감지 | ✅      | `shared/auth/refreshStore.ts`·`token.ts`·`context.ts`, `apps/user/services/RefreshTokenService.ts`, `prisma/schemaUser.prisma`, `scripts/userRefreshTokenDdl.sql` |
| 4. 로그아웃 서버 측 무효화         | ✅      | `shared/auth/session.ts`(신규), `shared/auth/cookie.ts`, `Mutation/logout.ts`                                                                                     |
| 5. 토큰을 GraphQL 입출력에서 제거  | ✅      | `schema/auth/schema.graphql`, `Mutation/refreshSession.ts`(신규), `checkToken`·`checkRefreshToken` 삭제                                                           |
| 6. SameSite lax + CORS/Origin 검증 | ✅      | `shared/auth/cookie.ts`, `shared/cors.ts`(신규), `app.ts`                                                                                                         |
| 7. password 잔재 제거              | 🟡 부분 | `apps/user/services/UserService.ts` (컬럼 nullable 전환은 보류)                                                                                                   |
| 8. 가드 기본값 반전                | ✅      | Mutation 리졸버 10개 (`requireAuth` → `requireRealUser`)                                                                                                          |

검증: `npx tsc --noEmit` 통과, `npm run codegenUser && npm run mergeSchema` 통과, 부팅 확인 완료.
테스트 프레임워크가 없으므로 실제 로그인 플로우는 수동 검증이 필요하다(아래 참고).

---

## 배포 전 필수 작업

이 변경은 **코드만으로 완결되지 않는다.** 아래를 끝내야 동작한다.

1. **DDL 실행** — `mysql -h <host> -u <user> -p woolBank < scripts/userRefreshTokenDdl.sql`
   테이블이 없으면 로그인 시 `user_refresh_token` INSERT에서 실패한다.
2. **env 설정** — 소셜 provider 검증값이 없으면 해당 provider 로그인이 실패한다(의도된 fail-closed).

   | 변수                                      | 필수             | 설명                                                                              |
   | ----------------------------------------- | ---------------- | --------------------------------------------------------------------------------- |
   | `GOOGLE_CLIENT_ID`                        | 구글 로그인 시   | id_token의 `aud` 검증값                                                           |
   | `KAKAO_APP_ID`                            | 카카오 로그인 시 | access_token_info의 `app_id` 검증값                                               |
   | `FACEBOOK_APP_ID` / `FACEBOOK_APP_SECRET` | 페북 로그인 시   | debug_token 호출용 앱 토큰                                                        |
   | `AUTH_COOKIE_SAMESITE`                    | 아니오           | 기본 `lax`. 크로스 오리진 필요 시에만 `none`                                      |
   | `CORS_ORIGINS`                            | 아니오           | 쉼표 구분 허용 오리진. 미설정 시 CORS 미들웨어 미적용                             |
   | `AUTH_REFRESH_STORE_STRICT`               | 아니오           | `1`이면 저장소에 없는 refresh 거부. 레거시 서버 정리 후 켠다                      |
   | `AUTH_REFRESH_REUSE_GRACE_MS`             | 아니오           | refresh 회전 유예창(ms, 기본 10000). 동시 요청 레이스를 탈취로 오탐하지 않게 한다 |
   | `AUTH_COOKIE_DOMAIN`                      | 아니오           | 기본 `.woolta.com`                                                                |

3. **FE 동시 배포** — GraphQL 계약이 바뀌었다.

   | 이전                                                                                  | 이후                                                                            |
   | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
   | `loginBySocial(input: { socialId, loginType, imageUrl!, name, email }): LoginResult!` | `loginBySocial(input: { loginType, token!, name, email, imageUrl }): UserInfo!` |
   | `loginByShareCode(input): LoginResult!`                                               | `loginByShareCode(input): UserInfo!`                                            |
   | `checkToken: CheckTokenResult!`                                                       | 제거 → `me: UserInfo!` 사용                                                     |
   | `checkRefreshToken(input: { refreshToken }): AuthTokens!`                             | `refreshSession: Boolean!` (인자 없음)                                          |

   FE는 이제 응답에서 토큰 값을 받지 않는다 — 쿠키만으로 동작한다.
   소셜 로그인은 provider SDK에서 받은 **id_token(구글) / access token(카카오·페북)** 을 `token`으로 넘겨야 한다.

4. **수동 검증 시나리오**
   - 소셜 로그인 → 쿠키 2개 세팅 확인 / 잘못된 `token`으로 `UNAUTHENTICATED` 확인
   - access 만료(15분) 후 임의 쿼리 → 자동 갱신 + `Set-Cookie` 확인
   - 같은 refresh 토큰을 두 번 사용 → 두 번째 요청 거부 + 세션 종료(재사용 감지) 확인
   - `logout` 이후 기존 refresh로 갱신 시도 → 거부 확인
   - 공유코드 로그인 상태로 아무 Mutation 호출 → `FORBIDDEN` 확인

---

## 남은 과제

- **§7 완결** — 레거시 `woolbankApi` 정리 후 `user.password` 컬럼 nullable 전환.
- **§3 strict 전환** — 레거시 서버 종료 후 `AUTH_REFRESH_STORE_STRICT=1`. 그 전까지는 저장소에 없는 refresh를 흡수하므로 재사용 감지가 이 서버 발급분에만 적용된다.
- **refresh 레코드 정리** — 만료 행이 계속 쌓인다. DDL 하단의 DELETE를 크론에 걸거나 이벤트 스케줄러로 처리.
- **blog 도메인 (이번 범위 밖, 별건)** — `createPost` / `updatePost` / `deletePost` / `sendPushToAll` 등 blog의 Mutation 6개는 **가드가 전혀 없다.** blog는 Apollo context에 `auth`조차 주입하지 않고 작성자를 `middlewares/currentUser.ts`에서 스텁으로 만든다(`BLOG_AUTHOR_USER_NO`). 쿠키는 이미 `.woolta.com`으로 공유되므로 blog context에도 `buildAuthContext`를 붙이고 `requireRealUser`를 거는 것만으로 닫을 수 있다.

---

## 참고: 대안 아키텍처

지금 요구사항(단일 조직 서비스, 서브도메인 SSO, 무효화 필요)이라면 다음도 검토할 만하다.

- **서버 세션 방식** (세션 ID 쿠키 + Redis): 무효화가 공짜로 되고 3·4번 문제가 구조적으로 사라진다. 이 규모에선 JWT보다 나은 선택인 경우가 많다. 단, 레거시 `woolbankApi`가 JWT를 검증하고 있어 두 서버가 공존하는 동안에는 채택 불가.
- **OIDC 구현체 위임** (Auth.js / Auth0 / Supabase Auth): 1·3·4번을 한 번에 해소하지만 마이그레이션 비용이 크다.

레거시 Koa 서버를 내리는 시점이 재설계의 자연스러운 분기점이다.
