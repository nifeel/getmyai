---
title: 使用伊莉思风格的接入文档
navTitle: 使用说明
description: 整体接入流程从注册、拿到 API Key、准备环境，到选择具体工具文档。
group: 快速开始
groupOrder: 1
pageOrder: 1
sourceUrl: https://getmyai.shop/docs/getting-started
tags:
  - quickstart
  - onboarding
---

## 快速开始

这一类页面的目标是让新用户在几分钟内知道服务怎么用，而不是先理解全部实现细节。首页只讲清楚三件事：

1. 去哪里获取 `API Key`
2. 本地环境需要装什么
3. 下一步该读哪一组工具文档

## 1. 获取 API 密钥

先注册你的服务账户，拿到可用的 `API Key`。如果你后续要兼容 OpenAI、Codex 或 Claude 生态，建议在这里同时告诉用户 `Base URL` 应该填什么。

## 2. 环境准备

推荐先安装：

- `Node.js 22+`
- `Git`

大部分 CLI 工具和插件文档都默认依赖这两个基础环境。

## 3. 选择工具文档

把用户接下来的路径拆清楚：

- 走 `Codex CLI` 的，看 Codex 栏目
- 走 `Claude Code` 的，看 Claude 栏目
- 走 `OpenCode` 的，看 OpenCode 栏目

## 更多参考

如果你的前台要做得像文档站，这一页只负责入口导航。更细的安装、模型、代理和错误处理拆到各自的 Markdown 页面里。
