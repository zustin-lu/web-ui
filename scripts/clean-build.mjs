/**
 * Why not just use `rm -rf` command from terminal?
 * That command not available on Windows OS by default.
 * So this script aim to make things work on cross-platform for better development experience.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryToRemove = path.join(__dirname, '../', process.env.BUILD_DIR_NAME);

async function removeDirectory(dirPath) {
  try {
    await fs.access(dirPath);
    await fs.rm(dirPath, { recursive: true });
    console.log(`Removed directory: ${dirPath}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.info('Build folder does not exist, skipping removal');
    } else {
      console.error(`Error removing directory: ${dirPath}`, err);
    }
  }
}

removeDirectory(directoryToRemove);
