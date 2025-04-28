import { rename as fsRename, access } from 'fs/promises';
import path from 'path';

const rename = async () => {
    const oldPath = path.resolve('src/fs/files/wrongFilename.txt');
    const newPath = path.resolve('src/fs/files/properFilename.md');
    try {
      await access(oldPath);
      await access(newPath).then(() => { throw new Error('FS operation failed'); }).catch(() => {});
      await fsRename(oldPath, newPath);
    } catch {
      throw new Error('FS operation failed');
    }
};

await rename();