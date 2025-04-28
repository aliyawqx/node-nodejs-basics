import { readdir, access } from 'fs/promises';
import path from 'path';

const list = async () => {
    const dirPath = path.resolve('src/fs/files');
    try {
        await access(dirPath);
        const files = await readdir(dirPath);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
  }
};

await list();