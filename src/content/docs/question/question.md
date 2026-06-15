---
title: 通用问题
navTitle: 通用问题
description: 集中解释网络中断和 429 限流这类高频问题。
group: 常见问题
groupOrder: 5
pageOrder: 1
sourceUrl: https://docs.ylsagi.io/question/question
tags:
  - faq
  - rate-limit
  - proxy
---

## 常见通用问题

FAQ 的作用不是重新讲一遍安装流程，而是集中放高频故障点。

### 网络问题：stream disconnected

如果经常出现：

- `error decoding response body`
- `stream disconnected`

先检查网络和代理链路。优先级一般是：

1. 关闭代理重试
2. 检查规则是否把关键域名错误代理了
3. 必要时把目标域名加入直连名单

### 429 速率限制

`429` 说明调用频率超过了当前限制。前台文档可以把这件事说得更可操作：

- 免费计划限制更严
- 付费计划配额更高，但仍有限速
- 自动重试可能进一步放大触发频率

## FAQ 应该长什么样

把每个问题拆成：

- 现象
- 最常见原因
- 最短修复路径

这样比写成大段说明更利于排查。
