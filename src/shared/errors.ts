/**
 * 도메인 에러 계층.
 * 서비스·리졸버는 GraphQL을 모른 채 이 에러를 던지고,
 * Apollo 경계(src/shared/apollo.ts formatError)에서 GraphQL 에러 응답으로 1회 변환된다.
 */
export class AppError extends Error {
  readonly code: string;
  /** 응답 extensions.myExtension 으로 나가는 기계용 상세 식별자 */
  readonly detail?: string;

  constructor(message: string, code: string, detail?: string) {
    super(message);
    this.name = new.target.name;
    this.code = code;
    this.detail = detail;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, detail?: string) {
    super(message, 'BAD_REQUEST', detail);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, detail?: string) {
    super(message, 'NOT_FOUND', detail);
  }
}

export class UnauthenticatedError extends AppError {
  constructor(message = '인증 토큰 정보가 존재하지 않습니다.', detail?: string) {
    super(message, 'UNAUTHENTICATED', detail);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string, detail?: string) {
    super(message, 'FORBIDDEN', detail);
  }
}

export class ConflictError extends AppError {
  constructor(message: string, detail?: string) {
    super(message, 'CONFLICT', detail);
  }
}
