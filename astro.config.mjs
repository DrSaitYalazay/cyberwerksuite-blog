import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.cyberwerksuite.com",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: true },
  },
  markdown: {
    // Hide remark-gfm's auto footnote heading; we render a localized one via CSS ::before.
    remarkRehype: {
      footnoteLabel: " ",
      footnoteLabelTagName: "h2",
      footnoteLabelProperties: { className: ["sr-only"] },
      footnoteBackLabel: "↩",
    },
  },
});
