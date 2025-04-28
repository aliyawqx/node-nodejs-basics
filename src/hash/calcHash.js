import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.resolve('src/hash/files/fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => hash.update(chunk));
  stream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
