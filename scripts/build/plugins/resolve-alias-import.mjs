import fs from 'node:fs';
import path from 'path';
import chalk from 'chalk';

/**
 * A Rollup plugin that restores alias imports in the code.
 * @param {Object} aliasMap - An object containing aliases and their corresponding paths.
 * @returns {Object} - A Rollup plugin object.
 */
export const resolveAliasImportPlugin = (aliasMap) => {
  return {
    name: 'Resolve Path Alias',
    setup(build) {
      build.onLoad({ filter: /^./ }, async (args) => {
        let fileContent = await fs.promises.readFile(args.path, 'utf8');
        const backSteps = path.relative(args.path, 'exports');

        Object.keys(aliasMap).forEach((alias) => {
          const regex = new RegExp(alias, 'g');
          const resolvedPath = path.join(backSteps, aliasMap[alias]);

          fileContent = fileContent.replace(regex, resolvedPath);
          
          const filePath = path.relative('.', args.path);
          console.info(`${filePath} - replaced the ${chalk.blue(alias)} import alias with ${chalk.blue(resolvedPath)}`);
        });
  
        return {
          contents: fileContent,
          loader: 'ts',
        }
      })
    },
  }
}
