---
title: 5 分钟接入 API 中转服务
description: 从获取 key 到用 curl 调通接口，快速验证你的开发环境。
publishDate: 2026-06-15
order: 1
category: tutorial
tags:
  - quickstart
  - curl
  - openai-compatible
---

## 获取访问凭据

先准备一个可用的 `API Key`，以及对应的 `Base URL`。如果你的服务兼容 OpenAI 接口，通常只需要替换这两项。

## 发送第一条请求

```bash
curl https://api.getmyai.shop/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

## 验证返回结果

你主要看三件事：

- 是否正常返回 `choices`
- 是否能识别目标模型名
- 是否需要开启 `stream`

## 下一步

接口打通后，再把现有脚本或 SDK 的 `base_url` 和 `api_key` 切过去。
