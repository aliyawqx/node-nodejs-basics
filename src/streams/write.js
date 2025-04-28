import { createWriteStream } from 'fs';
import path from 'path';

const write = async () => {
    const filePath = path.resolve('src/streams/files/fileToWrite.txt');
    const stream = createWriteStream(filePath);
    process.stdin.pipe(stream);
};

await write();
