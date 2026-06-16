---
title: 模型配置
navTitle: 模型配置
description: 说明 Claude 模型切换、额度差异和 1M 上下文开关。
group: Claude Code 配置文档
groupOrder: 4
pageOrder: 3
sourceUrl: https://getmyai.shop/docs/claude/model
tags:
  - claude
  - model
  - context
---

## 模型切换

参考站点把这件事讲得很直接：Claude 模型和 Codex 订阅不是同一套资源，文档里必须提前说清。

使用 `/model` 可以切换模型。默认通常是 `sonnet`。

### 关于 Opus

如果你开放更高规格模型，建议在文档里明确说明配额或周期限制，避免用户误会是服务异常。

## 开启 1M 上下文模型

如果平台支持实验性长上下文，可以单独说明，不要混到安装页：

```text
/model sonnet[1m]
```

## 什么时候不建议开

长上下文不是默认最优解。对于普通聊天、脚本和简单生成任务，标准上下文通常更稳、更省。
