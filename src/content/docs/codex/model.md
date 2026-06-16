---
title: Codex 配置与使用
navTitle: Codex 配置/使用
description: 覆盖模型切换、手动指定模型、远程压缩、1M 上下文、多 Agent 和目标模式。
group: Codex 配置文档
groupOrder: 2
pageOrder: 4
sourceUrl: https://getmyai.shop/docs/codex/model
tags:
  - codex
  - model
  - config
---

## 模型切换

可以直接通过 `/model` 命令切换模型。文档里建议把“默认模型”和“适合的推理等级”一起解释清楚。

- `high`：适合大多数场景
- `xhigh`：适合更复杂的任务，但更慢

## 手动配置模型

如果最新模型还没出现在默认列表里，可以手动修改：

```toml
model = "gpt-5.5"
```

配置文件位置：

```text
~/.codex/config.toml
```

## 远程压缩

如果用户经常遇到上下文被压缩、对话记忆丢失之类的问题，可以把远程压缩行为讲清楚。

- 使用默认 `OpenAI` 名称时，可能保持远程压缩策略
- 改为自定义供应商名时，可用于避免自动远程压缩

这部分不要写得过于魔法，最好说明变更的后果。

## 1M 上下文配置

长上下文不是默认就值得开启。参考页明确提到，超大上下文会带来更高成本，且模型注意力可能明显下降。

如果希望保持默认上下文策略，不要手动设置：

```toml
model_context_window
model_auto_compact_token_limit
```

## Agents / Multiple agents

较新版本的 Codex 默认可能启用多 Agent 能力。它会带来更多 Token 消耗，并不一定提升结果质量。

建议文档里直接提醒：

- 不要随意增加 Agent 数量
- 先观察默认配置效果
- 高并发或长链路任务再考虑调整

## Goal 命令

Goal 模式适合给 Codex 设置一个持续目标。

```toml
[features]
goals = true
```

这类实验特性单独成节，比塞进 FAQ 更容易被用户找到。
