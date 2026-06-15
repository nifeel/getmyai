---
title: 配置模型
navTitle: 配置模型
description: 说明 OpenCode 如何通过 OpenAI 兼容供应商接入 Codex 模型。
group: OpenCode 配置文档
groupOrder: 3
pageOrder: 2
sourceUrl: https://docs.ylsagi.io/opencode/codex
tags:
  - opencode
  - provider
  - codex
---

## 安装供应商 SDK

如果要用 OpenCode 连接 OpenAI 兼容的模型供应商，可以先安装对应 SDK：

```bash
npm install @ai-sdk/openai
```

## 配置目录

配置目录通常在用户主目录下：

```text
.config/opencode
```

## 配置文件

创建或编辑 `opencode.json`：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "relay": {
      "npm": "@ai-sdk/openai",
      "name": "relay",
      "options": {
        "baseURL": "https://api.getmyai.shop/codex",
        "apiKey": "<你的API Key>",
        "setCacheKey": true
      },
      "models": {
        "gpt-5.4": {},
        "gpt-5.4-codex": {}
      }
    }
  },
  "model": "relay/gpt-5.4"
}
```

## 切换到供应商模型

启动 `opencode` 后，通过 `/models` 选择你配置好的供应商与模型。

## 为什么这页有价值

这类内容非常适合 Markdown，因为后面新增一个供应商配置，只需要再加一篇文档，不需要改页面模板。
