---
title: 安装 IDE 插件
navTitle: 安装 IDE 插件
description: 让 Codex CLI 的配置直接复用到 IDE 插件场景。
group: Codex 配置文档
groupOrder: 2
pageOrder: 2
sourceUrl: https://docs.ylsagi.io/codex/plugin
tags:
  - codex
  - ide
  - vscode
---

## 插件配置

这类页面的重点不是讲插件有多强，而是先要求用户把 CLI 配好。插件往往直接复用 CLI 的认证和模型设置。

## 安装前提

请先确认：

- `Codex CLI` 已经安装
- CLI 能正常调用模型
- 当前机器的代理或网络设置可用

## 安装插件

在支持的 IDE 中搜索并安装对应插件。文档里建议明确列出你重点支持的工具，例如：

- VS Code
- JetBrains 系列
- Cursor

## 为什么要单独一页

插件用户通常遇到的问题和命令行用户不同，单独页面更方便写：

- 插件是否自动复用 CLI 配置
- 需要不要额外填 Key
- 插件常见报错如何排查
