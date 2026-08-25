import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/apps/todo/schema/**/schema.graphql',
  generates: {
    'src/apps/todo/generates': defineConfig(),
  },
};

export default config;
