import { readFileSync } from "node:fs";
import { join } from "node:path";

const navSyncScript = String.raw`
<script>
(() => {
  const normalizePath = (path) => {
    if (!path || path === "/index.html") return "/";
    return path.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
  };

  const syncNav = () => {
    const currentPath = normalizePath(window.location.pathname);
    const navItems = document.querySelectorAll(".centerNav .nav-item");

    navItems.forEach((item) => {
      let itemPath = "/";
      try {
        itemPath = normalizePath(new URL(item.getAttribute("href"), window.location.origin).pathname);
      } catch {
        itemPath = normalizePath(item.getAttribute("href") || "/");
      }

      const active = itemPath === currentPath;
      item.classList.toggle("router-link-active", active);
      item.classList.toggle("router-link-exact-active", active);

      if (active) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncNav, { once: true });
  } else {
    syncNav();
  }
})();
</script>`;

export function renderReferencePage(referenceFile: string) {
  const sourceHtml = readFileSync(join(process.cwd(), "src/reference", referenceFile), "utf-8");
  const sharedHeader = readFileSync(join(process.cwd(), "src/reference/shared-header.html"), "utf-8");
  const sharedFooter = readFileSync(join(process.cwd(), "src/reference/shared-footer.html"), "utf-8");

  return sourceHtml
    .replace(/<div class=sticky-widget\b[\s\S]*?(?=<div class=content data-v-1ff4e71c>)/, sharedHeader)
    .replace(/<div class=content-bottom\b[\s\S]*?<\/footer>/, sharedFooter)
    .replace(/<div role=region aria-label="Notifications \(F8\)"[\s\S]*?<\/iframe>/, "")
    .replace(/<iframe id=intercom-frame\b[\s\S]*?(?=<link rel=stylesheet href=\/getmyai-home\.css>)/, "")
    .replace(/<div class=intercom-lightweight-app>[\s\S]*?<\/div>\s*<script id="getmyai-pricing-theme-script">/, '<script id="getmyai-pricing-theme-script">')
    .replace(/<div id=intercom-container\b[\s\S]*?<\/div>(?=<\/div><script type=module)/, "") + navSyncScript;
}
