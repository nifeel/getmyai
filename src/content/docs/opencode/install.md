---
title: 安装 OpenCode
navTitle: 安装 OpenCode
description: 讲清 OpenCode 的安装、启动方式和升级命令。
group: OpenCode 配置文档
groupOrder: 3
pageOrder: 1
sourceUrl: https://getmyai.shop/docs/opencode/install
tags:
  - opencode
  - cli
  - install
---

## 首先安装 OpenCode

前置条件仍然是 `Node.js 22+`。

```bash
npm i -g opencode-ai
```

安装完成后先检查版本：

```bash
opencode -v
```

## 使用方式

命令行模式：

```bash
opencode
```

网页界面模式：

```bash
opencode web
```

## 更新命令

```bash
opencode upgrade
```

## 文档建议

这一页适合作为 OpenCode 栏目的入口，模型和供应商配置放到下一页，不要混写。
