/**
 * pm2 프로세스 정의 — woolta-api
 *
 * 환경변수 값은 여기 두지 않는다(DB 비밀번호가 레포에 들어가면 안 된다).
 * 대신 서버의 `/etc/woolta/api.env` 를 **이 파일이 직접 읽는다.**
 *
 * 예전에는 deploy.sh 가 source 한 뒤 `--update-env` 로 넘기는 방식이었는데,
 * pm2 가 이전 기동 때의 env 를 그대로 들고 있어서 **새로 추가한 키가 반영되지 않았다**
 * (ENABLE_WOOLBANK_CRON 을 추가했는데 프로세스에는 안 들어가 배치가 계속 꺼져 있었다).
 * 설정 파일이 매번 읽으면 파일이 단일 소스가 되고 셸 상태에 기대지 않는다.
 *
 * 포트 4500 인 이유: 레거시 Koa woolbankApi 가 4000 을 쓰고 있다.
 * Koa 를 내린 뒤에도 4500 을 유지한다 — 바꾸면 nginx 와 FE env 를 같이 고쳐야 한다.
 */
const fs = require('node:fs');

const ENV_FILE = process.env.WOOLTA_API_ENV_FILE || '/etc/woolta/api.env';

/**
 * KEY=VALUE 파일을 읽는다. 주석·빈 줄은 건너뛰고 감싼 따옴표만 벗긴다.
 * 파일이 없으면 빈 객체 — 로컬에서 이 설정을 열어보는 경우까지 막을 필요는 없다.
 */
const readEnvFile = (file) => {
  if (!fs.existsSync(file)) {
    return {};
  }

  const env = {};

  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const trimmed = line.trim();

    if (trimmed === '' || trimmed.startsWith('#')) {
      continue;
    }

    const eq = trimmed.indexOf('=');

    if (eq <= 0) {
      continue;
    }

    const key = trimmed.slice(0, eq).trim();
    const raw = trimmed.slice(eq + 1).trim();
    const unquoted =
      (raw.startsWith('"') && raw.endsWith('"') && raw.length > 1) ||
      (raw.startsWith("'") && raw.endsWith("'") && raw.length > 1)
        ? raw.slice(1, -1)
        : raw;

    env[key] = unquoted;
  }

  return env;
};

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
        // 파일 값이 뒤에 와서 위 기본값을 덮는다(PORT 를 파일에서 바꿀 수 있도록).
        ...readEnvFile(ENV_FILE),
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
