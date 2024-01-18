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

const __dirname = getDirname(
  import.meta.url)

export default {
  locales: {
    '/': {
      lang: 'ko-KR',
      title: '더넥스트웹리서치랩',
      description: '담백한 프런트엔드 기술 블로그에서 지식 한 줌 담아 가세요!',
    },
    '/en/': {
      lang: 'en-US',
      title: '더넥스트웹리서치랩',
      description: 'Take a handful of knowledge from the simple FE tech blog!',
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
  head: [
    [
      'script',
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2063927113913779",
        crossorigin: "anonymous"
      }
    ],
    [
      'link',
      {
        rel: "stylesheet",
        as: "style",
        crossorigin: true,
        href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard.css"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/images/apple-icon-57x57.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/images/apple-icon-60x60.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/images/apple-icon-72x72.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/images/apple-icon-76x76.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/images/apple-icon-114x114.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/images/apple-icon-120x120.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/images/apple-icon-144x144.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/images/apple-icon-152x152.png"
      }
    ],
    [
      'link', {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/images/apple-icon-180x180.png"
      }
    ],
    [
      'link', {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/images/android-icon-192x192.png"
      }
    ],
    [
      'link', {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/favicon-32x32.png"
      }
    ],
    [
      'link', {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/images/favicon-96x96.png"
      }
    ],
    [
      'link', {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/favicon-16x16.png"
      }
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'AQgb7qIvzY8UNdV_dzzcCI1ofNUSeJeBRgf-IAajJO0'
      }
    ],
    [
      'meta',
      {
        name: 'naver-site-verification',
        content: '0adacb2ebffbc3afc4a8525d472fe9ff6029850b'
      }
    ],
    [
      'meta',
      {
        name: 'google-adsense-account',
        content: 'ca-pub-2063927113913779'
      }
    ]
  ],
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
      '/en/': {
        navbar: [{
            text: 'Introduction',
            link: '/en/intro.html'
          }, {
            text: 'Prior Development',
            link: '/en/next-web-research.html'
          },
          {
            text: 'Pragmatic Frontend',
            children: [{
                text: 'Self-care',
                link: '/en/fe-dev/self-management'
              },
              // , {
              //   text: '프로그래밍 언어',
              //   link: '/fe-dev/javascript'
              // }, {
              //   text: '좋은코드',
              //   link: '/fe-dev/good-code'
              // },
              {
                text: 'Refactoring',
                link: '/en/fe-dev/refactoring'
              },
              {
                text: 'Project Management',
                link: '/en/fe-dev/project-management'
              }
              // {
              //   text: 'React / Vue / Angular',
              //   link: '/fe-dev/framework',
              // },
              // {
              //   text: '명령형 / 객체지향 / 함수형',
              //   link: '/fe-dev/paradigm'
              // },
              // {
              //   text: '코드 스니펫',
              //   link: '/fe-dev/code-snippets'
              // },
              // {
              //   text: '펫 프로젝트',
              //   link: '/fe-dev/pet-project'
              // },
              // {
              //   text: '디자인 패턴',
              //   link: '/fe-dev/design-patterns'
              // },
              ,{
                text: 'Performance Optimization',
                link: '/en/fe-dev/optimization'
              },
              {
                text: 'Book Reviews',
                link: '/en/fe-dev/books'
              },
              {
                text: "Interviewer's Guide",
                link: '/en/fe-dev/interview-guide'
              },
            ]
          },
          {
            text: 'Summary of experience',
            link: '/en/essay.html'
          },
        ],
        sidebar: {
          '/en/fe-dev/self-management': [
            '/en/fe-dev/self-management.md',
            '/en/fe-dev/self-management/project-history',
            '/en/fe-dev/self-management/stress-management'
          ],
          '/en/fe-dev/interview-guide': [
            '/en/fe-dev/interview-guide.md',
            '/en/fe-dev/interview-guide/questions-list',
            '/en/fe-dev/interview-guide/interview-process',
            '/en/fe-dev/interview-guide/success-criteria',
          ],
          '/en/next-web-research': [
            '/en/next-web-research.md',
            '/en/next-web-research/scheduling-api.md',
            '/en/next-web-research/vibrate.md',
            '/en/next-web-research/battery.md',
            '/en/next-web-research/share.md',
            '/en/next-web-research/file-system-access-api.md',
            '/en/next-web-research/network-speed.md'
          ],
          '/en/essay': [
            '/en/essay.md',
            {
              text: 'Testimonials',
              children: [
                '/en/essay/commit-message/',
                '/en/essay/swagger-dto-automation/',
                '/en/essay/software-versioning/',
                '/en/essay/web-usability-review/',
                '/en/essay/2019-new-service-building/',
                '/en/essay/cors-and-http-cookie/',
                '/en/essay/front_end_ui/',
                '/en/essay/developer_communication_skills/',
              ]
            },
            {
              text: 'Theory',
              children: [
                '/en/essay/authentication-and-authorization/',
                '/en/essay/abstract/',
            //     '/essay/compiler-theory/',
                '/en/essay/non-functional-requirements/',
            //     '/essay/design-guide/',
                '/en/essay/web-accessibility/',
              ]
            },
            {
              text: 'Color Space Series',
              children: [
                '/en/essay/color-space-munsell-color-theory/',
                '/en/essay/color-space-hsl-and-hsv/',
                '/en/essay/color-space-lch-and-lab/',
              ]
            },
            {
              text: 'Writing code',
              children: [
                '/en/essay/client-hints/',
                '/en/essay/hexagon-profile/',
                '/en/essay/how-to-catch-error/',
                '/en/essay/branch-n-case/',
                '/en/essay/callback/',
                '/en/essay/clone-function/',
                '/en/essay/safe-chain/',
                '/en/essay/observation-mechanism/',
              ]
            }
          ],
          '/en/fe-dev/books': [
            '/en/fe-dev/books.md',
          //   {
          //     text: '프로그래밍 페러다임',
          //     children: [
          //       '/fe-dev/books/9',
          //       '/fe-dev/books/10',
          //       '/fe-dev/books/19',
          //       '/fe-dev/books/20',
          //     ]
          //   },
            {
              text: 'Clean Series',
              children: [
          //       '/fe-dev/books/1',
                '/en/fe-dev/books/2',
                '/en/fe-dev/books/18',
              ]
            },
          //   {
          //     text: '자바스크립트',
          //     children: [
          //       '/fe-dev/books/6',
          //       '/fe-dev/books/16',
          //       '/fe-dev/books/21',
          //     ]
          //   },
            {
              text: 'Managing',
              children: [
          //       '/fe-dev/books/11',
                '/en/fe-dev/books/12',
              ]
            },
            {
              text: 'Methodology',
              children: [
          //       '/fe-dev/books/3',
                '/en/fe-dev/books/4',
          //       '/fe-dev/books/5',
          //       '/fe-dev/books/14',
                '/en/fe-dev/books/17',
              ]
            },
            {
              text: 'Computer Science',
              children: [
                '/en/fe-dev/books/22',
          //       '/fe-dev/books/7',
          //       '/fe-dev/books/8',
                '/en/fe-dev/books/13',
          //       '/fe-dev/books/15',
              ]
            }
          ],
          '/en/fe-dev/optimization': [
            '/en/fe-dev/optimization.md',
            '/en/fe-dev/optimization/rail',
            '/en/fe-dev/optimization/web-vitals',
            '/en/fe-dev/optimization/monitoring',
            '/en/fe-dev/optimization/chrome-network-tab',
            '/en/fe-dev/optimization/browser_cache'
          ],
          // '/fe-dev/javascript': [
          //   '/fe-dev/javascript.md',
          //   {
          //     text: '자바스크립트',
          //     children: [
          //       '/fe-dev/javascript/syntax',
          //       '/fe-dev/javascript/this',
          //       '/fe-dev/javascript/promise',
          //       '/fe-dev/javascript/async-await',
          //       '/fe-dev/javascript/coroutine',
          //       '/fe-dev/javascript/decorators',
          //       '/fe-dev/javascript/event',
          //       '/fe-dev/javascript/concurrency-and-parallelism',
          //       '/fe-dev/javascript/pure-and-first-class-function',
          //       '/fe-dev/javascript/immutable-persistent',
          //     ]
          //   },
          //   {
          //     text: '타입스크립트',
          //     children: [
          //       '/fe-dev/javascript/union-type',
          //       '/fe-dev/javascript/callback/',
          //       '/fe-dev/javascript/template-literals/',
          //     ]
          //   },
          //   {
          //     text: 'CSS',
          //     children: [
          //       '/fe-dev/javascript/float-flex-grid',
          //     ]
          //   },
          //   {
          //     text: 'npm',
          //     children: [
          //       '/fe-dev/javascript/mono-repo',
          //     ]
          //   },
          // ],
          // '/fe-dev/paradigm': [
          //   '/fe-dev/paradigm.md',
          //   {
          //     text: '명령형',
          //     children: [
          //       '/fe-dev/paradigm/back-to-the-imperative/',
          //     ]
          //   },
          //   {
          //     text: '객체지향',
          //     children: [
          //       '/fe-dev/paradigm/object/',
          //       '/fe-dev/paradigm/produce-oop/'
          //     ]
          //   },
          //   {
          //     text: '함수형',
          //     children: [
          //       '/fe-dev/paradigm/functional/',
          //       '/fe-dev/paradigm/functional2/',
          //       '/fe-dev/paradigm/produce/',
          //       '/fe-dev/paradigm/produce-immutable/',
          //     ]
          //   },
          // ],
          // '/fe-dev/framework': [
          //   '/fe-dev/framework.md',
          //   {
          //     text: 'Vue Composition API',
          //     children: [
          //       '/fe-dev/framework/composition-api-rfc/',
          //       '/fe-dev/framework/composition-api-rfc-summary/',
          //       '/fe-dev/framework/composition-api-rfc-release-notes/',
          //       '/fe-dev/framework/composition-api-rfc-migration/',
          //       '/fe-dev/framework/vuex-in-composition-api/',
          //     ]
          //   },
          //   {
          //     text: 'Vue',
          //     children: [
          //       '/fe-dev/framework/vue-eslint/',
          //       '/fe-dev/framework/nuxt-2-11-typescript/',
          //       '/fe-dev/framework/nuxt-ts/',
          //       '/fe-dev/framework/nuxt-migration/',
          //     ]
          //   },
          //   {
          //     text: 'Angular',
          //     children: [
          //       '/fe-dev/framework/rxjs-codereview/',
          //       '/fe-dev/framework/angular/'
          //     ]
          //   },
          //   {
          //     text: 'React',
          //     children: [
          //       '/fe-dev/framework/react-convention-for-codereview/',
          //     ]
          //   },
          // ],
          '/en/fe-dev/project-management': [
            '/en/fe-dev/project-management.md',
            '/en/fe-dev/project-management/estimation/',
            '/en/fe-dev/project-management/release/',
          //   '/fe-dev/project-management/facilitation-for-meeting/',
            '/en/fe-dev/project-management/preventive-maintenance/',
          //   '/fe-dev/project-management/git-scm-experience/',
            '/en/fe-dev/project-management/software-lifecycle/',
          ],
          '/en/fe-dev/refactoring': [
            '/en/fe-dev/refactoring.md',
          //   '/fe-dev/refactoring/structure-refactoring/',
          //   '/fe-dev/refactoring/legacy-code-to-easy-code/',
          //   '/fe-dev/refactoring/legacy-code-to-easy-code-2/',
            '/en/fe-dev/refactoring/refactoring-meaning-and-result/',
            '/en/fe-dev/refactoring/tdd-bdd/',
            '/en/fe-dev/refactoring/test-types/',
          //   '/fe-dev/refactoring/test-guide/',
          ],
          // '/fe-dev/good-code': [
          //   '/fe-dev/good-code.md',
          //   {
          //     text: '실무 사례',
          //     children: [
          //       '/fe-dev/good-code/2023/',
          //       '/fe-dev/good-code/easy-code/',
          //       '/fe-dev/good-code/code-position/',
          //       '/fe-dev/good-code/reusable-code/',
          //       '/fe-dev/good-code/declarative-function/',
          //       '/fe-dev/good-code/date-helper-development/',
          //       '/fe-dev/good-code/dependency-inversion/',
          //     ]
          //   },
          //   {
          //     text: 'SOLID 원칙 시리즈',
          //     children: [

          //       '/fe-dev/good-code/solid-srp/',
          //       '/fe-dev/good-code/solid-ocp/',
          //       '/fe-dev/good-code/solid-lsp/',
          //       '/fe-dev/good-code/solid-isp/',
          //       '/fe-dev/good-code/solid-dip/',
          //     ]
          //   },
          // ],
          // '/fe-dev/design-patterns': [
          //   '/fe-dev/design-patterns.md',
          //   {
          //     text: '패턴 비교',
          //     children: [
          //       '/fe-dev/design-patterns/mv_flux/',
          //       '/fe-dev/design-patterns/react_hook_vue_composition_recoil/',
          //       '/fe-dev/design-patterns/proxy_reverse_proxy_load_balancer/',
          //     ]
          //   },
          //   {
          //     text: 'Model-View 패턴',
          //     children: [
          //       '/fe-dev/design-patterns/mvc-word-1979-12-10/',
          //       '/fe-dev/design-patterns/mvc-xerox-parc/',
          //       '/fe-dev/design-patterns/mvp-the-taligent-programming-model/',
          //       '/fe-dev/design-patterns/introduction-to-mvvm-for-wpf/',
          //       '/fe-dev/design-patterns/flux/',
          //       '/fe-dev/design-patterns/vuex/',
          //       '/fe-dev/design-patterns/mvc/',
          //       '/fe-dev/design-patterns/mvvm/',
          //     ]
          //   },
          //   {
          //     text: 'GoF Design Patterns',
          //     children: [
          //       '/fe-dev/design-patterns/gof/summary/',
          //       '/fe-dev/design-patterns/gof/creational/',
          //       '/fe-dev/design-patterns/gof/structural/',
          //       '/fe-dev/design-patterns/gof/behavioral/',
          //     ]
          //   },
          // ],
          // '/fe-dev/code-snippets': [
          //   '/fe-dev/code-snippets.md',
          //   {
          //     text: 'Javascript',
          //     children: [
          //       '/fe-dev/code-snippets/Javascript/Array/',
          //       '/fe-dev/code-snippets/Javascript/Date/',
          //       '/fe-dev/code-snippets/Javascript/Iterable/',
          //       '/fe-dev/code-snippets/Javascript/Object/',
          //       '/fe-dev/code-snippets/Javascript/String/',
          //       '/fe-dev/code-snippets/Javascript/RegExp/',
          //     ]
          //   },
          //   {
          //     text: 'CSS3',
          //     children: [
          //       '/fe-dev/code-snippets/CSS3/Flex/',
          //       '/fe-dev/code-snippets/CSS3/MaskImage/',
          //     ]
          //   },
          //   {
          //     text: 'HTML5',
          //     children: [
          //       '/fe-dev/code-snippets/HTML5/HTML5/',
          //       '/fe-dev/code-snippets/HTML5/FetchApi/',
          //       '/fe-dev/code-snippets/HTML5/FileReader/',
          //       '/fe-dev/code-snippets/HTML5/SVG/',
          //     ]
          //   },
          //   {
          //     text: 'Data Structure',
          //     children: [
          //       '/fe-dev/code-snippets/Data-Structure/Set/',
          //       '/fe-dev/code-snippets/Data-Structure/Stack/',
          //       '/fe-dev/code-snippets/Data-Structure/Queue/',
          //       '/fe-dev/code-snippets/Data-Structure/LinkedList/',
          //     ]
          //   },
          //   {
          //     text: 'UIComponent',
          //     children: [
          //       '/fe-dev/code-snippets/UIComponent/Boilerplate/',
          //       '/fe-dev/code-snippets/UIComponent/Pagination/',
          //       '/fe-dev/code-snippets/UIComponent/Calendar/',
          //       '/fe-dev/code-snippets/UIComponent/TimePicker/',
          //       '/fe-dev/code-snippets/UIComponent/InfiniteScrolling/',
          //       '/fe-dev/code-snippets/UIComponent/Slider/',
          //     ]
          //   },
          //   {
          //     text: 'Helper',
          //     children: [
          //       '/fe-dev/code-snippets/Helper/Helper/',
          //       '/fe-dev/code-snippets/Helper/contextmenu/',
          //       '/fe-dev/code-snippets/Helper/clone/',
          //       '/fe-dev/code-snippets/Helper/produce/',
          //       '/fe-dev/code-snippets/Helper/safe-chain/',
          //       '/fe-dev/code-snippets/Helper/shuffle/',
          //       '/fe-dev/code-snippets/Helper/router/',
          //       '/fe-dev/code-snippets/Helper/observer/',
          //       '/fe-dev/code-snippets/Helper/component/',
          //       '/fe-dev/code-snippets/Helper/directive/',
          //       '/fe-dev/code-snippets/Helper/template-binding/',
          //     ]
          //   },
          //   {
          //     text: 'OpenSources',
          //     children: [
          //       '/fe-dev/code-snippets/OpenSources/eslint/',
          //       '/fe-dev/code-snippets/OpenSources/chart-adaptor/',
          //       '/fe-dev/code-snippets/OpenSources/editor/',
          //       '/fe-dev/code-snippets/OpenSources/express-server/',
          //       '/fe-dev/code-snippets/OpenSources/pdfjs-sample/',
          //     ]
          //   },
          //   {
          //     text: 'Functional',
          //     children: ['/fe-dev/code-snippets/Functional/Functional/'],

          //   },
          //   {
          //     text: 'TodoList',
          //     children: ['/fe-dev/code-snippets/TodoList/']
          //   },
          //   {
          //     text: 'Reactive',
          //     children: ['/fe-dev/code-snippets/Reactive/Reactive/']
          //   },
          // ],
          // '/fe-dev/pet-project': [
          //   '/fe-dev/pet-project.md',
          //   {
          //     text: 'Vue',
          //     children: [
          //       '/fe-dev/pet-project/vue2-part/',
          //       '/fe-dev/pet-project/vue2-component/',
          //       '/fe-dev/pet-project/vuex/'
          //     ]
          //   },
          //   {
          //     text: 'Helper',
          //     children: ['/fe-dev/pet-project/momentjs/',
          //       '/fe-dev/pet-project/immerjs/',
          //       '/fe-dev/pet-project/axios/',
          //     ]
          //   },
          //   {
          //     text: 'Component',
          //     children: [
          //       '/fe-dev/pet-project/component/2020-08-component/',
          //       '/fe-dev/pet-project/component/vuex-feature/',
          //       '/fe-dev/pet-project/component/recoil-feature/',
          //       '/fe-dev/pet-project/component/fragment-dom/',
          //       '/fe-dev/pet-project/component/simple-dom/',
          //       '/fe-dev/pet-project/component/simple-component/'
          //     ]
          //   },
          //   {
          //     text: 'MVC',
          //     children: [
          //       '/fe-dev/pet-project/mvc/2021-07-mvc/',
          //       '/fe-dev/pet-project/mvc/2020-08-mvc/', '/fe-dev/pet-project/mvc/2021-07-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-function/'
          //     ],
          //   },
          // ]
        }
      },
      '/': {
        blog: {
          medias: {
            '인스타그램': [
              'https://www.instagram.com/thenext_webresearchlab/',
              path.resolve(__dirname, 'public/icons/instagram.svg')
            ],
            "네이버 블로그": [
              'https://blog.naver.com/nextwebresearchlab',
              path.resolve(__dirname, 'public/icons/naver.svg')
            ],
            '티스토리 블로그': [
              'https://the-next-web-research-lab.tistory.com/',
              path.resolve(__dirname, 'public/icons/tistory.svg')
            ],
          }
        },
        navbar: [{
            text: '소개',
            link: '/intro.html'
          }, {
            text: '선행개발',
            link: '/next-web-research.html'
          },
          {
            text: '실용주의 프런트엔드',
            children: [{
                text: '자기 관리',
                link: '/fe-dev/self-management'
              }, {
                text: '프로그래밍 언어',
                link: '/fe-dev/javascript'
              }, {
                text: '좋은코드',
                link: '/fe-dev/good-code'
              },
              {
                text: '리팩터링',
                link: '/fe-dev/refactoring'
              },
              {
                text: '프로젝트 관리',
                link: '/fe-dev/project-management'
              },
              {
                text: 'React / Vue / Angular',
                link: '/fe-dev/framework',
              },
              {
                text: '명령형 / 객체지향 / 함수형',
                link: '/fe-dev/paradigm'
              },
              {
                text: '코드 스니펫',
                link: '/fe-dev/code-snippets'
              },
              {
                text: '펫 프로젝트',
                link: '/fe-dev/pet-project'
              },
              {
                text: '디자인 패턴',
                link: '/fe-dev/design-patterns'
              },
              {
                text: '성능 최적화',
                link: '/fe-dev/optimization'
              },
              {
                text: '도서 리뷰',
                link: '/fe-dev/books'
              },
              {
                text: '면접관 가이드',
                link: '/fe-dev/interview-guide'
              },
            ]
          },
          {
            text: '경험정리',
            link: '/essay.html'
          },
          {
            text: '패밀리 사이트',
            children: [{
                text: '인스타그램',
                link: 'https://www.instagram.com/thenext_webresearchlab/'
              }, {
                text: '네이버 블로그',
                link: 'https://blog.naver.com/nextwebresearchlab'
              },
              {
                text: '티스토리 블로그',
                link: 'https://the-next-web-research-lab.tistory.com/'
              },
            ]
          }
        ],
        sidebar: {
          '/fe-dev/self-management': [
            '/fe-dev/self-management.md',
            '/fe-dev/self-management/project-history',
            '/fe-dev/self-management/stress-management'
          ],
          '/fe-dev/interview-guide': [
            '/fe-dev/interview-guide.md',
            '/fe-dev/interview-guide/questions-list',
            '/fe-dev/interview-guide/interview-process',
            '/fe-dev/interview-guide/success-criteria',
          ],
          '/next-web-research': [
            '/next-web-research.md',
            '/next-web-research/scheduling-api.md',
            '/next-web-research/vibrate.md',
            '/next-web-research/battery.md',
            '/next-web-research/share.md',
            '/next-web-research/file-system-access-api.md',
            '/next-web-research/network-speed.md'
          ],
          '/essay': [
            '/essay.md',
            {
              text: '경험기',
              children: [
                '/essay/commit-message/',
                '/essay/swagger-dto-automation/',
                '/essay/software-versioning/',
                '/essay/web-usability-review/',
                '/essay/2019-new-service-building/',
                '/essay/cors-and-http-cookie/',
                '/essay/front_end_ui/',
                '/essay/developer_communication_skills/',
              ]
            },
            {
              text: '이론',
              children: [
                '/essay/authentication-and-authorization/',
                '/essay/abstract/',
                '/essay/compiler-theory/',
                '/essay/non-functional-requirements/',
                '/essay/design-guide/',
                '/essay/web-accessibility/',
              ]
            },
            {
              text: 'Color Space 시리즈',
              children: [
                '/essay/color-space-munsell-color-theory/',
                '/essay/color-space-hsl-and-hsv/',
                '/essay/color-space-lch-and-lab/',
              ]
            },
            {
              text: '코드 작성',
              children: [
                '/essay/client-hints/',
                '/essay/hexagon-profile/',
                '/essay/how-to-catch-error/',
                '/essay/branch-n-case/',
                '/essay/callback/',
                '/essay/clone-function/',
                '/essay/safe-chain/',
                '/essay/observation-mechanism/',
              ]
            }
          ],
          '/fe-dev/books': [
            '/fe-dev/books.md',
            {
              text: '프로그래밍 페러다임',
              children: [
                '/fe-dev/books/9',
                '/fe-dev/books/10',
                '/fe-dev/books/19',
                '/fe-dev/books/20',
              ]
            },
            {
              text: '클린 시리즈',
              children: [
                '/fe-dev/books/1',
                '/fe-dev/books/2',
                '/fe-dev/books/18',
              ]
            },
            {
              text: '자바스크립트',
              children: [
                '/fe-dev/books/6',
                '/fe-dev/books/16',
                '/fe-dev/books/21',
              ]
            },
            {
              text: '매니징',
              children: [
                '/fe-dev/books/11',
                '/fe-dev/books/12',
              ]
            },
            {
              text: '방법론',
              children: [
                '/fe-dev/books/3',
                '/fe-dev/books/4',
                '/fe-dev/books/5',
                '/fe-dev/books/14',
                '/fe-dev/books/17',
              ]
            },
            {
              text: '컴퓨터 과학',
              children: [
                '/fe-dev/books/22',
                '/fe-dev/books/7',
                '/fe-dev/books/8',
                '/fe-dev/books/13',
                '/fe-dev/books/15',
              ]
            }
          ],
          '/fe-dev/optimization': [
            '/fe-dev/optimization.md',
            '/fe-dev/optimization/rail',
            '/fe-dev/optimization/web-vitals',
            '/fe-dev/optimization/monitoring',
            '/fe-dev/optimization/chrome-network-tab',
            '/fe-dev/optimization/browser_cache'
          ],
          '/fe-dev/javascript': [
            '/fe-dev/javascript.md',
            {
              text: '자바스크립트',
              children: [
                '/fe-dev/javascript/syntax',
                '/fe-dev/javascript/this',
                '/fe-dev/javascript/promise',
                '/fe-dev/javascript/async-await',
                '/fe-dev/javascript/coroutine',
                '/fe-dev/javascript/decorators',
                '/fe-dev/javascript/event',
                '/fe-dev/javascript/concurrency-and-parallelism',
                '/fe-dev/javascript/pure-and-first-class-function',
                '/fe-dev/javascript/immutable-persistent',
              ]
            },
            {
              text: '타입스크립트',
              children: [
                '/fe-dev/javascript/union-type',
                '/fe-dev/javascript/callback/',
                '/fe-dev/javascript/template-literals/',
              ]
            },
            {
              text: 'CSS',
              children: [
                '/fe-dev/javascript/float-flex-grid',
              ]
            },
            {
              text: 'npm',
              children: [
                '/fe-dev/javascript/mono-repo',
              ]
            },
          ],
          '/fe-dev/paradigm': [
            '/fe-dev/paradigm.md',
            {
              text: '명령형',
              children: [
                '/fe-dev/paradigm/back-to-the-imperative/',
              ]
            },
            {
              text: '객체지향',
              children: [
                '/fe-dev/paradigm/object/',
                '/fe-dev/paradigm/produce-oop/'
              ]
            },
            {
              text: '함수형',
              children: [
                '/fe-dev/paradigm/functional/',
                '/fe-dev/paradigm/functional2/',
                '/fe-dev/paradigm/produce/',
                '/fe-dev/paradigm/produce-immutable/',
              ]
            },
          ],
          '/fe-dev/framework': [
            '/fe-dev/framework.md',
            {
              text: 'Vue Composition API',
              children: [
                '/fe-dev/framework/composition-api-rfc/',
                '/fe-dev/framework/composition-api-rfc-summary/',
                '/fe-dev/framework/composition-api-rfc-release-notes/',
                '/fe-dev/framework/composition-api-rfc-migration/',
                '/fe-dev/framework/vuex-in-composition-api/',
              ]
            },
            {
              text: 'Vue',
              children: [
                '/fe-dev/framework/vue-eslint/',
                '/fe-dev/framework/nuxt-2-11-typescript/',
                '/fe-dev/framework/nuxt-ts/',
                '/fe-dev/framework/nuxt-migration/',
              ]
            },
            {
              text: 'Angular',
              children: [
                '/fe-dev/framework/rxjs-codereview/',
                '/fe-dev/framework/angular/'
              ]
            },
            {
              text: 'React',
              children: [
                '/fe-dev/framework/react-convention-for-codereview/',
              ]
            },
          ],
          '/fe-dev/project-management': [
            '/fe-dev/project-management.md',
            '/fe-dev/project-management/estimation/',
            '/fe-dev/project-management/release/',
            '/fe-dev/project-management/facilitation-for-meeting/',
            '/fe-dev/project-management/preventive-maintenance/',
            '/fe-dev/project-management/git-scm-experience/',
            '/fe-dev/project-management/software-lifecycle/',
          ],
          '/fe-dev/refactoring': [
            '/fe-dev/refactoring.md',
            '/fe-dev/refactoring/structure-refactoring/',
            '/fe-dev/refactoring/legacy-code-to-easy-code/',
            '/fe-dev/refactoring/legacy-code-to-easy-code-2/',
            '/fe-dev/refactoring/refactoring-meaning-and-result/',
            '/fe-dev/refactoring/tdd-bdd/',
            '/fe-dev/refactoring/test-types/',
            '/fe-dev/refactoring/test-guide/',
          ],
          '/fe-dev/good-code': [
            '/fe-dev/good-code.md',
            {
              text: '실무 사례',
              children: [
                '/fe-dev/good-code/2023/',
                '/fe-dev/good-code/easy-code/',
                '/fe-dev/good-code/code-position/',
                '/fe-dev/good-code/reusable-code/',
                '/fe-dev/good-code/declarative-function/',
                '/fe-dev/good-code/date-helper-development/',
                '/fe-dev/good-code/dependency-inversion/',
              ]
            },
            {
              text: 'SOLID 원칙 시리즈',
              children: [

                '/fe-dev/good-code/solid-srp/',
                '/fe-dev/good-code/solid-ocp/',
                '/fe-dev/good-code/solid-lsp/',
                '/fe-dev/good-code/solid-isp/',
                '/fe-dev/good-code/solid-dip/',
              ]
            },
          ],
          '/fe-dev/design-patterns': [
            '/fe-dev/design-patterns.md',
            {
              text: '패턴 비교',
              children: [
                '/fe-dev/design-patterns/mv_flux/',
                '/fe-dev/design-patterns/react_hook_vue_composition_recoil/',
                '/fe-dev/design-patterns/proxy_reverse_proxy_load_balancer/',
              ]
            },
            {
              text: 'Model-View 패턴',
              children: [
                '/fe-dev/design-patterns/mvc-word-1979-12-10/',
                '/fe-dev/design-patterns/mvc-xerox-parc/',
                '/fe-dev/design-patterns/mvp-the-taligent-programming-model/',
                '/fe-dev/design-patterns/introduction-to-mvvm-for-wpf/',
                '/fe-dev/design-patterns/flux/',
                '/fe-dev/design-patterns/vuex/',
                '/fe-dev/design-patterns/mvc/',
                '/fe-dev/design-patterns/mvvm/',
              ]
            },
            {
              text: 'GoF Design Patterns',
              children: [
                '/fe-dev/design-patterns/gof/summary/',
                '/fe-dev/design-patterns/gof/creational/',
                '/fe-dev/design-patterns/gof/structural/',
                '/fe-dev/design-patterns/gof/behavioral/',
              ]
            },
          ],
          '/fe-dev/code-snippets': [
            '/fe-dev/code-snippets.md',
            {
              text: 'Javascript',
              children: [
                '/fe-dev/code-snippets/Javascript/Array/',
                '/fe-dev/code-snippets/Javascript/Date/',
                '/fe-dev/code-snippets/Javascript/Iterable/',
                '/fe-dev/code-snippets/Javascript/Object/',
                '/fe-dev/code-snippets/Javascript/String/',
                '/fe-dev/code-snippets/Javascript/RegExp/',
              ]
            },
            {
              text: 'CSS3',
              children: [
                '/fe-dev/code-snippets/CSS3/Flex/',
                '/fe-dev/code-snippets/CSS3/MaskImage/',
              ]
            },
            {
              text: 'HTML5',
              children: [
                '/fe-dev/code-snippets/HTML5/HTML5/',
                '/fe-dev/code-snippets/HTML5/FetchApi/',
                '/fe-dev/code-snippets/HTML5/FileReader/',
                '/fe-dev/code-snippets/HTML5/SVG/',
              ]
            },
            {
              text: 'Data Structure',
              children: [
                '/fe-dev/code-snippets/Data-Structure/Set/',
                '/fe-dev/code-snippets/Data-Structure/Stack/',
                '/fe-dev/code-snippets/Data-Structure/Queue/',
                '/fe-dev/code-snippets/Data-Structure/LinkedList/',
              ]
            },
            {
              text: 'UIComponent',
              children: [
                '/fe-dev/code-snippets/UIComponent/Boilerplate/',
                '/fe-dev/code-snippets/UIComponent/Pagination/',
                '/fe-dev/code-snippets/UIComponent/Calendar/',
                '/fe-dev/code-snippets/UIComponent/TimePicker/',
                '/fe-dev/code-snippets/UIComponent/InfiniteScrolling/',
                '/fe-dev/code-snippets/UIComponent/Slider/',
              ]
            },
            {
              text: 'Helper',
              children: [
                '/fe-dev/code-snippets/Helper/Helper/',
                '/fe-dev/code-snippets/Helper/contextmenu/',
                '/fe-dev/code-snippets/Helper/clone/',
                '/fe-dev/code-snippets/Helper/produce/',
                '/fe-dev/code-snippets/Helper/safe-chain/',
                '/fe-dev/code-snippets/Helper/shuffle/',
                '/fe-dev/code-snippets/Helper/router/',
                '/fe-dev/code-snippets/Helper/observer/',
                '/fe-dev/code-snippets/Helper/component/',
                '/fe-dev/code-snippets/Helper/directive/',
                '/fe-dev/code-snippets/Helper/template-binding/',
              ]
            },
            {
              text: 'OpenSources',
              children: [
                '/fe-dev/code-snippets/OpenSources/eslint/',
                '/fe-dev/code-snippets/OpenSources/chart-adaptor/',
                '/fe-dev/code-snippets/OpenSources/editor/',
                '/fe-dev/code-snippets/OpenSources/express-server/',
                '/fe-dev/code-snippets/OpenSources/pdfjs-sample/',
              ]
            },
            {
              text: 'Functional',
              children: ['/fe-dev/code-snippets/Functional/Functional/'],

            },
            {
              text: 'TodoList',
              children: ['/fe-dev/code-snippets/TodoList/']
            },
            {
              text: 'Reactive',
              children: ['/fe-dev/code-snippets/Reactive/Reactive/']
            },
          ],
          '/fe-dev/pet-project': [
            '/fe-dev/pet-project.md',
            {
              text: 'Vue',
              children: [
                '/fe-dev/pet-project/vue2-part/',
                '/fe-dev/pet-project/vue2-component/',
                '/fe-dev/pet-project/vuex/'
              ]
            },
            {
              text: 'Helper',
              children: ['/fe-dev/pet-project/momentjs/',
                '/fe-dev/pet-project/immerjs/',
                '/fe-dev/pet-project/axios/',
              ]
            },
            {
              text: 'Component',
              children: [
                '/fe-dev/pet-project/component/2020-08-component/',
                '/fe-dev/pet-project/component/vuex-feature/',
                '/fe-dev/pet-project/component/recoil-feature/',
                '/fe-dev/pet-project/component/fragment-dom/',
                '/fe-dev/pet-project/component/simple-dom/',
                '/fe-dev/pet-project/component/simple-component/'
              ]
            },
            {
              text: 'MVC',
              children: [
                '/fe-dev/pet-project/mvc/2021-07-mvc/',
                '/fe-dev/pet-project/mvc/2020-08-mvc/', '/fe-dev/pet-project/mvc/2021-07-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-function/'
              ],
            },
          ]
        }
      },
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