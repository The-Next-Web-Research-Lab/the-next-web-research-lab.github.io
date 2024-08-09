import { defineConfig } from "vitepress";

import { default as head } from "./configs/head";
import { default as themeLocalesEn } from "./configs/theme-locales-en";
import { default as themeLocalesKr } from "./configs/theme-locales-kr";

export default defineConfig({
  lang: "ko-KR",
  head,
  appearance: "dark",
  ignoreDeadLinks: "localhostLinks",
  themeConfig: {
    search: {
      provider: "local",
    },
  },
  sitemap: {
    hostname: "https://the-next-web-research-lab.github.io",
  },
  locales: {
    root: {
      label: "한국어",
      lang: "ko",
      title: "더넥스트웹리서치랩",
      description: "담백한 프런트엔드 기술 블로그",
      themeConfig: {
        ...themeLocalesKr,
        footer: {
          copyright: "© 2024 더넥스트웹리서치랩 Corp. All rights reserved.",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      title: "The Next Web Research Lab",
      description: "A plain front-end technology blog",
      themeConfig: {
        ...themeLocalesEn,
        footer: {
          copyright: "© The Next Web Research Lab Corp. All rights reserved.",
        },
      },
    },
  },
});
