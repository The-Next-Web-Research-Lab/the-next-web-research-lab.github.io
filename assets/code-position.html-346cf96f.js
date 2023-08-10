const e=JSON.parse('{"key":"v-5a3a4131","path":"/fe-dev/good-code/code-position.html","title":"코드의 위치를 정하는 기준","lang":"ko-KR","frontmatter":{"title":"코드의 위치를 정하는 기준","description":"코드의 위치를 정하는 기준 2019년 5월 19일에 구조 리펙토링 정리 관련 작업 중에 고민했던 내용들을 정리한 포스트입니다. 글의 목적 코드는 만들어진 목적과 역할이 있기 때문에 어울리는 자리가 있다. 어울리는 자리에 정확히 있으면 왜 그 자리에 있는 지 이해가 되고 유추가 가능하다. 그런데 막상 코드를 작성할 때 코드가 어떤 자리에 위치해야 하는 지 결정을 못해 유틸에 정의하는 경우를 많이 봤다. 코드의 명확한 위치를 정하는 기준에 대해서 알아보기 위해 작성한 글이다.","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/good-code/code-position.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"코드의 위치를 정하는 기준"}],["meta",{"property":"og:description","content":"코드의 위치를 정하는 기준 2019년 5월 19일에 구조 리펙토링 정리 관련 작업 중에 고민했던 내용들을 정리한 포스트입니다. 글의 목적 코드는 만들어진 목적과 역할이 있기 때문에 어울리는 자리가 있다. 어울리는 자리에 정확히 있으면 왜 그 자리에 있는 지 이해가 되고 유추가 가능하다. 그런데 막상 코드를 작성할 때 코드가 어떤 자리에 위치해야 하는 지 결정을 못해 유틸에 정의하는 경우를 많이 봤다. 코드의 명확한 위치를 정하는 기준에 대해서 알아보기 위해 작성한 글이다."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-22T07:23:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"코드의 위치를 정하는 기준"}],["meta",{"property":"article:modified_time","content":"2023-06-22T07:23:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"코드의 위치를 정하는 기준\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-22T07:23:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"글의 목적","slug":"글의-목적","link":"#글의-목적","children":[]},{"level":3,"title":"코드의 위치","slug":"코드의-위치","link":"#코드의-위치","children":[]},{"level":3,"title":"코드의 위치를 정하기 위한 아키텍쳐 기본 기법","slug":"코드의-위치를-정하기-위한-아키텍쳐-기본-기법","link":"#코드의-위치를-정하기-위한-아키텍쳐-기본-기법","children":[]},{"level":3,"title":"끝","slug":"끝","link":"#끝","children":[]}],"git":{"createdTime":1687333974000,"updatedTime":1687418614000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.31,"words":92},"filePathRelative":"fe-dev/good-code/code-position.md","localizedDate":"2023년 6월 21일","excerpt":"<h1> 코드의 위치를 정하는 기준</h1>\\n<blockquote>\\n<p>2019년 5월 19일에 <a href=\\"https://the-next-web-research-lab.github.io/fe-dev/refactoring/structure-refactoring.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">구조 리펙토링 정리</a> 관련 작업 중에 고민했던 내용들을 정리한 포스트입니다.</p>\\n</blockquote>\\n<h3> 글의 목적</h3>\\n<p>코드는 만들어진 <strong>목적</strong>과 <strong>역할</strong>이 있기 때문에 <strong>어울리는 자리</strong>가 있다.\\n<strong>어울리는 자리</strong>에 정확히 있으면 왜 그 자리에 있는 지 이해가 되고 유추가 가능하다.\\n그런데 막상 코드를 작성할 때 코드가 어떤 자리에 위치해야 하는 지 결정을 못해\\n<strong>유틸</strong>에 정의하는 경우를 많이 봤다.\\n코드의 명확한 위치를 정하는 기준에 대해서 알아보기 위해 작성한 글이다.</p>","autoDesc":true}');export{e as data};
