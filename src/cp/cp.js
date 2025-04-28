import { fork } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    const child = fork(path.resolve('src/cp/files/script.js'), args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(process.argv.slice(2));
