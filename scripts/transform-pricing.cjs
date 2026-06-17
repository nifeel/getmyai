const fs = require("node:fs");

const src = process.env.PRICING_REF;
const dest = "src/reference/getmyai-pricing.html";

if (!src) {
  throw new Error("Missing PRICING_REF");
}

let html = fs.readFileSync(src, "utf8");

const literalReplacements = [
  ["ylsCode", "GetMyAI"],
  ["ylscode.com", "getmyai.shop"],
  ["code.ylsagi.com", "getmyai.shop"],
  ["uptime.ylsagi.com/status/claudecode", "getmyai.shop"],
  ["ylsagi.com", "getmyai.shop"],
  ["code@ylsagi.com", "support@getmyai.shop"],
  ["code@getmyai.shop", "support@getmyai.shop"],
  ["mailto:code@getmyai.shop", "mailto:support@getmyai.shop"],
  ["https://t.me/ylsagi", "https://getmyai.shop"],
  ["https://www.youtube.com/@ylsapp", "https://getmyai.shop"],
  ["ELISE AGI LTD (UNITED KINGDOM)", "上海盖特埃科技有限公司"],
  ["ELISE AGI LTD", "上海盖特埃科技有限公司"],
  ["伊莉思AGI (Hong Kong)", "GetMyAI"],
  ["伊莉思AGI", "GetMyAI"],
  ["ELISE AGI", "GetMyAI"],
  ["7 Copperfield Road, Coventry, West Midlands, England", "上海盖特埃科技有限公司"],
  ["Codex 订阅方案 - GetMyAI", "GetMyAI 订阅方案"],
  ["更经济的 CodeX Api订阅", "GetMyAI API 订阅方案"],
  ["限时免费试用和更经济灵活的订阅/即用即付，多种选择", "个人订阅、按量 API 与企业独立方案，费用公开透明"],
  ["支持Codex CLI / APP / IDE插件 · ⚡️ Token缓存高命中率 · 📦 支持Fast和远程压缩上下文", "支持 Codex CLI / APP / IDE 插件 · Token 缓存与远程压缩 · OpenAI 兼容接口"],
  ["For light individual usage.", "适合轻量个人使用、插件测试和低频开发辅助。"],
  ["For professional users and regular work.", "适合稳定使用 Codex、Claude Code、Cursor 等工具的专业用户。"],
  ["For advanced users with higher demand.", "适合高频开发、长上下文任务和持续编码工作流。"],
  ["For high-volume advanced usage.", "适合重度自动化开发、批量任务和更高额度需求。"],
  ["Coming soon. Pay-as-you-go API without subscription", "按实际调用消耗，无需固定订阅"],
  ["Billed by actual usage", "费用按实际使用统计"],
  ["Supports more agent models", "支持更多 Agent 模型接入"],
  ["付款方式由 Stripe 支付平台提供保障安全稳定 (注：银联仅支持外币信用卡)", "费用、额度和扣费规则以控制台展示为准，企业方案可联系人工确认。"],
  ["Google Pay 或 Apple Pay 支付仅在在特定网络设备中显示可用", "个人用户关注余额与消耗，企业用户可使用独立服务器、独立后台和代运营服务。"],
  ["严禁共用账户或二次分发，违反规定将导致账户被封禁。", "请按实际授权范围使用账户和接口，避免共享、转售或二次分发造成服务风险。"],
  ["可在订阅管理中升级订阅计划, 或临时使用API计费模式。", "可升级订阅计划，也可以临时使用按量 API 模式。企业用户建议咨询独立方案。"],
  ["是否提供发票？ 如何联系客服？", "企业独立方案是什么？ 如何联系客服？"],
  ["Stripe Climate", ""],
  ["除碳事业企业联盟", ""],
  ["为我们共同的未来而行动", ""],
  ["查看除碳捐助", ""],
  ["#22c55e", "#38bdf8"],
  ["#16a34a", "#0ea5e9"],
  ["#15803d", "#0284c7"],
];

for (const [from, to] of literalReplacements) {
  html = html.split(from).join(to);
}

const regexReplacements = [
  [/将收入的 一部分捐助给[\s\S]{0,180}?每个人都可以加入！/g, "为个人开发者与企业团队提供稳定透明的 AI API 服务。"],
  [/--ui-color-primary-50:var\(--color-green-50[^;]*;/g, "--ui-color-primary-50:#eff6ff;"],
  [/--ui-color-primary-100:var\(--color-green-100[^;]*;/g, "--ui-color-primary-100:#dbeafe;"],
  [/--ui-color-primary-200:var\(--color-green-200[^;]*;/g, "--ui-color-primary-200:#bfdbfe;"],
  [/--ui-color-primary-300:var\(--color-green-300[^;]*;/g, "--ui-color-primary-300:#93c5fd;"],
  [/--ui-color-primary-400:var\(--color-green-400[^;]*;/g, "--ui-color-primary-400:#60a5fa;"],
  [/--ui-color-primary-500:var\(--color-green-500[^;]*;/g, "--ui-color-primary-500:#38bdf8;"],
  [/--ui-color-primary-600:var\(--color-green-600[^;]*;/g, "--ui-color-primary-600:#0ea5e9;"],
  [/--ui-color-primary-700:var\(--color-green-700[^;]*;/g, "--ui-color-primary-700:#0284c7;"],
  [/--ui-color-primary-800:var\(--color-green-800[^;]*;/g, "--ui-color-primary-800:#0369a1;"],
  [/--ui-color-primary-900:var\(--color-green-900[^;]*;/g, "--ui-color-primary-900:#075985;"],
];

for (const [from, to] of regexReplacements) {
  html = html.replace(from, to);
}

const seo = '<title>GetMyAI 订阅方案 - AI API 与 Codex 服务</title><meta name="description" content="GetMyAI 提供个人订阅、按量 API、企业独立服务器与代运营方案，费用公开透明，支持 Codex CLI、Claude Code、Cursor 等工作流。"><link rel="canonical" href="https://getmyai.shop/pricing"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/getmyai-pricing.css">';
html = html.replace(/<meta name=viewport[^>]*>/i, (match) => `${match}${seo}`);

fs.writeFileSync(dest, html, "utf8");
console.log(`wrote ${dest}, ${html.length} chars`);
