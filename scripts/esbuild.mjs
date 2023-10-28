import * as esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  entryPoints: ['exports/entry.ts'],
  outdir: process.env.BUILD_DIR_NAME,
});
