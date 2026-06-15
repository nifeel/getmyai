# token-landing

基于 `Astro` 的静态官网与教程站，面向 AI API 中转服务场景。

## 本地开发

```powershell
D:\Develop\Nodejs\npm.cmd install
D:\Develop\Nodejs\npm.cmd run dev
```

默认访问地址：

```text
http://127.0.0.1:4321
```

## 构建

```powershell
D:\Develop\Nodejs\npm.cmd run build
```

构建结果输出到 `dist/`，适合直接部署到 Cloudflare Pages。

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 或更高
