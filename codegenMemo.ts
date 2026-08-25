import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/apps/memo/schema/**/schema.graphql',
  generates: {
    'src/apps/memo/generates': defineConfig(),
  },
};

export default config;
