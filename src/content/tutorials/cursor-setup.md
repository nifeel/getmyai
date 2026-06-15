---
title: Cursor 接入 API 中转服务示例
description: 用一篇 Markdown 演示教程栏目如何承接工具配置、模型建议和故障排查。
publishDate: 2026-06-15
order: 4
category: tutorial
tags:
  - cursor
  - setup
  - tools
---

## 适合放在教程栏目的内容

如果你想兼顾宣传页和实际转化，工具类内容不要塞进首页。更合理的做法是单独写成教程，让用户顺着栏目继续往下看。

## 这篇文章能承接什么

- Cursor 如何替换 `base_url`
- 推荐使用哪些模型
- 需要不要开启流式输出
- 常见报错如何排查

## 一个最小示例

```bash
curl https://api.getmyai.shop/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-3-7-sonnet",
    "messages": [{"role": "user", "content": "Write a TypeScript function"}],
    "stream": true
  }'
```

## 为什么这种方式适合静态站

静态站并不等于只能放展示文案。像这样的教程文章，本质上就是 Markdown 内容，再由 Astro 生成独立页面。

## 你后续怎么扩展

如果以后你还想加：

- OpenAI SDK 接入教程
- Claude Code 教程
- Codex 配置说明
- 不同模型推荐

继续在 `src/content/tutorials/` 下新增 `.md` 文件就可以。
