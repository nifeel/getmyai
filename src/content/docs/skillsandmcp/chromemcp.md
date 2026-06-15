---
title: chrome-devtools-mcp
navTitle: chrome-devtools-mcp
description: 用于把 Chrome DevTools 能力暴露给 Claude、Codex、Cursor 等客户端。
group: 扩展 Skills 和 MCP
groupOrder: 6
pageOrder: 1
sourceUrl: https://docs.ylsagi.io/skillsandmcp/chromemcp
tags:
  - mcp
  - chrome
  - devtools
---

## chrome-devtools-mcp

这一类页面很适合作为“扩展能力”栏目，帮助用户把 AI 编码助手接到真实浏览器环境。

## 必要条件

- 已安装并能运行 Chrome
- 本机具备 `npx`
- 当前客户端支持 MCP

## Claude 中使用

```bash
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

## Codex 中使用

```bash
codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
```

## 开始使用

安装完成后，可以直接在客户端里发一条简单提示验证：

```text
Check the performance of https://developers.chrome.com
```

## 为什么这个栏目有必要

当你的文档站不只服务 API 接入，还服务编码工作流时，Skills 和 MCP 会成为转化很强的内容块。
