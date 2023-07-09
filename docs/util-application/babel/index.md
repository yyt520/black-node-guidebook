---
nav:
  title: 工具应用
  order: 6
group:
  title: 编译
  order: 1
title: Babel
order: 1
---

# Babel

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
- 源码转换 (codemods)

Babel 的三个主要处理步骤分别是：解析（Parse）、转换（Transform）和生成（Generate）。

- 解析：
- 转换：
- 生成：

## 预设

[更详尽有关预设的配置项](https://www.babeljs.cn/docs/presets)

官方预设：

- `@babel/preset-env`：使用该预设能允许你使用最新版本的 JavaScript 语法而无须语法转换
- `@babel/preset-flow`：
- `@babel/preset-react`：
- `@babel/preset-typescript`：

实验性质的预设：stage-x preset 中任何语法转换都是对语言本身的更改，而这些更改尚未被纳入 JavaScript 标准

[TC39] 将提案分为以下几个阶段：

- [Stage 0] - 设想（Strawman）：只是一个想法，可能有 Babel 插件。
- [Stage 1] - 建议（Proposal）：这是值得跟进的。
- [Stage 2] - 草案（Draft）：初始规范。
- [Stage 3] - 候选（Candidate）：完成规范并在浏览器上初步实现。
- [Stage 4] - 完成（Finished）：将添加到下一个年度版本发布中。

```json
{
  "presets": [
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "stage-2"
  ]
}
```

## 插件

Babel 是一个编译器（输入源码 => 输出编译后的代码）。就像其他编译器一样，编译过程分为三个阶段：解析、转换和打印输出。

现在，Babel 虽然开箱即用，但是什么动作都不做。它基本上类似于 `const babel = code => code;`，将代码解析之后再输出同样的代码。如果想要 Babel 做一些实际的工作，就需要为其添加插件。

除了一个一个的添加插件，你还可以以 `preset` 的形式启用一组插件。

在 [Babel 转换插件](https://www.babeljs.cn/docs/plugins#%E8%BD%AC%E6%8D%A2%E6%8F%92%E4%BB%B6) 这里可以看到插件列表。

### 插件顺序

这意味着如果两个转换插件都将处理 **程序（Program）** 的某个代码片段，则将根据转换插件或 preset 的排列顺序依次执行。

- 插件在 Presets 前运行。
- 插件顺序从前往后排列。
- Preset 顺序是颠倒的（从后往前）。

例如：

```json
{
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}
```

先执行 `transform-decorators-legacy`，再执行 `transform-class-properties`。

重要的时，preset 的顺序是 颠倒的。如下设置：

```json
{
  "presets": ["es2015", "react", "stage-2"]
}
```

## 模块介绍

### babel-core

### babel-cli

### babel-node

### babel-register

### babel-polyfill

`babel-polyfill` 在代码中的作用主要是用已经存在的语法和 API 实现一些浏览器还没有实现的 API、对浏览器的一些缺陷做一些修补。例如 Array 新增了 `includes` 方法，我想使用，但是低版本的浏览器没有，引入 `babel-polyfill` 则可以帮助我们解决这个问题。

## 配置文件

.babelrc

---

**参考资料：**

- [📖 Babel 中文网](https://www.babeljs.cn/)
- [📖 Babel 手册：用户手册 - 如何安装 / 配置 Babel 及相关内容 - 中文翻译版](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
- [📖 Babel 手册：插件手册 - 如何为 Babel 创建插件 - 中文翻译版](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
