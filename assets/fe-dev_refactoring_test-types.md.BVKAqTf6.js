import{_ as e,c as a,o as t,a3 as r}from"./chunks/framework.9Buaa5aL.js";const u=JSON.parse('{"title":"테스트 종류 한장에 정리","description":"","frontmatter":{"title":"테스트 종류 한장에 정리"},"headers":[],"relativePath":"fe-dev/refactoring/test-types.md","filePath":"fe-dev/refactoring/test-types.md"}'),o={name:"fe-dev/refactoring/test-types.md"},s=r('<h1 id="테스트-종류" tabindex="-1">테스트 종류 <a class="header-anchor" href="#테스트-종류" aria-label="Permalink to &quot;테스트 종류&quot;">​</a></h1><h2 id="유닛-테스트" tabindex="-1">유닛 테스트 <a class="header-anchor" href="#유닛-테스트" aria-label="Permalink to &quot;유닛 테스트&quot;">​</a></h2><p>유닛 테스트는 코드의 특정 모듈이 의도된 대로 정확히 동작하는지 검증하는 방법입니다. 모든 함수와 메서드에 대한 테스트 케이스를 작성하게 됩니다.</p><p>이상적으로 각 테스트 케이스는 서로 분리되어야 하며, 이를 통해서 언제라도 코드 변경으로 인해 문제가 발생할 경우, 빠른 시간 내에 문제를 파악하고 해결할 수 있도록 도와줍니다. 이를 위해서 Mock Object를 생성하는 것도 좋은 방법입니다.</p><p>유닛 테스트는 개발자뿐만 아니라 테스터에 의해서 수행되기도 하고, 테스터가 유닛 테스트를 작성하면 개발자가 맞춰서 개발하는 사례도 있습니다.</p><h2 id="정적-테스트" tabindex="-1">정적 테스트 <a class="header-anchor" href="#정적-테스트" aria-label="Permalink to &quot;정적 테스트&quot;">​</a></h2><p>정적 테스트는 소프트웨어 실행 없이 소프트웨어를 분석하는 것을 의미합니다. eslint, prettier, 오픈 소스 라이센스 검증, 테스트 커버리지 측정 등이 정적 테스트에 해당됩니다.</p><h2 id="통합-테스트" tabindex="-1">통합 테스트 <a class="header-anchor" href="#통합-테스트" aria-label="Permalink to &quot;통합 테스트&quot;">​</a></h2><p>통합 테스트는 유닛 테스트보다 좀 더 큰 단위로 구성된 테스트입니다. 구체적으로는 클라이언트, 서버, DB 등과 같이 모든 시스템들을 완전히 통합해서 구축된 상태에서 모두 검사하는 것입니다.</p><p>통합 테스트에서는 통합된 각 모듈들이 원래 계획했던 대로 작동하는지, 시스템의 실제 동작과 원래 의도했던 요구사항과는 차이가 없는지 등을 판단하게 됩니다. 수행 시간, 파일 저장 및 처리 능력, 최대 부하, 복구 및 재시동 능력, 수작업 절차 등을 점검합니다. 시스템의 내부적인 구현 방식이나 설계에 대한 지식에 관계없이 테스트를 수행하는 블랙박스 테스트의 일종으로 분류된다.</p><h2 id="회귀-테스트" tabindex="-1">회귀 테스트 <a class="header-anchor" href="#회귀-테스트" aria-label="Permalink to &quot;회귀 테스트&quot;">​</a></h2><p>버그를 찾는 모든 테스트 방식은 회귀 테스트라고 할 수 있는 데, 회귀 테스트는 해결한 버그/이슈가 재현되는지 검사하는 방법이다.</p>',12),i=[s];function n(c,d,h,l,p,_){return t(),a("div",null,i)}const m=e(o,[["render",n]]);export{u as __pageData,m as default};
