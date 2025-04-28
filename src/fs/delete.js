import { unlink, access } from 'fs/promises';
import path from 'path';

const remove = async () => {
    const filePath = path.resolve('src/fs/files/fileToRemove.txt');
    try {
        await access(filePath);
        await unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
  }
};

await remove();