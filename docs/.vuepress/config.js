import {
  googleAnalyticsPlugin
} from "@vuepress/plugin-google-analytics";
import {
  docsearchPlugin
} from '@vuepress/plugin-docsearch';

import {
  hopeTheme
} from "vuepress-theme-hope"
import {
  getDirname,
  path
} from '@vuepress/utils'

import {default as head} from "./configs/head";
import {default as themeLocalesEn} from "./configs/theme-locales-en";
import {default as themeLocalesKr} from "./configs/theme-locales-kr";

const __dirname = getDirname(
  import.meta.url)

export default {
  shouldPrefetch: false,
  locales: {
    '/': {
      lang: 'ko-KR',
      title: '더넥스트웹리서치랩',
      description: '담백한 프런트엔드 기술 블로그',
    },
    '/en/': {
      lang: 'en-US',
      title: 'TheNextWebResearchLab',
      description: 'A plain front-end technology blog',
    }
  },
  base: '/',
  markdown: {
    importCode: {
      handleImportPath: (str) => {
        return str
          .replace('@/docs', path.resolve(__dirname, '../'))
          .replace('@/0_files', path.resolve(__dirname, '../../0_files'))
      }
    }
  },
  head,
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-D8DGV9TS3G'
    }),
    docsearchPlugin({
      appId: 'KG049CYGHA',
      apiKey: '989e418f2e968981ce479c9ccfdfc9cf',
      indexName: 'the-next-web-research-labio',
      locales: {
        '/': {
          placeholder: '찾고 싶은 포스트와 관련된 검색어를 입력해주세요.',
          translations: {
            button: {
              buttonText: '',
            },
          },
        },
        '/en/': {
          placeholder: 'Search docs',
          translations: {
            button: {
              buttonText: '',
            },
          },
        },
      }
    }),
  ],
  theme: hopeTheme({
    contributors: false,
    colorMode: 'light',
    darkmode: 'toggle',
    breadcrumb: false,
    locales: {
      '/en/': themeLocalesEn,
      '/': themeLocalesKr,
    },
    plugins: {
      mdEnhance: {
        tabs: true,
        codetabs: true,
        demo: true,
      },
      seo: {
        hostname: 'the-next-web-research-lab.github.io',
        fallBackImage: 'https://the-next-web-research-lab.github.io/images/og_image.png'
      },
      sitemap: {
        hostname: 'the-next-web-research-lab.github.io',
      },
      blog: true
    },
  })
}