---
title: 插件配置
navTitle: 插件配置
description: 说明 Claude 插件安装方式和最小配置文件。
group: Claude Code 配置文档
groupOrder: 4
pageOrder: 2
sourceUrl: https://docs.ylsagi.io/claude/plugin
tags:
  - claude
  - plugin
  - vscode
---

## 安装插件

如果主要支持 VS Code，可以直接在文档里提示用户搜索对应插件名称。对大部分用户来说，插件安装比命令行更容易上手。

## 编辑配置文件

在 `.claude` 目录下创建或编辑配置文件，例如：

```json
{
  "primaryApiKey": "ylscode"
}
```

## 使用前提

插件页应该明确写明：

- Claude CLI 已完成安装
- 认证信息已经配置
- 插件复用 CLI 或本地配置

这样用户不会在插件安装完成后，才发现命令行还没通。
