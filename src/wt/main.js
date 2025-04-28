import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
    const cpuCount = os.cpus().length;
    const results = [];
    const workers = [];

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(path.resolve('src/wt/worker.js'));
        workers.push(worker);

        results.push(new Promise((resolve) => {
            worker.on('message', (msg) => resolve({ status: 'resolved', data: msg }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        }));

        worker.postMessage(10 + i);
    }

    const finalResults = await Promise.all(results);
    console.log(finalResults);
};

await performCalculations();
