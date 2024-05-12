export default {
  nav: [{
      text: 'Introduction',
      link: '/en/intro.html'
    },
    {
      text: 'Front-End',
      items: [{
          text: 'Self-care',
          link: '/en/fe-dev/self-management/',
          activeMatch: '/en/fe-dev/self-management/'
        },
        {
          text: 'Computer Language',
          link: '/en/fe-dev/javascript/',
          activeMatch: '/en/fe-dev/javascript/'
        },
        // {
        //   text: '좋은코드',
        //   link: '/fe-dev/good-code'
        // },
        {
          text: 'Refactoring',
          link: '/en/fe-dev/refactoring/',
          activeMatch: '/en/fe-dev/refactoring/'
        },
        {
          text: 'Project Management',
          link: '/en/fe-dev/project-management/',
          activeMatch: '/en/fe-dev/project-management/'
        },
        // {
        //   text: 'React / Vue / Angular',
        //   link: '/fe-dev/framework',
        // },
        {
          text: 'Programming Paradigm',
          link: '/en/fe-dev/paradigm/',
          activeMatch: '/en/fe-dev/paradigm/'
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
          link: '/en/fe-dev/optimization/',
          activeMatch: '/en/fe-dev/optimization/'
        },
        {
          text: 'Book Reviews',
          link: '/en/fe-dev/books/',
          activeMatch: '/en/fe-dev/books/'
        },
        {
          text: "Interviewer's Guide",
          link: '/en/fe-dev/interview-guide/',
          activeMatch: '/en/fe-dev/interview-guide/'
        },
      ]
    },
    {
      text: 'Summary of experience',
      link: '/en/essay/',
      activeMatch: '/en/essay/'
    }, {
      text: 'Prior Development',
      link: '/en/next-web-research/',
      activeMatch: '/en/next-web-research/'
    }
  ],
  sidebar: {
    '/en/fe-dev/self-management': [
      {text: 'Index', link: '/en/fe-dev/self-management/'},
      {text: 'Index', link: '/en/fe-dev/self-management/project-history'},
      {text: 'Index', link: '/en/fe-dev/self-management/stress-management'},
    ],
    '/en/fe-dev/interview-guide': [
      {text: 'Index', link: '/en/fe-dev/interview-guide/'},
      {text: 'Index', link: '/en/fe-dev/interview-guide/questions-list'},
      {text: 'Index', link: '/en/fe-dev/interview-guide/interview-process'},
      {text: 'Index', link: '/en/fe-dev/interview-guide/success-criteria'},
    ],
    '/en/next-web-research': [
      {text: 'Index', link: '/en/next-web-research/'},
      {text: 'Index', link: '/en/next-web-research/scheduling-api.md'},
      {text: 'Index', link: '/en/next-web-research/vibrate.md'},
      {text: 'Index', link: '/en/next-web-research/battery.md'},
      {text: 'Index', link: '/en/next-web-research/share.md'},
      {text: 'Index', link: '/en/next-web-research/file-system-access-api.md'},
      {text: 'Index', link: '/en/next-web-research/network-speed.md'},
    ],
    '/en/essay': [
      {text: 'Index', link: '/en/essay/'},
      {
        text: 'Testimonials',
        items: [
          {text: 'Index', link: '/en/essay/commit-message'},
          {text: 'Index', link: '/en/essay/swagger-dto-automation'},
          {text: 'Index', link: '/en/essay/software-versioning'},
          {text: 'Index', link: '/en/essay/web-usability-review'},
          {text: 'Index', link: '/en/essay/2019-new-service-building'},
          {text: 'Index', link: '/en/essay/cors-and-http-cookie'},
          {text: 'Index', link: '/en/essay/front_end_ui'},
          {text: 'Index', link: '/en/essay/developer_communication_skills'},
        ]
      },
      {
        text: 'Theory',
        items: [
          {text: 'Index', link: '/en/essay/authentication-and-authorization'},
          {text: 'Index', link: '/en/essay/abstract'},
          //     '/essay/compiler-theory/',
          {text: 'Index', link: '/en/essay/non-functional-requirements'},
          //     '/essay/design-guide/',
          {text: 'Index', link: '/en/essay/web-accessibility'},
        ]
      },
      {
        text: 'Color Space Series',
        items: [
          {text: 'Index', link: '/en/essay/color-space-munsell-color-theory'},
          {text: 'Index', link: '/en/essay/color-space-hsl-and-hsv'},
          {text: 'Index', link: '/en/essay/color-space-lch-and-lab'},
        ]
      },
      {
        text: 'Writing code',
        items: [
          {text: 'Index', link: '/en/essay/client-hints'},
          {text: 'Index', link: '/en/essay/hexagon-profile'},
          {text: 'Index', link: '/en/essay/how-to-catch-error'},
          {text: 'Index', link: '/en/essay/branch-n-case'},
          {text: 'Index', link: '/en/essay/callback'},
          {text: 'Index', link: '/en/essay/clone-function'},
          {text: 'Index', link: '/en/essay/safe-chain'},
          {text: 'Index', link: '/en/essay/observation-mechanism'},
        ]
      }
    ],
    '/en/fe-dev/books': [
      {text: 'Index', link: '/en/fe-dev/books/'},
      //   {
      //     text: '프로그래밍 페러다임',
      //     items: [
      //       '/fe-dev/books/9',
      //       '/fe-dev/books/10',
      //       '/fe-dev/books/19',
      //       '/fe-dev/books/20',
      //     ]
      //   },
      {
        text: 'Clean Series',
        items: [
          //       '/fe-dev/books/1',
          {text: 'Index', link: '/en/fe-dev/books/2'},
          {text: 'Index', link: '/en/fe-dev/books/18'},
        ]
      },
      //   {
      //     text: '자바스크립트',
      //     items: [
      //       '/fe-dev/books/6',
      //       '/fe-dev/books/16',
      //       '/fe-dev/books/21',
      //     ]
      //   },
      {
        text: 'Managing',
        items: [
          //       '/fe-dev/books/11',
          {text: 'Index', link: '/en/fe-dev/books/12'},
        ]
      },
      {
        text: 'Methodology',
        items: [
          //       '/fe-dev/books/3',
          {text: 'Index', link: '/en/fe-dev/books/4'},
          //       '/fe-dev/books/5',
          //       '/fe-dev/books/14',
          {text: 'Index', link: '/en/fe-dev/books/17'},
        ]
      },
      {
        text: 'Computer Science',
        items: [
          {text: 'Index', link: '/en/fe-dev/books/22'},
          //       '/fe-dev/books/7',
          //       '/fe-dev/books/8',
          {text: 'Index', link: '/en/fe-dev/books/13'},
          //       '/fe-dev/books/15',
        ]
      }
    ],
    '/en/fe-dev/optimization': [
      {text: 'Index', link: '/en/fe-dev/optimization/'},
      {text: 'Index', link: '/en/fe-dev/optimization/rail'},
      {text: 'Index', link: '/en/fe-dev/optimization/web-vitals'},
      {text: 'Index', link: '/en/fe-dev/optimization/monitoring'},
      {text: 'Index', link: '/en/fe-dev/optimization/chrome-network-tab'},
      {text: 'Index', link: '/en/fe-dev/optimization/browser_cache'},
      {text: 'Index', link: '/en/fe-dev/optimization/lighthouse-mobile'},
      {text: 'Index', link: '/en/fe-dev/optimization/performance-optimization-process'},
    ],
    '/en/fe-dev/javascript': [
      {text: 'Index', link: '/en/fe-dev/javascript/'},
      {
        text: 'JavaScript',
        items: [
          //       '/fe-dev/javascript/syntax',
          {text: 'Index', link: '/en/fe-dev/javascript/this'},
          {text: 'Index', link: '/en/fe-dev/javascript/promise'},
          {text: 'Index', link: '/en/fe-dev/javascript/async-await'},
          {text: 'Index', link: '/en/fe-dev/javascript/coroutine'},
          {text: 'Index', link: '/en/fe-dev/javascript/decorators'},
          {text: 'Index', link: '/en/fe-dev/javascript/event'},
          {text: 'Index', link: '/en/fe-dev/javascript/concurrency-and-parallelism'},
          {text: 'Index', link: '/en/fe-dev/javascript/pure-and-first-class-function'},
          {text: 'Index', link: '/en/fe-dev/javascript/immutable-persistent'},
          {text: 'Index', link: '/en/fe-dev/javascript/console-log'},
        ]
      },
      {
        text: 'TypeScript',
        items: [
          {text: 'Index', link: '/en/fe-dev/javascript/union-type'},
          {text: 'Index', link: '/en/fe-dev/javascript/callback'},
          {text: 'Index', link: '/en/fe-dev/javascript/template-literals'},
        ]
      },
      {
        text: 'CSS',
        items: [
          {text: 'Index', link: '/en/fe-dev/javascript/float-flex-grid'},
        ]
      },
      {
        text: 'npm',
        items: [
          {text: 'Index', link: '/en/fe-dev/javascript/mono-repo'},
        ]
      },
    ],
    '/en/fe-dev/paradigm': [
      {text: 'Index', link: '/en/fe-dev/paradigm/'},
      {
        text: 'Imperative Programming',
        items: [
          {text: 'Index', link: '/en/fe-dev/paradigm/back-to-the-imperative'},
        ]
      },
      {
        text: 'Object-oriented Programming',
        items: [
          {text: 'Index', link: '/en/fe-dev/paradigm/object'},
          //       '/fe-dev/paradigm/produce-oop/'
        ]
      },
      {
        text: 'Functional Programming',
        items: [
          {text: 'Index', link: '/en/fe-dev/paradigm/functional'},
          {text: 'Index', link: '/en/fe-dev/paradigm/functional2'},
          //       '/fe-dev/paradigm/produce/',
          //       '/fe-dev/paradigm/produce-immutable/',
        ]
      },
    ],
    // '/fe-dev/framework': [
    //   '/fe-dev/framework.md',
    //   {
    //     text: 'Vue Composition API',
    //     items: [
    //       '/fe-dev/framework/composition-api-rfc/',
    //       '/fe-dev/framework/composition-api-rfc-summary/',
    //       '/fe-dev/framework/composition-api-rfc-release-notes/',
    //       '/fe-dev/framework/composition-api-rfc-migration/',
    //       '/fe-dev/framework/vuex-in-composition-api/',
    //     ]
    //   },
    //   {
    //     text: 'Vue',
    //     items: [
    //       '/fe-dev/framework/vue-eslint/',
    //       '/fe-dev/framework/nuxt-2-11-typescript/',
    //       '/fe-dev/framework/nuxt-ts/',
    //       '/fe-dev/framework/nuxt-migration/',
    //     ]
    //   },
    //   {
    //     text: 'Angular',
    //     items: [
    //       '/fe-dev/framework/rxjs-codereview/',
    //       '/fe-dev/framework/angular/'
    //     ]
    //   },
    //   {
    //     text: 'React',
    //     items: [
    //       '/fe-dev/framework/react-convention-for-codereview/',
    //     ]
    //   },
    // ],
    '/en/fe-dev/project-management': [
      {text: 'Index', link: '/en/fe-dev/project-management/'},
      {text: 'Index', link: '/en/fe-dev/project-management/estimation'},
      {text: 'Index', link: '/en/fe-dev/project-management/release'},
      //   '/fe-dev/project-management/facilitation-for-meeting/',
      {text: 'Index', link: '/en/fe-dev/project-management/preventive-maintenance'},
      //   '/fe-dev/project-management/git-scm-experience/',
      {text: 'Index', link: '/en/fe-dev/project-management/software-lifecycle'},
    ],
    '/en/fe-dev/refactoring': [
      {text: 'Index', link: '/en/fe-dev/refactoring/'},
      //   '/fe-dev/refactoring/structure-refactoring/',
      //   '/fe-dev/refactoring/legacy-code-to-easy-code/',
      //   '/fe-dev/refactoring/legacy-code-to-easy-code-2/',
      {text: 'Index', link: '/en/fe-dev/refactoring/refactoring-meaning-and-result'},
      {text: 'Index', link: '/en/fe-dev/refactoring/tdd-bdd'},
      {text: 'Index', link: '/en/fe-dev/refactoring/test-types'},
      //   '/fe-dev/refactoring/test-guide/',
    ],
    // '/fe-dev/good-code': [
    //   '/fe-dev/good-code.md',
    //   {
    //     text: '실무 사례',
    //     items: [
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
    //     items: [

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
    //     items: [
    //       '/fe-dev/design-patterns/mv_flux/',
    //       '/fe-dev/design-patterns/react_hook_vue_composition_recoil/',
    //       '/fe-dev/design-patterns/proxy_reverse_proxy_load_balancer/',
    //     ]
    //   },
    //   {
    //     text: 'Model-View 패턴',
    //     items: [
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
    //     items: [
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
    //     items: [
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
    //     items: [
    //       '/fe-dev/code-snippets/CSS3/Flex/',
    //       '/fe-dev/code-snippets/CSS3/MaskImage/',
    //     ]
    //   },
    //   {
    //     text: 'HTML5',
    //     items: [
    //       '/fe-dev/code-snippets/HTML5/HTML5/',
    //       '/fe-dev/code-snippets/HTML5/FetchApi/',
    //       '/fe-dev/code-snippets/HTML5/FileReader/',
    //       '/fe-dev/code-snippets/HTML5/SVG/',
    //     ]
    //   },
    //   {
    //     text: 'Data Structure',
    //     items: [
    //       '/fe-dev/code-snippets/Data-Structure/Set/',
    //       '/fe-dev/code-snippets/Data-Structure/Stack/',
    //       '/fe-dev/code-snippets/Data-Structure/Queue/',
    //       '/fe-dev/code-snippets/Data-Structure/LinkedList/',
    //     ]
    //   },
    //   {
    //     text: 'UIComponent',
    //     items: [
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
    //     items: [
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
    //     items: [
    //       '/fe-dev/code-snippets/OpenSources/eslint/',
    //       '/fe-dev/code-snippets/OpenSources/chart-adaptor/',
    //       '/fe-dev/code-snippets/OpenSources/editor/',
    //       '/fe-dev/code-snippets/OpenSources/express-server/',
    //       '/fe-dev/code-snippets/OpenSources/pdfjs-sample/',
    //     ]
    //   },
    //   {
    //     text: 'Functional',
    //     items: ['/fe-dev/code-snippets/Functional/Functional/'],

    //   },
    //   {
    //     text: 'TodoList',
    //     items: ['/fe-dev/code-snippets/TodoList/']
    //   },
    //   {
    //     text: 'Reactive',
    //     items: ['/fe-dev/code-snippets/Reactive/Reactive/']
    //   },
    // ],
    // '/fe-dev/pet-project': [
    //   '/fe-dev/pet-project.md',
    //   {
    //     text: 'Vue',
    //     items: [
    //       '/fe-dev/pet-project/vue2-part/',
    //       '/fe-dev/pet-project/vue2-component/',
    //       '/fe-dev/pet-project/vuex/'
    //     ]
    //   },
    //   {
    //     text: 'Helper',
    //     items: ['/fe-dev/pet-project/momentjs/',
    //       '/fe-dev/pet-project/immerjs/',
    //       '/fe-dev/pet-project/axios/',
    //     ]
    //   },
    //   {
    //     text: 'Component',
    //     items: [
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
    //     items: [
    //       '/fe-dev/pet-project/mvc/2021-07-mvc/',
    //       '/fe-dev/pet-project/mvc/2020-08-mvc/', '/fe-dev/pet-project/mvc/2021-07-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-function/'
    //     ],
    //   },
    // ]
  }
}