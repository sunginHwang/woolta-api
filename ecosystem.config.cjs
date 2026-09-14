/**
 * pm2 프로세스 정의 — woolta-api
 *
 * 환경변수는 여기 두지 않는다. DB 비밀번호가 레포에 들어가면 안 되므로
 * 서버의 `/etc/woolta/api.env` 를 읽는다(deploy.sh 가 주입한다).
 *
 * 포트 4500 인 이유: 레거시 Koa woolbankApi 가 4000 을 쓰고 있다.
 * Koa 를 내린 뒤에도 4500 을 유지한다 — 바꾸면 nginx 와 FE env 를 같이 고쳐야 한다.
 */
module.exports = {
  apps: [
    {
      name: 'woolta-api',
      // tsx 로 TS 를 그대로 실행한다(레포에 빌드 단계가 없다).
      // node_modules/.bin 이 아니라 pnpm exec 를 쓰면 pm2 가 래퍼 프로세스를 관리하게 되므로 직접 가리킨다.
      script: './node_modules/.bin/tsx',
      args: 'src/app.ts',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 4500,
      },
      // 부팅 실패를 무한 재시작으로 덮지 않는다
      min_uptime: 10_000,
      max_restarts: 5,
      restart_delay: 2_000,
      kill_timeout: 10_000,
      // 로그는 pm2 기본 위치(~/.pm2/logs)를 쓰고 타임스탬프만 붙인다
      time: true,
    },
  ],
};
