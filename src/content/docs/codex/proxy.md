---
title: 网络与代理
navTitle: 网络与代理
description: 处理 stream disconnected、代理绕行和显式代理环境变量配置。
group: Codex 配置文档
groupOrder: 2
pageOrder: 6
sourceUrl: https://docs.ylsagi.io/codex/proxy
tags:
  - codex
  - proxy
  - network
---

## 网络问题：stream disconnected

如果你经常看到：

- `error decoding response body`
- `stream disconnected`

通常优先检查网络或代理链路，而不是先怀疑模型本身。

## 排查顺序

1. 先关闭代理试一遍
2. 必须用代理时，确认代理规则和端口正确
3. 对关键域名配置直连或绕过代理

## 指定代理环境变量

可以在 `~/.codex/.env` 里显式指定：

```env
https_proxy="http://127.0.0.1:7000"
http_proxy="http://127.0.0.1:7000"
all_proxy="socks5://127.0.0.1:7000"
NO_PROXY="localhost,127.0.0.1"
```

修改后重启 Codex 生效。

## 文档怎么写更有效

代理文档最重要的是给出：

- 现象
- 原因判断
- 一组可复制的环境变量
- 什么时候该绕过代理
