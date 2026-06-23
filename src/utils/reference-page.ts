import getmyaiHomeHtml from "../reference/getmyai-home.html?raw";
import getmyaiPricingHtml from "../reference/getmyai-pricing.html?raw";
import sharedFooter from "../reference/shared-footer.html?raw";
import sharedHeader from "../reference/shared-header.html?raw";

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

const sharedThemeIconStyle = String.raw`
<style>
@layer base{
  :where(.i-lucide\:sun){
    display:inline-block;
    background-color:currentColor;
    -webkit-mask-image:var(--svg);
    mask-image:var(--svg);
    -webkit-mask-repeat:no-repeat;
    mask-repeat:no-repeat;
    -webkit-mask-size:100% 100%;
    mask-size:100% 100%;
    --svg:url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'/%3E%3C/g%3E%3C/svg%3E);
  }
}
body {
  top: 0 !important;
}
</style>`;

const marqueeMonochromeStyle = String.raw`
<style id="getmyai-marquee-monochrome">
html:not(.dark) .marquee-item[data-v-7333e671] img[data-v-7333e671],
html:not(.dark) .marquee-item[data-v-7333e671] img.preserve-color[data-v-7333e671],
html:not(.dark) .marquee-item[data-v-7333e671]:hover img[data-v-7333e671],
html:not(.dark) .marquee-item[data-v-7333e671]:hover img.preserve-color[data-v-7333e671],
html:not(.dark) .marquee-item:hover img[data-v-7333e671],
html:not(.dark) .marquee-item:hover img.preserve-color[data-v-7333e671] {
  filter: none !important;
  opacity: 1 !important;
}

html.dark .marquee-item[data-v-7333e671] img[data-v-7333e671],
html.dark .marquee-item[data-v-7333e671] img.preserve-color[data-v-7333e671],
html.dark .marquee-item[data-v-7333e671]:hover img[data-v-7333e671],
html.dark .marquee-item[data-v-7333e671]:hover img.preserve-color[data-v-7333e671],
html.dark .marquee-item:hover img[data-v-7333e671],
html.dark .marquee-item:hover img.preserve-color[data-v-7333e671],
.dark .marquee-item[data-v-7333e671] img[data-v-7333e671],
.dark .marquee-item[data-v-7333e671] img.preserve-color[data-v-7333e671],
.dark .marquee-item[data-v-7333e671]:hover img[data-v-7333e671],
.dark .marquee-item[data-v-7333e671]:hover img.preserve-color[data-v-7333e671],
.dark .marquee-item:hover img[data-v-7333e671],
.dark .marquee-item:hover img.preserve-color[data-v-7333e671] {
  filter: grayscale(100%) brightness(0) invert(1) !important;
  opacity: 1 !important;
}
</style>`;

const referenceHtmlMap: Record<string, string> = {
  "getmyai-home.html": getmyaiHomeHtml,
  "getmyai-pricing.html": getmyaiPricingHtml,
};

export function renderReferencePage(referenceFile: string) {
  const sourceHtml = referenceHtmlMap[referenceFile];
  const pageStylesheet =
    referenceFile === "getmyai-home.html" ? '<link rel="stylesheet" href="/getmyai-home.css">' : "";

  if (!sourceHtml) {
    throw new Error(`Unknown reference page: ${referenceFile}`);
  }

  return (
    sourceHtml
      .replace(/<style>\.VIpgJd[\s\S]*?<\/style>/, "")
      .replace(/<div id=goog-gt-tt\b[\s\S]*?<\/div>/, "")
      .replace(/<span tabindex="-1" class="infobar-icon"><\/span>/g, "")
      .replace(/<meta charset=utf-8>/, `<meta charset=utf-8>${sharedThemeIconStyle}${pageStylesheet}`)
      .replace(/<div class=sticky-widget\b[\s\S]*?(?=<div class=content data-v-1ff4e71c>)/, sharedHeader)
      .replace(/<div class=content-bottom\b[\s\S]*?<\/footer>/, sharedFooter)
      .replace(/<div role=region aria-label="Notifications \(F8\)"[\s\S]*?<\/iframe>/, "")
      .replace(/<iframe id=intercom-frame\b[\s\S]*?(?=<link rel=stylesheet href=\/getmyai-home\.css>)/, "")
      .replace(/<link rel=stylesheet href=\/getmyai-home\.css>/, "")
      .replace(
        /<div class=intercom-lightweight-app>[\s\S]*?<\/div>\s*<script id="getmyai-pricing-theme-script">/,
        '<script id="getmyai-pricing-theme-script">'
      )
      .replace(/<div id=intercom-container\b[\s\S]*?<\/div>(?=<\/div><script type=module)/, "") +
    marqueeMonochromeStyle +
    navSyncScript
  );
}
