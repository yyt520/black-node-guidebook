// process.release 属性返回与当前发布相关的元数据 Object，包括源代码和源代码头文件 tarball 的 URL

// process.release 包括如下属性：
// * name <string> 对于 Node.js，此值始终为 'node'。对于遗留的 io.js 发布包，此值为 'io.js'。
// * sourceUrl <string> 指向一个.tar.gz文件的绝对 URL，包括了当前发布的源代码。
// * headersUrl<string> 指向一个.tar.gz文件的绝对 URL，包括了当前发布的源代码的头文件信息。 这个文件要比全部源代码文件明显小很多，可以用于编译 Node.js 原生插件。
// * libUrl <string> 指向一个node.lib文件的绝对 URL，匹配当前发布的结构和版本信息。此文件用于编译 Node.js 本地插件。这个属性只在 Windows 版本中存在，在其他平台中无效。
// * lts <string> 标识当前发布的 LTS 标签的字符串。  只有 LTS 版本存在这个属性，其他所有版本类型（包括当前版本）这个属性都是 undefined。  当前的有效值有：
//   * 'Argon' 用于 4.2.0 开始的 4.x LTS 版本。
//   * 'Boron' 用于 6.9.0 开始的 6.x LTS 版本。
//   * 'Carbon' 用于 8.9.1 开始的 8.x LTS 版本。

console.log(process.release);
// 输出（示例）：
// {
//     name: 'node',
//     sourceUrl: 'https://nodejs.org/download/release/v10.0.0/node-v10.0.0.tar.gz',
//     headersUrl: 'https://nodejs.org/download/release/v10.0.0/node-v10.0.0-headers.tar.gz'
// }