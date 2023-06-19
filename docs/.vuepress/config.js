import {
  googleAnalyticsPlugin
} from "@vuepress/plugin-google-analytics";
import {
  defaultTheme
} from "vuepress";
import {
  getDirname,
  path
} from '@vuepress/utils'

const __dirname = getDirname(
  import.meta.url)

export default {
  title: 'The Next Web Research Lab',
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
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: false,
    navbar: [{
        text: '소개',
        link: '/intro/'
      }, {
        text: '선행개발',
        link: '/next-web-research/'
      },
      {
        text: '실용주의 FE Dev',
        children: [{
            text: '0장 소개',
            link: '/fe-dev/intro'
          },
          {
            text: '1장 좋은코드',
            link: '/fe-dev/good-code'
          },
          {
            text: '2장 리팩터링',
            link: '/fe-dev/refactoring'
          },
          {
            text: '3장 프로젝트 관리',
            link: '/fe-dev/project-management'
          },
          {
            text: '4장 React / Vue / Angular',
            link: '/fe-dev/framework',
          },
          {
            text: '5장 명령형 / 객체지향 / 함수형',
            link: '/fe-dev/paradigm'
          },
          {
            text: '6장 코드 스니펫',
            link: '/fe-dev/code-snippets'
          },
          {
            text: '7장 펫 프로젝트',
            link: '/fe-dev/pet-project'
          },
          {
            text: '8장 디자인 패턴',
            link: '/fe-dev/design-patterns'
          },
        ]
      },
      {
        text: '에세이',
        link: '/essay/'
      },
    ]
  }),
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '' // yX6dHIw5DyDCd9iNbZSo2w8VjnED68OLdw6zu_Rm554
      }
    ]
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: '' // G-B42104C429
    }),
  ]
}