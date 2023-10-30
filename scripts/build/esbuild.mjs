import * as esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  minify: true,
  treeShaking: true,
  entryPoints: ['exports/entry.ts'],
  outdir: process.env.BUILD_DIR_NAME,
});
