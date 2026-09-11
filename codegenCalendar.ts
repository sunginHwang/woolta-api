import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/apps/calendar/schema/**/schema.graphql',
  generates: {
    'src/apps/calendar/generates': defineConfig(),
  },
};

export default config;
