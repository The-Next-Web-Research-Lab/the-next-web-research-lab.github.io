export default {
  nav: [{
      text: '소개',
      link: '/intro.html'
    },
    {
      text: '프런트엔드',
      items: [{
          text: '자기 관리',
          link: '/fe-dev/self-management/'
        }, {
          text: '프로그래밍 언어',
          link: '/fe-dev/javascript/'
        }, {
          text: '좋은코드',
          link: '/fe-dev/good-code/'
        },
        {
          text: '리팩터링',
          link: '/fe-dev/refactoring/'
        },
        {
          text: '프로젝트 관리',
          link: '/fe-dev/project-management/'
        },
        {
          text: 'React / Vue / Angular',
          link: '/fe-dev/framework/',
        },
        {
          text: '명령형 / 객체지향 / 함수형',
          link: '/fe-dev/paradigm/'
        },
        {
          text: '코드 스니펫',
          link: '/fe-dev/code-snippets/'
        },
        {
          text: '펫 프로젝트',
          link: '/fe-dev/pet-project/'
        },
        {
          text: '디자인 패턴',
          link: '/fe-dev/design-patterns/'
        },
        {
          text: '성능 최적화',
          link: '/fe-dev/optimization/'
        },
        {
          text: '도서 리뷰',
          link: '/fe-dev/books/'
        },
        {
          text: '면접관 가이드',
          link: '/fe-dev/interview-guide/'
        },
      ]
    },
    {
      text: '경험정리',
      link: '/essay/'
    }, {
      text: '선행개발',
      link: '/next-web-research/'
    }
  ],
  sidebar: {
    '/fe-dev/self-management': [{
        text: '자기 관리',
        link: '/fe-dev/self-management/'
      },
      {
        text: '내 커리어를 위한 업무 이력 관리',
        link: '/fe-dev/self-management/project-history'
      },
      {
        text: '스트레스 관리: 나를 리팩터링 해서 스트레스 관리하기',
        link: '/fe-dev/self-management/stress-management'
      }
    ],
    '/fe-dev/interview-guide': [{
        text: '면접관 가이드',
        link: '/fe-dev/interview-guide/',
      },
      {
        text: '면접 질문 준비하기',
        link: '/fe-dev/interview-guide/questions-list',
      },
      {
        text: '기술 면접 프로세스',
        link: '/fe-dev/interview-guide/interview-process',
      },
      {
        text: '면접 이후 합격 판단 포인트',
        link: '/fe-dev/interview-guide/success-criteria',
      },
    ],
    '/next-web-research': [{
        text: '선행개발',
        link: '/next-web-research/'
      },
      {
        text: '메인 스레드 최적화를 위한 Scheduling API',
        link: '/next-web-research/scheduling-api.md'
      },
      {
        text: '기기의 진동 컨트롤',
        link: '/next-web-research/vibrate.md'
      },
      {
        text: '배터리 상태 조회',
        link: '/next-web-research/battery.md'
      },
      {
        text: '공유 기능',
        link: '/next-web-research/share.md'
      },
      {
        text: '파일 시스템 접근',
        link: '/next-web-research/file-system-access-api.md'
      },
      {
        text: '인터넷 속도 측정',
        link: '/next-web-research/network-speed.md'
      }
    ],
    '/essay': [{
        text: '경험정리 소개',
        link: '/essay/'
      },
      {
        text: '경험기',
        items: [{
            text: '커밋 메시지 룰로 비용 절약하기',
            link: '/essay/commit-message'
          },
          {
            text: 'Swagger 문서에 정의된 DTO 코드 자동 생성하기',
            link: '/essay/swagger-dto-automation'
          },
          {
            text: '소프트웨어 버전 사용 경험기',
            link: '/essay/software-versioning'
          },
          {
            text: '서비스 사용성 리뷰 사례',
            link: '/essay/web-usability-review'
          },
          {
            text: '사내 신규 서비스 경험기',
            link: '/essay/2019-new-service-building'
          },
          {
            text: 'CORS와 HTTP Cookie',
            link: '/essay/cors-and-http-cookie'
          },
          {
            text: '프런트엔드 개발자가 알아야 할 기본적인 UI 용어',
            link: '/essay/front_end_ui'
          },
          {
            text: '개발자와 대화하는 방법?',
            link: '/essay/developer_communication_skills'
          },
          {
            text: '{개발자도구} Console 탭 유틸 함수',
            link: '/essay/console-tab'
          },
        ]
      },
      {
        text: '이론',
        items: [{
            text: '인증과 인가 구분하기',
            link: '/essay/authentication-and-authorization'
          },
          {
            text: '추상화 정리',
            link: '/essay/abstract'
          },
          {
            text: '컴파일러 이론 정리',
            link: '/essay/compiler-theory'
          },
          {
            text: '소프트웨어의 핵심 비기능 요구사항 한장에 정리',
            link: '/essay/non-functional-requirements'
          },
          {
            text: 'FE개발자가 정리한 디자인 가이드',
            link: '/essay/design-guide'
          },
          {
            text: '웹 접근성',
            link: '/essay/web-accessibility'
          },
        ]
      },
      {
        text: 'Color Space 시리즈',
        items: [{
            text: '먼셀의 색체계',
            link: '/essay/color-space-munsell-color-theory'
          },
          {
            text: 'HSL HSV',
            link: '/essay/color-space-hsl-and-hsv'
          },
          {
            text: 'LCH LAB',
            link: '/essay/color-space-lch-and-lab'
          },
        ]
      },
      {
        text: '코드 작성',
        items: [{
            text: 'Client Hints로 클린 하게 브라우저 분기하기',
            link: '/essay/client-hints'
          },
          {
            text: 'SVG와 CSS Mask로 육각형 프로필 만들기',
            link: '/essay/hexagon-profile'
          },
          {
            text: '에러 처리 정리',
            link: '/essay/how-to-catch-error'
          },
          {
            text: '분기를 작성하는 방법 n가지',
            link: '/essay/branch-n-case'
          },
          {
            text: '콜백 사용 시점',
            link: '/essay/callback'
          },
          {
            text: '경우에 따른 clone 함수',
            link: '/essay/clone-function'
          },
          {
            text: '안전한 체이닝을 위한 safeChain',
            link: '/essay/safe-chain'
          },
          {
            text: '옵져버 매커니즘',
            link: '/essay/observation-mechanism'
          },
        ]
      }
    ],
    '/fe-dev/books': [{
        text: '도서 리뷰',
        link: '/fe-dev/books/'
      },
      {
        text: '프로그래밍 페러다임',
        items: [{
            text: '객체지향의 사실과 오해',
            link: '/fe-dev/books/9'
          },
          {
            text: '함수형 사고',
            link: '/fe-dev/books/10'
          },
          {
            text: '함수형 자바스크립트 - 루이스 아텐시오',
            link: '/fe-dev/books/19'
          },
          {
            text: '함수형 자바스크립트 - 마이클 포거스',
            link: '/fe-dev/books/20'
          },
        ]
      },
      {
        text: '클린 시리즈',
        items: [{
            text: '클린 코드',
            link: '/fe-dev/books/1'
          },
          {
            text: '클린 아키텍처',
            link: '/fe-dev/books/2'
          },
          {
            text: '클린 소프트웨어',
            link: '/fe-dev/books/18'
          },
        ]
      },
      {
        text: '자바스크립트',
        items: [{
            text: '손에 잡히는 정규표현식',
            link: '/fe-dev/books/6'
          },
          {
            text: '자바스크립트로 하는 자료 구조와 알고리즘',
            link: '/fe-dev/books/16'
          },
          {
            text: 'RxJs 퀵스타트',
            link: '/fe-dev/books/21'
          },
        ]
      },
      {
        text: '매니징',
        items: [{
            text: '개발 7년차, 매니저 1일차',
            link: '/fe-dev/books/11'
          },
          {
            text: '테크니컬 리더',
            link: '/fe-dev/books/12'
          },
        ]
      },
      {
        text: '방법론',
        items: [{
            text: '리팩토링',
            link: '/fe-dev/books/3'
          },
          {
            text: '프레임워크 없는 프론트엔드 개발',
            link: '/fe-dev/books/4'
          },
          {
            text: '프로그래밍의 정석',
            link: '/fe-dev/books/5'
          },
          {
            text: '읽기 좋은 코드가 좋은 코드다',
            link: '/fe-dev/books/14'
          },
          {
            text: '일하는 방법을 제대로 배운 건 처음입니다',
            link: '/fe-dev/books/17'
          },
        ]
      },
      {
        text: '컴퓨터 과학',
        items: [{
            text: '오늘날 우리는 컴퓨터라 부른다',
            link: '/fe-dev/books/22'
          },
          {
            text: 'HTTP 완벽가이드',
            link: '/fe-dev/books/7'
          },
          {
            text: '한 권으로 그리는 컴퓨터과학 로드맵',
            link: '/fe-dev/books/8'
          },
          {
            text: 'IT에 몸담은 이들을 위한 지적생산기술',
            link: '/fe-dev/books/13'
          },
          {
            text: '코딩을 지탱하는 기술',
            link: '/fe-dev/books/15'
          },
        ]
      }
    ],
    '/fe-dev/optimization': [{
        text: '성능 최적화',
        link: '/fe-dev/optimization/'
      },
      {
        text: 'RAIL 모델 - 웹 성능 최적화 기본',
        link: '/fe-dev/optimization/rail'
      },
      {
        text: 'Web Vitals - 웹 성능 최적화 기본',
        link: '/fe-dev/optimization/web-vitals'
      },
      {
        text: '웹 성능 모니터링 방식 - Synthetic Monitoring과 Real User Monitoring(RUM)',
        link: '/fe-dev/optimization/monitoring'
      },
      {
        text: '크롬 개발자 도구에서 네트워크탭 이해하기',
        link: '/fe-dev/optimization/chrome-network-tab'
      },
      {
        text: '브라우저 캐시란?',
        link: '/fe-dev/optimization/browser_cache'
      },
      {
        text: '{Lighthouse Deep Dive} 모바일 장치 이해 (ft. 성능 탭의 측정 결과와 다른 이유)',
        link: '/fe-dev/optimization/lighthouse-mobile'
      },
      {
        text: '{Lighthouse Deep Dive} 성능 최적화 과정 (ft. LCP, TBT 최적화)',
        link: '/fe-dev/optimization/performance-optimization-process'
      }
    ],
    '/fe-dev/javascript': [{
        text: '프로그래밍 언어',
        link: '/fe-dev/javascript/'
      },
      {
        text: '자바스크립트',
        items: [{
            text: '자바스크립트 문법 한장에 정리',
            link: '/fe-dev/javascript/syntax'
          },
          {
            text: '자바스크립트에서 this란',
            link: '/fe-dev/javascript/this'
          },
          {
            text: 'Promise 한장에 정리',
            link: '/fe-dev/javascript/promise'
          },
          {
            text: 'async await 한장에 정리',
            link: '/fe-dev/javascript/async-await'
          },
          {
            text: '코루틴으로 지연평가 구현하기',
            link: '/fe-dev/javascript/coroutine'
          },
          {
            text: 'JavaScript - Decorators',
            link: '/fe-dev/javascript/decorators'
          },
          {
            text: 'DOM Event의 역사와 정의',
            link: '/fe-dev/javascript/event'
          },
          {
            text: '동시성과 병렬성 한 장에 정리',
            link: '/fe-dev/javascript/concurrency-and-parallelism'
          },
          {
            text: '순수 함수와 일급 함수 한 장에 정리',
            link: '/fe-dev/javascript/pure-and-first-class-function'
          },
          {
            text: '불변 자료구조와 영속 자료구조',
            link: '/fe-dev/javascript/immutable-persistent'
          },
          {
            text: 'console.log에서 CSS 사용 방법',
            link: '/fe-dev/javascript/console-log'
          },
        ]
      },
      {
        text: '타입스크립트',
        items: [{
            text: 'TypeScript - Union Type 정의와 사용법 간단 정리',
            link: '/fe-dev/javascript/union-type'
          },
          {
            text: '콜백 타입 추론하기',
            link: '/fe-dev/javascript/callback'
          },
          {
            text: 'props에 허용하는 클래스명 강제하기',
            link: '/fe-dev/javascript/template-literals'
          },
        ]
      },
      {
        text: 'CSS',
        items: [{
          text: 'CSS 레이아웃 비교 - Float vs Flex vs Grid',
          link: '/fe-dev/javascript/float-flex-grid'
        }, ]
      },
      {
        text: 'npm',
        items: [{
          text: '모노레포의 정의와 기본 원리',
          link: '/fe-dev/javascript/mono-repo'
        }, ]
      },
    ],
    '/fe-dev/paradigm': [{
        text: '명령형 / 객체지향 / 함수형',
        link: '/fe-dev/paradigm/'
      },
      {
        text: '명령형',
        items: [{
          text: '명령형 프로그래밍 사고로 전환하기',
          link: '/fe-dev/paradigm/back-to-the-imperative'
        }, ]
      },
      {
        text: '객체지향',
        items: [{
            text: '객체 정리',
            link: '/fe-dev/paradigm/object'
          },
          {
            text: 'immer 구현해보기 - OOP 버전',
            link: '/fe-dev/paradigm/produce-oop'
          },
        ]
      },
      {
        text: '함수형',
        items: [{
            text: '함수형 프로그래밍 정리',
            link: '/fe-dev/paradigm/functional'
          },
          {
            text: '함수형 프로그래밍 정리2',
            link: '/fe-dev/paradigm/functional2'
          },
          {
            text: 'immer 구현해보기',
            link: '/fe-dev/paradigm/produce'
          },
          {
            text: 'immer 구현해보기 - 불변성편',
            link: '/fe-dev/paradigm/produce-immutable'
          },
        ]
      },
    ],
    '/fe-dev/framework': [{
        text: 'React / Vue / Angular',
        link: '/fe-dev/framework/'
      },
      {
        text: 'Vue Composition API',
        items: [{
            text: 'Index',
            link: '/fe-dev/framework/composition-api-rfc'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/composition-api-rfc-summary'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/composition-api-rfc-release-notes'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/composition-api-rfc-migration'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/vuex-in-composition-api'
          },
        ]
      },
      {
        text: 'Vue',
        items: [{
            text: 'Index',
            link: '/fe-dev/framework/vue-eslint'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/nuxt-2-11-typescript'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/nuxt-ts'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/nuxt-migration'
          },
        ]
      },
      {
        text: 'Angular',
        items: [{
            text: 'Index',
            link: '/fe-dev/framework/rxjs-codereview'
          },
          {
            text: 'Index',
            link: '/fe-dev/framework/angular/'
          },
        ]
      },
      {
        text: 'React',
        items: [{
          text: 'Index',
          link: '/fe-dev/framework/react-convention-for-codereview'
        }, ]
      },
    ],
    '/fe-dev/project-management': [{
        text: 'Index',
        link: '/fe-dev/project-management/'
      },
      {
        text: 'Index',
        link: '/fe-dev/project-management/estimation'
      },
      {
        text: 'Index',
        link: '/fe-dev/project-management/release'
      },
      {
        text: 'Index',
        link: '/fe-dev/project-management/facilitation-for-meeting'
      },
      {
        text: 'Index',
        link: '/fe-dev/project-management/preventive-maintenance'
      },
      {
        text: 'Index',
        link: '/fe-dev/project-management/git-scm-experience'
      },
      {
        text: 'Index',
        link: '/fe-dev/project-management/software-lifecycle'
      },
    ],
    '/fe-dev/refactoring': [{
        text: 'Index',
        link: '/fe-dev/refactoring/'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/structure-refactoring'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/legacy-code-to-easy-code'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/legacy-code-to-easy-code-2'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/refactoring-meaning-and-result'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/tdd-bdd'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/test-types'
      },
      {
        text: 'Index',
        link: '/fe-dev/refactoring/test-guide'
      },
    ],
    '/fe-dev/good-code': [{
        text: 'Index',
        link: '/fe-dev/good-code/'
      },
      {
        text: '실무 사례',
        items: [{
            text: 'Index',
            link: '/fe-dev/good-code/2023'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/easy-code'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/code-position'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/reusable-code'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/declarative-function'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/date-helper-development'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/dependency-inversion'
          },
        ]
      },
      {
        text: 'SOLID 원칙 시리즈',
        items: [

          {
            text: 'Index',
            link: '/fe-dev/good-code/solid-srp'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/solid-ocp'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/solid-lsp'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/solid-isp'
          },
          {
            text: 'Index',
            link: '/fe-dev/good-code/solid-dip'
          },
        ]
      },
    ],
    '/fe-dev/design-patterns': [{
        text: 'Index',
        link: '/fe-dev/design-patterns/'
      },
      {
        text: '패턴 비교',
        items: [{
            text: 'Index',
            link: '/fe-dev/design-patterns/mv_flux'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/react_hook_vue_composition_recoil'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/proxy_reverse_proxy_load_balancer'
          },
        ]
      },
      {
        text: 'Model-View 패턴',
        items: [{
            text: 'Index',
            link: '/fe-dev/design-patterns/mvc-word-1979-12-10'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/mvc-xerox-parc'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/mvp-the-taligent-programming-model'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/introduction-to-mvvm-for-wpf'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/flux'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/vuex'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/mvc'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/mvvm'
          },
        ]
      },
      {
        text: 'GoF Design Patterns',
        items: [{
            text: 'Index',
            link: '/fe-dev/design-patterns/gof/summary'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/gof/creational'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/gof/structural'
          },
          {
            text: 'Index',
            link: '/fe-dev/design-patterns/gof/behavioral'
          },
        ]
      },
    ],
    '/fe-dev/code-snippets': [{
        text: 'Index',
        link: '/fe-dev/code-snippets/'
      },
      {
        text: 'Javascript',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/Javascript/Array'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Javascript/Date'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Javascript/Iterable'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Javascript/Object'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Javascript/String'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Javascript/RegExp'
          },
        ]
      },
      {
        text: 'CSS3',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/CSS3/Flex'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/CSS3/MaskImage'
          },
        ]
      },
      {
        text: 'HTML5',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/HTML5/HTML5'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/HTML5/FetchApi'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/HTML5/FileReader'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/HTML5/SVG'
          },
        ]
      },
      {
        text: 'Data Structure',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/Data-Structure/Set'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Data-Structure/Stack'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Data-Structure/Queue'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Data-Structure/LinkedList'
          },
        ]
      },
      {
        text: 'UIComponent',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/UIComponent/Boilerplate'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/UIComponent/Pagination'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/UIComponent/Calendar'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/UIComponent/TimePicker'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/UIComponent/InfiniteScrolling'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/UIComponent/Slider'
          },
        ]
      },
      {
        text: 'Helper',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/Helper'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/contextmenu'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/clone'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/produce'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/safe-chain'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/shuffle'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/router'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/observer'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/component'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/directive'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/Helper/template-binding'
          },
        ]
      },
      {
        text: 'OpenSources',
        items: [{
            text: 'Index',
            link: '/fe-dev/code-snippets/OpenSources/eslint'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/OpenSources/chart-adaptor'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/OpenSources/editor'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/OpenSources/express-server'
          },
          {
            text: 'Index',
            link: '/fe-dev/code-snippets/OpenSources/pdfjs-sample'
          },
        ]
      },
      {
        text: 'Functional',
        items: [{
          text: 'Index',
          link: '/fe-dev/code-snippets/Functional/Functional/'
        }, ],

      },
      {
        text: 'TodoList',
        items: [{
          text: 'Index',
          link: '/fe-dev/code-snippets/TodoList/'
        }, ]
      },
      {
        text: 'Reactive',
        items: [{
          text: 'Index',
          link: '/fe-dev/code-snippets/Reactive/Reactive/'
        }, ]
      },
    ],
    '/fe-dev/pet-project': [{
        text: 'Index',
        link: '/fe-dev/pet-project/'
      },
      {
        text: 'Vue',
        items: [{
            text: 'Index',
            link: '/fe-dev/pet-project/vue2-part'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/vue2-component'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/vuex/'
          },
        ]
      },
      {
        text: 'Helper',
        items: [{
            text: 'Index',
            link: '/fe-dev/pet-project/momentjs'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/immerjs'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/axios'
          },
        ]
      },
      {
        text: 'Component',
        items: [{
            text: 'Index',
            link: '/fe-dev/pet-project/component/2020-08-component'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/component/vuex-feature'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/component/recoil-feature'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/component/fragment-dom'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/component/simple-dom'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/component/simple-component/'
          },
        ]
      },
      {
        text: 'MVC',
        items: [{
            text: 'Index',
            link: '/fe-dev/pet-project/mvc/2021-07-mvc'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/mvc/2020-08-mvc'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/mvc/2021-07-mvc-class'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/mvc/2020-08-mvc-class'
          },
          {
            text: 'Index',
            link: '/fe-dev/pet-project/mvc/2020-08-mvc-function/'
          },
        ],
      },
    ]
  }
}