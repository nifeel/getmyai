# token-landing

基于 `Astro` 的静态官网与教程站，面向 AI API 中转服务场景。

## 本地开发

如果当前终端提示 `npm` 无法识别，先把本机 Node.js 加到当前 PowerShell 会话：

```powershell
$env:Path='D:\Develop\Nodejs;' + $env:Path
```

进入项目目录：

```powershell
cd D:\Develop\token-landing
```

首次拉取项目后安装依赖：

```powershell
npm.cmd install
```

启动本地开发服务：

```powershell
npm.cmd run dev -- --host 127.0.0.1 --port 4321
```

默认访问地址：

```text
http://127.0.0.1:4321/
```

## 构建

```powershell
npm.cmd run build
```

构建结果输出到 `dist/`，适合直接部署到 Cloudflare Pages。

当前构建流程会先把 `src/styles/getmyai-home.scss` 编译为 `public/getmyai-home.css`，再执行 Astro 静态构建。

## 后续更新流程

修改页面或样式后，建议按下面顺序检查并提交：

```powershell
$env:Path='D:\Develop\Nodejs;' + $env:Path
cd D:\Develop\token-landing
npm.cmd run build
git status
git add .
git commit -m "Update site content"
git push origin main
```

推送到 `main` 后，Cloudflare Pages 会自动重新构建并发布。

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 或更高
