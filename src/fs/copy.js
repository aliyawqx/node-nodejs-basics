import { cp, access } from 'fs/promises';
import path from 'path';

const copy = async () => {
    const srcPath = path.resolve('src/fs/files');
    const destPath = path.resolve('src/fs/files_copy');
    try {
      await access(srcPath);
      await access(destPath).then(() => { throw new Error('FS operation failed'); }).catch(() => {});
      await cp(srcPath, destPath, { recursive: true });
    } catch {
      throw new Error('FS operation failed');
    }
};

await copy();
