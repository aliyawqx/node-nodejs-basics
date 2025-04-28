import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const compress = async () => {
    const source = path.resolve('src/zip/files/fileToCompress.txt');
    const destination = path.resolve('src/zip/files/archive.gz');

    const gzip = createGzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
