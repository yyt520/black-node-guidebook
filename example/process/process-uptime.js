// process.uptime 方法返回当前 Node.js 进程运行时间秒长

// 该返回值包含秒的分数
// 使用 Math.floor 来得到整秒钟

const uptime = process.uptime();

console.log(uptime);
// 输出（示例）：0.075
