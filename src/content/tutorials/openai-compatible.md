---
title: 如何替换成 OpenAI 兼容接口
description: 用最小改动把现有 OpenAI SDK 代码切到你的中转服务。
publishDate: 2026-06-15
order: 2
category: tutorial
tags:
  - sdk
  - migration
  - openai
---

## 替换 Base URL

如果你的项目已经在用 OpenAI SDK，通常不用改业务逻辑，先把 `base_url` 指到中转服务。

## 保持模型映射一致

前台文档里要明确告诉用户，哪些模型名可以直接用，哪些做了映射。这个信息比营销文案更关键。

## 流式输出测试

中转接口上线前，至少验证一次 `stream=true` 的输出。很多开发工具场景默认依赖流式体验。

## 常见问题

- 模型名不一致
- 上游权限不足
- 某些 SDK 默认超时偏短
