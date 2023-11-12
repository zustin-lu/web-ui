import * as esbuild from 'esbuild';
import path from 'path';

import { replaceAliasImportPlugin } from './plugins/replace-alias-import.mjs';

// --------- Build src folder ---------
await esbuild.build({
  bundle: true,
  treeShaking: true,
  format: 'esm',
  jsx: 'automatic', // https://esbuild.github.io/content-types/#auto-import-for-jsx

  splitting: true,
  chunkNames: 'shared/[hash]',
  
  entryPoints: ['src/components/**/component.tsx'],
  
  outdir: path.join(process.env.BUILD_OUT_DIR),
  outbase: 'src',
}).catch(() => process.exit(1));

// --------- Build exports folder ---------
await esbuild.build({
  entryPoints: ['exports/**/*.ts'],
  outdir: path.join(process.env.BUILD_OUT_DIR, 'exports'),
  target: 'es6',
  format: 'esm',
  plugins: [replaceAliasImportPlugin({
    '@components': '../components',
  })]
}).catch(() => process.exit(1));
