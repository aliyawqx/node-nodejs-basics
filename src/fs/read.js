import { readFile, access } from 'fs/promises';
import path from 'path';

const read = async () => {
    const filePath = path.resolve('src/fs/files/fileToRead.txt');
  try {
    await access(filePath);
    const content = await readFile(filePath, { encoding: 'utf-8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();