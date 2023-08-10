const e=JSON.parse('{"key":"v-669c1696","path":"/fe-dev/framework/nuxt-migration.html","title":"2020.02.10 Nuxt v2.0에서 v2.11로 마이그레이션","lang":"ko-KR","frontmatter":{"title":"2020.02.10 Nuxt v2.0에서 v2.11로 마이그레이션","description":"Nuxt v2.0에서 v2.11로 마이그레이션 글의 목적 트위터에서 Nuxt가 TypeScript를 공식적으로 지원함을 알게 되었었다. Nuxt v2.9.0 부터 TypeScript에 대한 공식적인 가이드와 마이그레이션 가이드를 알렸다. 8월초 프로젝트를 셋업하는 당시는 공식적인 가이드를 제공하지 않았는 데, 프로젝트 셋업 후 공식 버전이 릴리즈 되었다. 이 포스트는 프로젝트 중간에 2.11.0으로 마이그레이션 한 내용에 대한 정리이다.","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/framework/nuxt-migration.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"2020.02.10 Nuxt v2.0에서 v2.11로 마이그레이션"}],["meta",{"property":"og:description","content":"Nuxt v2.0에서 v2.11로 마이그레이션 글의 목적 트위터에서 Nuxt가 TypeScript를 공식적으로 지원함을 알게 되었었다. Nuxt v2.9.0 부터 TypeScript에 대한 공식적인 가이드와 마이그레이션 가이드를 알렸다. 8월초 프로젝트를 셋업하는 당시는 공식적인 가이드를 제공하지 않았는 데, 프로젝트 셋업 후 공식 버전이 릴리즈 되었다. 이 포스트는 프로젝트 중간에 2.11.0으로 마이그레이션 한 내용에 대한 정리이다."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-26T07:28:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"2020.02.10 Nuxt v2.0에서 v2.11로 마이그레이션"}],["meta",{"property":"article:modified_time","content":"2023-06-26T07:28:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2020.02.10 Nuxt v2.0에서 v2.11로 마이그레이션\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-26T07:28:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"글의 목적","slug":"글의-목적","link":"#글의-목적","children":[]},{"level":3,"title":"목차","slug":"목차","link":"#목차","children":[]},{"level":3,"title":"파일별 업그레이드 내역","slug":"파일별-업그레이드-내역","link":"#파일별-업그레이드-내역","children":[]},{"level":3,"title":"마이그레이션 과정","slug":"마이그레이션-과정","link":"#마이그레이션-과정","children":[]},{"level":3,"title":"마이그레이션 시 발생한 이슈","slug":"마이그레이션-시-발생한-이슈","link":"#마이그레이션-시-발생한-이슈","children":[]},{"level":3,"title":"끝","slug":"끝","link":"#끝","children":[]}],"git":{"createdTime":1687348941000,"updatedTime":1687764490000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"fe-dev/framework/nuxt-migration.md","localizedDate":"2023년 6월 21일","excerpt":"<h1> Nuxt v2.0에서 v2.11로 마이그레이션</h1>\\n<h3> 글의 목적</h3>\\n<p>트위터에서 Nuxt가 TypeScript를 공식적으로 지원함을 알게 되었었다. <a href=\\"https://github.com/nuxt/nuxt.js/releases/tag/v2.9.0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Nuxt v2.9.0</a> 부터 TypeScript에 대한 공식적인 가이드와 마이그레이션 가이드를 알렸다.</p>\\n<p>8월초 프로젝트를 셋업하는 당시는 공식적인 가이드를 제공하지 않았는 데, 프로젝트 셋업 후 공식 버전이 릴리즈 되었다. 이 포스트는 프로젝트 중간에 2.11.0으로 마이그레이션 한 내용에 대한 정리이다.</p>","autoDesc":true}');export{e as data};