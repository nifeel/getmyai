export const pricingHero = {
  eyebrow: "Subscription",
  title: "订阅方案",
  description:
    "面向个人开发者提供清晰的订阅与按量使用方案，面向企业团队提供独立服务器、独立后台和代运营服务。所有费用以控制台展示为准，模型、额度和消耗规则公开透明。",
  highlights: ["Codex CLI / APP / IDE 插件", "Token 缓存与远程压缩", "OpenAI 兼容接口"],
};

export const personalPlans = [
  {
    name: "Free",
    badge: "试用",
    price: "可领取 3 天",
    period: "每个账户一次",
    description: "适合验证工具配置、接口兼容性和基础工作流。",
    features: ["限时试用额度", "支持 Codex 相关接入", "试用额度可与付费订阅叠加", "适合首次体验与环境验证"],
    action: "暂不可领",
    href: "#contact",
    muted: true,
  },
  {
    name: "Basic",
    badge: "轻量",
    price: "$20.00",
    period: "31 天",
    description: "适合轻量个人使用、插件测试和低频开发辅助。",
    features: ["每日额度约 $40", "每周额度约 $200", "约 3 倍 GPT Plus 额度参考", "更高优先级与更快响应"],
    action: "立即订阅",
    href: "#contact",
  },
  {
    name: "Pro",
    badge: "推荐",
    price: "$40.00",
    period: "31 天",
    description: "适合稳定使用 Codex、Claude Code、Cursor 等工具的专业用户。",
    features: ["每日额度约 $100", "每周额度约 $500", "约 10 倍 GPT Plus 额度参考", "适合常规开发和项目交付"],
    action: "立即订阅",
    href: "#contact",
    featured: true,
  },
  {
    name: "Max",
    badge: "高频",
    price: "$80.00",
    period: "31 天",
    description: "适合高频开发、长上下文任务和持续编码工作流。",
    features: ["每日额度约 $220", "每周额度约 $1,100", "约 20 倍 GPT Plus 额度参考", "适合更高强度的模型调用"],
    action: "立即订阅",
    href: "#contact",
  },
  {
    name: "Ultra",
    badge: "高级",
    price: "$150.00",
    period: "31 天",
    description: "适合重度自动化开发、批量任务和更高额度需求。",
    features: ["每日额度约 $440", "每周额度约 $2,200", "约 20 倍 GPT Pro 额度参考", "更适合高强度代理任务"],
    action: "立即订阅",
    href: "#contact",
  },
  {
    name: "Pay As You Go API",
    badge: "按量",
    price: "按实际用量",
    period: "即用即付",
    description: "适合不希望固定订阅、只按项目或脚本调用消耗结算的用户。",
    features: ["无需固定套餐", "按实际 API 调用消耗", "支持更多 Agent 模型接入", "账单与余额清晰可查"],
    action: "咨询开通",
    href: "#contact",
  },
];

export const enterprisePlans = [
  {
    name: "企业独立部署",
    price: "定制报价",
    period: "独立服务器",
    description:
      "为团队提供独立服务器、独立后台、独立额度池和权限策略，降低共享环境对稳定性和管理边界的影响。",
    features: ["独立服务器与独立后台", "团队成员与权限管理", "额度、渠道和模型策略配置", "适合研发团队和内部工具平台"],
    action: "联系企业方案",
    href: "#contact",
    featured: true,
  },
  {
    name: "企业代运营",
    price: "定制报价",
    period: "运维服务",
    description:
      "在独立部署基础上提供后台配置、渠道维护、异常排查、文档培训和日常运维协助，让团队专注于业务使用。",
    features: ["后台配置与日常巡检", "模型渠道和线路状态维护", "异常定位与使用建议", "可配合企业内部流程交付"],
    action: "咨询代运营",
    href: "#contact",
  },
];

export const pricingFaqs = [
  {
    question: "价格是否固定？",
    answer:
      "页面用于说明订阅结构和服务边界，最终价格、额度和可用模型以控制台展示为准。我们会尽量保持价格、额度、扣费规则和可用模型说明清晰可查。",
  },
  {
    question: "个人订阅和企业方案有什么区别？",
    answer: "个人订阅更适合个人开发者和小规模工具使用；企业方案重点是稳定性、权限边界、独立资源、可观测性和运维响应。",
  },
  {
    question: "是否支持按量 API？",
    answer: "支持按实际调用消耗的 API 使用方式，适合脚本、插件、内部工具和项目制调用。具体开通范围以当前后台能力为准。",
  },
  {
    question: "企业为什么建议独立服务器？",
    answer: "独立服务器能把企业团队的额度、成员、访问策略和运行状态从共享环境中隔离出来，更利于稳定性、权限管理和后续排障。",
  },
];
