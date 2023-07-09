---
nav:
  title: 系统
  order: 3
group:
  title: 异步 I/O
  order: 2
title: Console 控制台
order: 13
---

# Console 控制台

Node.js 中的 `console` 模块提供了简单的调试控制台，类似于 Web 浏览器提供的 JavaScript 控制台。

该模块到处两个特定组件：

- Console 类，包含 `console.log()`、`console.error()` 和 `console.warn()` 等方法，可用于写入任何 Node.js 流
- 全局的 `console` 实例，配置为写入 `process.stdout` 和 `process.stderr`。使用时无需调用 `require('console')`

注意：全局的 `console` 对象的方法既不像浏览器中的 API 那样总是同步，也不像其他 Node.js 流那样总是异步。

🌰 **示例：Console 类的使用方法**

```js
const { Console } = require('console');

const { Console } = console;
```

## 输出处理

在浏览器和 Node.js 中均可使用 `console.log` 和 `console.error`，但是在 Node.js 中，两者的处理稍有区别。

当你在 Node.js 中将以下代码写入名为 `index.js` 的文件中时，并在终端执行，你会直接看到两者的输出：

```js
console.log('Hello world!');
// Hello world!

console.log('Bye Bye!');
// Bye Bye!
```

虽然它们看起来可能一样，但实际上系统对它们的处理方式是不同的。如果你查阅 Node.js 文档的 `console` 部分，会看到 `console.log` 是输出 `stdout`，而 `console.error` 用的是 `stderr`。

每个进程都有三个可用的默认 Stream：

- `stdin` 流用来处理进程的输入，例如按下按钮或重定向输出
- `stdout` 流用于程序的输出
- `stderr` 用于错误消息

简而言之，这允许我们在 shell 中使用重定向（`>`）和管道（`|`）来处理错误和诊断信息，它们是与程序的实际输出结果是分开的。虽然 `>` 允许我们将命令的输出重定向到文件中，但是 `2>` 允许我们将 `stderr` 的输出重定向到文件中。例如，下面的命令会将 `Hello there` 传给一个名为 `hello.log` 的文件并把 `Bye Bye!` 传到一个名为 `error.log` 的文件中。

```bash
node index.js > hello.log 2> error.log
```

---

**参考资料：**

- [📝 A Guide to Node.js Logging](https://www.twilio.com/blog/guide-node-js-logging)
