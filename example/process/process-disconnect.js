// 如果 Node.js 进程是从 IPC 通道衍生出来的（参阅子进程和集群的文档），则 process.disconnect() 函数会关闭到父进程的 IPC 通道，以允许子进程一旦没有其他链接来保持活跃就优雅地关闭。

// 调用 process.disconnect() 的效果和父进程调用 ChildProcess.disconnect() 的一样。

// 如果 Node.js 进程不是从 IPC 通道衍生出来的，则调用 process.disconnect() 将会返回 undefined。

process.disconnect();
// 输出（进程非 IPC 通道衍生）：undefined