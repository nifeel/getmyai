---
title: 其他错误
navTitle: 其他错误
description: 把高频报错集中收口，避免用户在多个页面之间来回找排查方法。
group: Codex 配置文档
groupOrder: 2
pageOrder: 5
sourceUrl: https://docs.ylsagi.io/codex/info
tags:
  - codex
  - errors
  - troubleshooting
---

## 常见错误

对接中转服务时，最常见的错误通常集中在认证和配置读取。

### 401

如果出现 `401`，先检查：

- `API Key` 是否正确
- `base_url` 是否指向正确的服务地址
- 当前模型权限是否可用

### 找不到 Key

如果报错类似：

```text
Missing environment variable: OPENAI_API_KEY
```

可以在 `~/.codex` 下新建或编辑 `.env` 文件：

```env
OPENAI_API_KEY=<你的Key>
```

## 什么时候应该拆成一页

只要错误排查内容开始包含多条命令、多处文件路径或多种工具场景，就应该单独做一页，而不是继续堆在安装文档末尾。
