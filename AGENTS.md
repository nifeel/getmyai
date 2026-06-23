# Project Instructions

## Scope

This repository is a static Astro site for `getmyai`.
Primary goals:
- preserve the current visual style
- add new pages efficiently
- keep header/footer/theme behavior consistent
- prefer stable, low-risk edits over clever runtime hacks

## Architecture

- Reference source HTML lives in `src/reference/`
- Shared header lives in `src/reference/shared-header.html`
- Shared footer lives in `src/reference/shared-footer.html`
- Reference page assembly logic lives in `src/utils/reference-page.ts`
- Route files live in `src/pages/`
- Page styles live in `src/styles/`
- Built CSS is emitted to `public/`

Current reference-driven pages:
- home
- pricing

## Preferred Page Workflow

When adding a new marketing/content page:

1. Add a new reference file under `src/reference/`
2. Add the page to `referenceHtmlMap` in `src/utils/reference-page.ts`
3. Create a route in `src/pages/`
4. Create a page-specific SCSS file in `src/styles/` if needed
5. Reuse shared header/footer instead of duplicating navigation or footer markup

## Editing Rules

- Do not use `replaceAll` for ordinary business copy changes if the source reference HTML can be edited directly.
- Prefer editing the actual reference HTML content instead of layering many string replacements.
- Keep runtime transformation logic in `src/utils/reference-page.ts` limited to structural cleanup and shared layout injection.
- Avoid adding browser-specific runtime hacks unless the issue is clearly caused by site code.
- If a problem reproduces only in one browser and not in Firefox, treat browser extensions/translation/injection as the first suspect.

## Shared UI Rules

- Header and footer should stay visually aligned across pages.
- Shared markup is not enough for shared behavior: if header/footer/theme visuals must match, put the common CSS in a shared SCSS partial and import it from each page stylesheet.
- Footer structure belongs in `src/reference/shared-footer.html`; footer layout and theme rules belong in a shared style source such as `src/styles/_shared-footer.scss`.
- Reference snapshots can contain the original site's exact visual tokens. Before inventing a header/footer treatment, inspect the matching source reference or live reference page first. For example, the ylsCode light header used a pale translucent gray layer (`#f0f0f080`) plus backdrop blur and a subtle bottom border; a nearly white transparent layer can make the glass effect look invisible on a white hero.
- For shared reference-page header tweaks, update both `src/styles/getmyai-home.scss` and `src/styles/getmyai-pricing.scss`, then rebuild so `public/getmyai-home.css` and `public/getmyai-pricing.css` are regenerated.
- Theme toggle behavior should be consistent across home and pricing.
- Theme-specific styles should change color tokens, backgrounds, borders, and filters only. Avoid changing layout properties such as `display`, `gap`, `padding`, `margin`, width, or alignment between light and dark themes unless explicitly intended.
- Accent color should remain the current light blue direction, not green.
- Do not change footer structure unless explicitly requested.
- Do not invent new nav behavior on one page only.
- For logo/model marquees, keep light theme assets in their original color unless the request explicitly asks for monochrome. If dark theme needs monochrome/inverted icons, scope those filters to `html.dark`.

## Content Rules

- This is a promotional/product site, not a generic landing page.
- Keep copy direct and professional.
- Avoid low-grade marketing language.
- When writing pricing/subscription copy, distinguish personal users from enterprise users clearly.
- Enterprise copy should emphasize stability, transparency, and deployment options.

## Build And Verify

Use:

```powershell
$env:Path = 'D:\Develop\Nodejs;' + $env:Path
& 'D:\Develop\Nodejs\npm.cmd' run build
```

If local preview is needed and a dev server is already running, reuse it instead of starting another one.

When a rendered page still looks unchanged after editing SCSS:
- check whether the reference HTML contains inline `<style>` rules with higher source-order priority
- check `src/utils/reference-page.ts` for injected styles appended after page CSS
- verify the generated CSS in `public/`, then hard-refresh the browser or add a cache-busting query during inspection
- compare computed styles in the browser before adding more overrides

## Known Boundaries

- Chrome may inject translation/info UI that is not part of project code.
- Do not overfit project code to suppress browser-extension artifacts.
- Static cleanup of saved reference HTML is acceptable.
- Heavy runtime DOM-deletion loops are not preferred unless explicitly necessary.

## High-Value Follow-up Direction

For long-term maintainability:
- keep old pages reference-driven if they already match the target style
- build new pages in a more componentized Astro style when practical
- gradually move repeated sections from raw reference HTML into reusable Astro components
