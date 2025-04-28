import { writeFile } from 'fs/promises';
import { access } from 'fs/promises';
import path from 'path';

const create = async () => {
    const filePath = path.resolve('src/fs/files/fresh.txt');
  try {
    await access(filePath);
    throw new Error('FS operation failed');
  } catch {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  }
};

await create();