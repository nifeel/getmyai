---
title: 安装 Node.js 和 Git
navTitle: 安装 Node.js 和 Git
description: 把环境准备拆成单独页面，避免所有工具文档都重复解释基础依赖。
group: 快速开始
groupOrder: 1
pageOrder: 2
sourceUrl: https://docs.ylsagi.io/getting-started/installation
tags:
  - nodejs
  - git
  - setup
---

## 为什么要先装这两个

`Codex CLI`、`Claude Code`、`OpenCode` 这类工具都会用到 Node.js。Git 则是最常见的项目与代码管理基础设施。

## 安装 Node.js

推荐安装 `LTS` 版本，至少 `v22.x`。

### Windows

1. 打开 Node.js 官网
2. 下载 `LTS` 安装包
3. 运行 `.msi` 安装文件
4. 按向导完成安装

### macOS / Linux

推荐通过你熟悉的包管理器安装，或者直接使用官方安装包。

## 安装 Git

### Windows

1. 打开 Git 官网
2. 下载 Windows 安装包
3. 使用默认选项安装

### macOS / Linux

通常可以直接用系统包管理器安装。

## 验证环境

```bash
node -v
git --version
```

只要两个命令都正常输出版本号，就可以继续读后续工具文档。
