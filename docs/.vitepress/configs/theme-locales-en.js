export default {
  nav: [{
      text: 'Introduction',
      link: '/en/intro.html'
    },
    {
      text: 'Front-End',
      activeMatch: '/en/fe-dev/',
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
      {text: 'Self-care', link: '/en/fe-dev/self-management/'},
      {text: 'Manage your work history for your career', link: '/en/fe-dev/self-management/project-history'},
      {text: 'Stress Management: Refactor Yourself to Manage Stress', link: '/en/fe-dev/self-management/stress-management'},
    ],
    '/en/fe-dev/interview-guide': [
      {text: "Interviewer's Guide", link: '/en/fe-dev/interview-guide/'},
      {text: 'Preparing Interview Questions', link: '/en/fe-dev/interview-guide/questions-list'},
      {text: 'Technical Interview Process', link: '/en/fe-dev/interview-guide/interview-process'},
      {text: 'Points to decide on acceptance after the interview', link: '/en/fe-dev/interview-guide/success-criteria'},
    ],
    '/en/next-web-research': [
      {text: 'Introduction to Prior Development', link: '/en/next-web-research/'},
      {text: 'Scheduling API for Main Thread Optimization', link: '/en/next-web-research/scheduling-api.md'},
      {text: 'Device Vibration Control', link: '/en/next-web-research/vibrate.md'},
      {text: 'Battery Status Inquiry', link: '/en/next-web-research/battery.md'},
      {text: 'Sharing feature', link: '/en/next-web-research/share.md'},
      {text: 'File System Access', link: '/en/next-web-research/file-system-access-api.md'},
      {text: 'Internet Speed Test', link: '/en/next-web-research/network-speed.md'},
    ],
    '/en/essay': [
      {text: 'Introduction to Experience Summary', link: '/en/essay/'},
      {
        text: 'Testimonials',
        items: [
          {text: 'Save costs with commit message rules', link: '/en/essay/commit-message'},
          {text: 'Automatically generate DTO code defined in Swagger document', link: '/en/essay/swagger-dto-automation'},
          {text: 'Experience of using software version', link: '/en/essay/software-versioning'},
          {text: 'Service usability review case', link: '/en/essay/web-usability-review'},
          {text: 'Experience of a new service in the company', link: '/en/essay/2019-new-service-building'},
          {text: 'CORS and HTTP Cookie', link: '/en/essay/cors-and-http-cookie'},
          {text: 'Basic UI terms that front-end developers should know', link: '/en/essay/front_end_ui'},
          {text: 'How to communicate with developers?', link: '/en/essay/developer_communication_skills'},
        ]
      },
      {
        text: 'Theory',
        items: [
          {text: 'Distinguish between authentication and authorization', link: '/en/essay/authentication-and-authorization'},
          {text: 'Summary of abstraction', link: '/en/essay/abstract'},
          //     '/essay/compiler-theory/',
          {text: 'A summary of the core non-functional requirements of software', link: '/en/essay/non-functional-requirements'},
          //     '/essay/design-guide/',
          {text: 'Web Accessibility', link: '/en/essay/web-accessibility'},
        ]
      },
      {
        text: 'Color Space Series',
        items: [
          {text: "Munsell's color system", link: '/en/essay/color-space-munsell-color-theory'},
          {text: 'HSL HSV', link: '/en/essay/color-space-hsl-and-hsv'},
          {text: 'LCH LAB', link: '/en/essay/color-space-lch-and-lab'},
        ]
      },
      {
        text: 'Writing code',
        items: [
          {text: 'Cleanly branch browsers with Client Hints', link: '/en/essay/client-hints'},
          {text: 'Making a hexagonal profile with SVG and CSS Mask', link: '/en/essay/hexagon-profile'},
          {text: 'Error handling summary', link: '/en/essay/how-to-catch-error'},
          {text: 'n ways to write a branch', link: '/en/essay/branch-n-case'},
          {text: 'When to use callbacks', link: '/en/essay/callback'},
          {text: 'Clone functions depending on the case', link: '/en/essay/clone-function'},
          {text: 'safeChain for safe chaining', link: '/en/essay/safe-chain'},
          {text: 'Observer mechanism', link: '/en/essay/observation-mechanism'},
        ]
      }
    ],
    '/en/fe-dev/books': [
      {text: 'Book Reviews', link: '/en/fe-dev/books/'},
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
          {text: 'Clean Architecture', link: '/en/fe-dev/books/2'},
          {text: 'Clean Software', link: '/en/fe-dev/books/18'},
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
          {text: 'Technical Leader', link: '/en/fe-dev/books/12'},
        ]
      },
      {
        text: 'Methodology',
        items: [
          //       '/fe-dev/books/3',
          {text: 'Front-end development without frameworks', link: '/en/fe-dev/books/4'},
          //       '/fe-dev/books/5',
          //       '/fe-dev/books/14',
          {text: 'This is the first time I learned how to work properly', link: '/en/fe-dev/books/17'},
        ]
      },
      {
        text: 'Computer Science',
        items: [
          {text: 'Today We Call It Computer', link: '/en/fe-dev/books/22'},
          //       '/fe-dev/books/7',
          //       '/fe-dev/books/8',
          {text: 'Intellectual Production Skills for Those Who Work in IT', link: '/en/fe-dev/books/13'},
          //       '/fe-dev/books/15',
        ]
      }
    ],
    '/en/fe-dev/optimization': [
      {text: 'Performance Optimization', link: '/en/fe-dev/optimization/'},
      {text: 'RAIL Model - Web Performance Optimization Basics', link: '/en/fe-dev/optimization/rail'},
      {text: 'Web Vitals - Web Performance Optimization Basics', link: '/en/fe-dev/optimization/web-vitals'},
      {text: 'Web Performance Monitoring Methods - Synthetic Monitoring and Real User Monitoring (RUM)', link: '/en/fe-dev/optimization/monitoring'},
      {text: 'Understanding the Network Tab in Chrome Developer Tools', link: '/en/fe-dev/optimization/chrome-network-tab'},
      {text: 'What is browser cache?', link: '/en/fe-dev/optimization/browser_cache'},
      {text: '{Lighthouse Deep Dive} Understanding Mobile Devices (Why the measurements in the ft. Performance tab are different)', link: '/en/fe-dev/optimization/lighthouse-mobile'},
      {text: '{Lighthouse Deep Dive} Performance optimization process (ft. LCP, TBT optimization)', link: '/en/fe-dev/optimization/performance-optimization-process'},
    ],
    '/en/fe-dev/javascript': [
      {text: 'Computer Language', link: '/en/fe-dev/javascript/'},
      {
        text: 'JavaScript',
        items: [
          //       '/fe-dev/javascript/syntax',
          {text: 'In JavaScript, this means', link: '/en/fe-dev/javascript/this'},
          {text: 'Summary of Promises in One Sheet', link: '/en/fe-dev/javascript/promise'},
          {text: 'async await summarized in one sheet', link: '/en/fe-dev/javascript/async-await'},
          {text: 'Implementing Latency Assessment with Coroutines', link: '/en/fe-dev/javascript/coroutine'},
          {text: 'JavaScript - Decorators', link: '/en/fe-dev/javascript/decorators'},
          {text: 'History and Definition of DOM Event', link: '/en/fe-dev/javascript/event'},
          {text: 'Summary of Concurrency and Parallelism', link: '/en/fe-dev/javascript/concurrency-and-parallelism'},
          {text: 'Summary of Pure Functions and First-Class Functions', link: '/en/fe-dev/javascript/pure-and-first-class-function'},
          {text: 'Immutable Data Structures and Persistent Data Structures', link: '/en/fe-dev/javascript/immutable-persistent'},
          {text: 'How to use CSS in console.log', link: '/en/fe-dev/javascript/console-log'},
        ]
      },
      {
        text: 'TypeScript',
        items: [
          {text: 'TypeScript - Union Type Definition and Usage', link: '/en/fe-dev/javascript/union-type'},
          {text: 'Inferring Callback Types', link: '/en/fe-dev/javascript/callback'},
          {text: 'Enforcing the class names allowed in props', link: '/en/fe-dev/javascript/template-literals'},
        ]
      },
      {
        text: 'CSS',
        items: [
          {text: 'CSS Layout Comparison - Float vs Flex vs Grid', link: '/en/fe-dev/javascript/float-flex-grid'},
        ]
      },
      {
        text: 'npm',
        items: [
          {text: 'Definition and Basic Principles of Monorepo', link: '/en/fe-dev/javascript/mono-repo'},
        ]
      },
    ],
    '/en/fe-dev/paradigm': [
      {text: 'Programming Paradigm', link: '/en/fe-dev/paradigm/'},
      {
        text: 'Imperative Programming',
        items: [
          {text: 'Shifting to imperative programming thinking', link: '/en/fe-dev/paradigm/back-to-the-imperative'},
        ]
      },
      {
        text: 'Object-oriented Programming',
        items: [
          {text: 'Object theorem', link: '/en/fe-dev/paradigm/object'},
          //       '/fe-dev/paradigm/produce-oop/'
        ]
      },
      {
        text: 'Functional Programming',
        items: [
          {text: 'Functional programming theorem', link: '/en/fe-dev/paradigm/functional'},
          {text: 'Functional programming theorem 2', link: '/en/fe-dev/paradigm/functional2'},
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
      {text: 'Project management', link: '/en/fe-dev/project-management/'},
      {text: 'Development Schedule Estimation', link: '/en/fe-dev/project-management/estimation'},
      {text: 'How much do you know about deployment?', link: '/en/fe-dev/project-management/release'},
      //   '/fe-dev/project-management/facilitation-for-meeting/',
      {text: 'Risk Management to Prepare for Risk Situations', link: '/en/fe-dev/project-management/preventive-maintenance'},
      //   '/fe-dev/project-management/git-scm-experience/',
      {text: 'A Brief Summary of Software Life Cycle', link: '/en/fe-dev/project-management/software-lifecycle'},
    ],
    '/en/fe-dev/refactoring': [
      {text: 'Refactoring', link: '/en/fe-dev/refactoring/'},
      //   '/fe-dev/refactoring/structure-refactoring/',
      //   '/fe-dev/refactoring/legacy-code-to-easy-code/',
      //   '/fe-dev/refactoring/legacy-code-to-easy-code-2/',
      {text: 'Definition and Results of Refactoring', link: '/en/fe-dev/refactoring/refactoring-meaning-and-result'},
      {text: 'Comparison of TDD and BDD', link: '/en/fe-dev/refactoring/tdd-bdd'},
      {text: 'A Summary of Test Types on One Page', link: '/en/fe-dev/refactoring/test-types'},
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