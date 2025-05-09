import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.resolve('src/streams/files/fileToRead.txt');
    const stream = createReadStream(filePath);
    stream.pipe(process.stdout);
};

await read();
