import fs from 'node:fs';
import path from 'path';
import chalk from 'chalk';

/**
 * A Rollup plugin that restores alias imports in the code.
 * @param {Object} aliasMap - An object containing aliases and their corresponding paths.
 * @returns {Object} - A Rollup plugin object.
 */
export const replaceAliasImportPlugin = (aliasMap) => {
  return {
    name: 'Resolve Path Alias',
    setup(build) {
      build.onLoad({ filter: /^./ }, async (args) => {
        let fileContent = await fs.promises.readFile(args.path, 'utf8');
        
        const aliases = Object.keys(aliasMap);
        aliases.forEach((alias) => {
          const regex = new RegExp(alias, 'g');
          fileContent = fileContent.replace(regex, aliasMap[alias]);
          
          const normalizedPath = path.relative('.', args.path);
          console.info(`${chalk.blue(normalizedPath)} - replaced the ${alias} import with ${aliasMap[alias]}`);
        });
  
        return {
          contents: fileContent,
          loader: 'ts',
        }
      })
    },
  }
}
