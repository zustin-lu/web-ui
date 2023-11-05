import * as esbuild from 'esbuild';
import path from 'path';

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

await esbuild.build({
  entryPoints: ['exports/components.ts'],
  outdir: path.join(process.env.BUILD_OUT_DIR, 'exports'),
  target: 'es6',
  format: 'esm',
}).catch(() => process.exit(1));
