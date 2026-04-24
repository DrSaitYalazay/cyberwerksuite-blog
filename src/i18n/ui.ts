export const languages = { de: "Deutsch", en: "English" } as const;
export const defaultLang = "de" as const;

export const ui = {
  de: {
    "nav.blog": "Blog",
    "nav.main": "CyberWerkSuite",
    "nav.tools": "Tools",
    "nav.about": "Über Uns",
    "hero.eyebrow": "Fachartikel & Praxiswissen",
    "hero.title": "Cybersicherheit, Compliance & Governance",
    "hero.subtitle": "Aktuelle Einblicke aus unseren spezialisierten Tools für NIS2, ISO 27001, BSI IT-Grundschutz, AI Governance, DORA und GDPR.",
    "post.readMore": "Weiterlesen",
    "post.back": "Zurück zum Blog",
    "post.published": "Veröffentlicht am",
    "footer.tagline": "Wo Compliance auf Automatisierung trifft.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.legal": "Rechtliches",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
  },
  en: {
    "nav.blog": "Blog",
    "nav.main": "CyberWerkSuite",
    "nav.tools": "Tools",
    "nav.about": "About",
    "hero.eyebrow": "Expert Articles & Insights",
    "hero.title": "Cybersecurity, Compliance & Governance",
    "hero.subtitle": "Current insights from our specialized tools covering NIS2, ISO 27001, BSI IT-Grundschutz, AI Governance, DORA and GDPR.",
    "post.readMore": "Read more",
    "post.back": "Back to Blog",
    "post.published": "Published on",
    "footer.tagline": "Where compliance meets automation.",
    "footer.rights": "All rights reserved.",
    "footer.legal": "Legal",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui["de"]): string {
    return ui[lang][key] || ui.de[key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}
