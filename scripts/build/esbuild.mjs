import * as esbuild from 'esbuild';
import path from 'path';

import { resolveAliasImportPlugin } from './plugins/resolve-alias-import.mjs';

// --------- Build components ---------
await esbuild.build({
  entryPoints: ['src/components/**/component.tsx'],
  format: 'esm',
  jsx: 'automatic', // https://esbuild.github.io/content-types/#auto-import-for-jsx
  outdir: path.join(process.env.BUILD_OUT_DIR),
  outbase: 'src',
  
  minify: true,
  // bundle: true,
  // splitting: true,
  // chunkNames: 'shared/components-[hash]',
}).catch(() => process.exit(1));

// --------- Build themes ---------
await esbuild.build({
  entryPoints: ['src/themes/**/*.tsx'],
  format: 'esm',
  jsx: 'automatic', // https://esbuild.github.io/content-types/#auto-import-for-jsx
  outdir: path.join(process.env.BUILD_OUT_DIR),
  outbase: 'src',
}).catch(() => process.exit(1));

// --------- Build exports folder ---------
await esbuild.build({
  entryPoints: ['src/exports/**/*.ts'],
  outdir: path.join(process.env.BUILD_OUT_DIR, 'exports'),
  target: 'es6',
  format: 'esm',
  plugins: [
    resolveAliasImportPlugin({ '@components': 'components', '@themes': 'themes' })
  ]
}).catch(() => process.exit(1));
