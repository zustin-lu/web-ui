import * as esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  minify: true,
  treeShaking: true,
  jsx: 'automatic', // https://esbuild.github.io/content-types/#auto-import-for-jsx
  entryPoints: ['exports/index.ts'],
  outdir: process.env.BUILD_DIR_NAME,
});
