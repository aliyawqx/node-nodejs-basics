import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const decompress = async () => {
    const source = path.resolve('src/zip/files/archive.gz');
    const destination = path.resolve('src/zip/files/fileToCompress.txt');

    const gunzip = createGunzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
