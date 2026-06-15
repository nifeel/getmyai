---
title: 安装 Claude CLI
navTitle: 安装 Claude CLI
description: 覆盖 Claude CLI 安装、配置目录、环境变量和运行方式。
group: Claude Code 配置文档
groupOrder: 4
pageOrder: 1
sourceUrl: https://docs.ylsagi.io/claude/install
tags:
  - claude
  - cli
  - install
---

## 安装程序

开始前确认本地已安装 `Node.js 22+` 和 `Git`。

```bash
npm install -g @anthropic-ai/claude-code
```

## 配置文件

Claude 的配置目录通常在：

```text
<用户目录>/.claude
```

配置文件可以使用：

```text
config.json
```

如果目录不存在，请手动创建。

### API 凭据

文档中建议明确告诉用户这几个环境变量的用途：

- `ANTHROPIC_AUTH_TOKEN`
- `ANTHROPIC_BASE_URL`
- `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`

一个最小配置示例：

```json
{
  "ANTHROPIC_AUTH_TOKEN": "<你的API Key>",
  "ANTHROPIC_BASE_URL": "https://code.ylsagi.com/api"
}
```

## 运行 Claude CLI

```bash
claude
```

启动后建议让用户先进入项目目录，再开始交互。

## 更新 Claude CLI

```bash
npm update -g @anthropic-ai/claude-code
```
