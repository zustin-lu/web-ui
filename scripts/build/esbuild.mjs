import * as esbuild from 'esbuild';
import path from 'path';

import { resolveAliasImportPlugin } from './plugins/resolve-alias-import.mjs';

// --------- Build src folder ---------
await esbuild.build({
  entryPoints: ['src/components/**/component.tsx'],
  format: 'esm',
  jsx: 'automatic', // https://esbuild.github.io/content-types/#auto-import-for-jsx
  outdir: path.join(process.env.BUILD_OUT_DIR),
  outbase: 'src',
}).catch(() => process.exit(1));

// --------- Build exports folder ---------
await esbuild.build({
  entryPoints: ['exports/**/*.ts'],
  outdir: path.join(process.env.BUILD_OUT_DIR, 'exports'),
  target: 'es6',
  format: 'esm',
  plugins: [
    resolveAliasImportPlugin({ '@components': 'components' })
  ]
}).catch(() => process.exit(1));
