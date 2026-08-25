import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/apps/article/schema/**/schema.graphql',
  generates: {
    'src/apps/article/generates': defineConfig(),
  },
};

export default config;
