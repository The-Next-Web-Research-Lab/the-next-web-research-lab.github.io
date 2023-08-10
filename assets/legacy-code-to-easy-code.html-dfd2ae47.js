const e=JSON.parse('{"key":"v-2cb2288e","path":"/fe-dev/refactoring/legacy-code-to-easy-code.html","title":"레거시 코드에서 이해하기 쉬운코드로 리팩토링","lang":"ko-KR","frontmatter":{"title":"레거시 코드에서 이해하기 쉬운코드로 리팩토링","description":"레거시 코드에서 이해하기 쉬운코드로 리팩토링 2019년 5월 26일에 작성한 포스트입니다. 글의 목적 한번쯤은 다른 누군가에게 전해받은 레거시 코드를 받아 프로젝트를 진행해야 되는 경험이 있었을 것이다. 나는 2018년 10월부터 i.kakao.com으로 서비스 되고 있는 카카오 i 오픈빌더를 이어 받았다. 프로젝트는 초기 빌딩 시 프런트 전문가들이 투입되지 않아 개선점이 많이 필요했다. 현재는 프런트 인력이 추가되어 리팩토링이 진행될 예정인데, 그 과정에 앞서 지금까지 진행했던 내용을 공유할 필요성이 있어 정리한 자료이다.","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/refactoring/legacy-code-to-easy-code.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"레거시 코드에서 이해하기 쉬운코드로 리팩토링"}],["meta",{"property":"og:description","content":"레거시 코드에서 이해하기 쉬운코드로 리팩토링 2019년 5월 26일에 작성한 포스트입니다. 글의 목적 한번쯤은 다른 누군가에게 전해받은 레거시 코드를 받아 프로젝트를 진행해야 되는 경험이 있었을 것이다. 나는 2018년 10월부터 i.kakao.com으로 서비스 되고 있는 카카오 i 오픈빌더를 이어 받았다. 프로젝트는 초기 빌딩 시 프런트 전문가들이 투입되지 않아 개선점이 많이 필요했다. 현재는 프런트 인력이 추가되어 리팩토링이 진행될 예정인데, 그 과정에 앞서 지금까지 진행했던 내용을 공유할 필요성이 있어 정리한 자료이다."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-22T07:28:46.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"레거시 코드에서 이해하기 쉬운코드로 리팩토링"}],["meta",{"property":"article:modified_time","content":"2023-06-22T07:28:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"레거시 코드에서 이해하기 쉬운코드로 리팩토링\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-22T07:28:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"글의 목적","slug":"글의-목적","link":"#글의-목적","children":[]},{"level":3,"title":"2018.10~11 오픈빌더 투입","slug":"_2018-10-11-오픈빌더-투입","link":"#_2018-10-11-오픈빌더-투입","children":[]},{"level":3,"title":"2018.12 코드 리팩토링 시작","slug":"_2018-12-코드-리팩토링-시작","link":"#_2018-12-코드-리팩토링-시작","children":[]},{"level":3,"title":"2019.01 오픈빌더 기술적부채상환 전략","slug":"_2019-01-오픈빌더-기술적부채상환-전략","link":"#_2019-01-오픈빌더-기술적부채상환-전략","children":[]},{"level":3,"title":"2019.02 설정 페이지 리팩토링","slug":"_2019-02-설정-페이지-리팩토링","link":"#_2019-02-설정-페이지-리팩토링","children":[]},{"level":3,"title":"2019.05 응답형식 구조 리팩토링","slug":"_2019-05-응답형식-구조-리팩토링","link":"#_2019-05-응답형식-구조-리팩토링","children":[]}],"git":{"createdTime":1687334622000,"updatedTime":1687418926000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"fe-dev/refactoring/legacy-code-to-easy-code.md","localizedDate":"2023년 6월 21일","excerpt":"<h1> 레거시 코드에서 이해하기 쉬운코드로 리팩토링</h1>\\n<blockquote>\\n<p>2019년 5월 26일에 작성한 포스트입니다.</p>\\n</blockquote>\\n<h3> 글의 목적</h3>\\n<p>한번쯤은 <strong>다른 누군가에게 전해받은 레거시 코드</strong>를 받아 프로젝트를 진행해야 되는 경험이 있었을 것이다.\\n나는 2018년 10월부터 <strong>i.kakao.com</strong>으로 서비스 되고 있는 <strong>카카오 i 오픈빌더</strong>를 이어 받았다.</p>\\n<p>프로젝트는 초기 빌딩 시 프런트 전문가들이 투입되지 않아 개선점이 많이 필요했다. 현재는 프런트 인력이 추가되어 리팩토링이 진행될 예정인데, 그 과정에 앞서 지금까지 진행했던 내용을 공유할 필요성이 있어 정리한 자료이다.</p>","autoDesc":true}');export{e as data};
