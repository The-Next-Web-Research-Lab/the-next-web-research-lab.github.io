export default {
  navbar: [{
      text: 'Introduction',
      link: '/en/intro.html'
    },
    {
      text: 'Front-End',
      children: [{
          text: 'Self-care',
          link: '/en/fe-dev/self-management'
        },
        {
          text: 'Computer Language',
          link: '/en/fe-dev/javascript'
        },
        // {
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
        },
        // {
        //   text: 'React / Vue / Angular',
        //   link: '/fe-dev/framework',
        // },
        {
          text: 'Programming Paradigm',
          link: '/en/fe-dev/paradigm'
        },
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
        {
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
    }, {
      text: 'Prior Development',
      link: '/en/next-web-research.html'
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
    '/en/fe-dev/javascript': [
      '/en/fe-dev/javascript.md',
      {
        text: 'JavaScript',
        children: [
          //       '/fe-dev/javascript/syntax',
          '/en/fe-dev/javascript/this',
          '/en/fe-dev/javascript/promise',
          '/en/fe-dev/javascript/async-await',
          '/en/fe-dev/javascript/coroutine',
          '/en/fe-dev/javascript/decorators',
          '/en/fe-dev/javascript/event',
          '/en/fe-dev/javascript/concurrency-and-parallelism',
          '/en/fe-dev/javascript/pure-and-first-class-function',
          '/en/fe-dev/javascript/immutable-persistent',
        ]
      },
      {
        text: 'TypeScript',
        children: [
          '/en/fe-dev/javascript/union-type',
          '/en/fe-dev/javascript/callback/',
          '/en/fe-dev/javascript/template-literals/',
        ]
      },
      {
        text: 'CSS',
        children: [
          '/en/fe-dev/javascript/float-flex-grid',
        ]
      },
      {
        text: 'npm',
        children: [
          '/en/fe-dev/javascript/mono-repo',
        ]
      },
    ],
    '/en/fe-dev/paradigm': [
      '/en/fe-dev/paradigm.md',
      {
        text: 'Imperative Programming',
        children: [
          '/en/fe-dev/paradigm/back-to-the-imperative/',
        ]
      },
      {
        text: 'Object-oriented Programming',
        children: [
          '/en/fe-dev/paradigm/object/',
          //       '/fe-dev/paradigm/produce-oop/'
        ]
      },
      {
        text: 'Functional Programming',
        children: [
          '/en/fe-dev/paradigm/functional/',
          '/en/fe-dev/paradigm/functional2/',
          //       '/fe-dev/paradigm/produce/',
          //       '/fe-dev/paradigm/produce-immutable/',
        ]
      },
    ],
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
}