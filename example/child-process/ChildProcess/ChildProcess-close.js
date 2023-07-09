const { spawn } = require('child
_process');
const ls = spawn('ls', ['-lh', '/usr']);

// 当子进程的 stdio 流已被关闭时会触发 close 事件
// 这与 exit 事件不同，因为多个进程可能共享相同的 stdio 流

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
    console.log(`子进程使用代码 ${code} 关闭所有 stdio`);
});

ls.on('exit', (code) => {
    console.log(`子进程使用代码 ${code} 退出`);
});

