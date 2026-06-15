---
title: 安装 Codex CLI
navTitle: 安装 Codex CLI
description: 用最短路径完成 Codex CLI 安装、验证、配置文件定位和更新。
group: Codex 配置文档
groupOrder: 2
pageOrder: 1
sourceUrl: https://docs.ylsagi.io/codex/install
tags:
  - codex
  - cli
  - openai
---

## 首先安装 Codex CLI

安装前确认本地已经有 `Node.js 22+`。

```bash
npm install -g @openai/codex
```

安装完成后，先验证版本：

```bash
codex --version
```

## 配置文件位置

Codex 默认配置目录通常在：

```text
<用户目录>/.codex
```

如果目录不存在，可以手动创建。

## 开始使用

第一次接入时，最重要的是把你的服务地址、Key 和模型策略写清楚。前台文档页要明确：

- `base_url`
- `api_key`
- 默认模型
- 是否支持流式输出

## 更新程序

```bash
npm update -g @openai/codex
```

更新文档单独写一段会比把命令藏在 FAQ 里更清楚。
