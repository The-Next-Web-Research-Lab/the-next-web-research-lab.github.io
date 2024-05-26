import{_ as a,c as e,o as s,a3 as n}from"./chunks/framework.COm4hYgr.js";const g=JSON.parse('{"title":"스트레스 관리: 나를 리팩터링 해서 스트레스 관리하기","description":"","frontmatter":{"title":"스트레스 관리: 나를 리팩터링 해서 스트레스 관리하기"},"headers":[],"relativePath":"fe-dev/self-management/stress-management.md","filePath":"fe-dev/self-management/stress-management.md"}'),p={name:"fe-dev/self-management/stress-management.md"},t=n(`<h1 id="스트레스-관리-나를-리팩터링-해서-스트레스-관리하기" tabindex="-1">스트레스 관리: 나를 리팩터링 해서 스트레스 관리하기 <a class="header-anchor" href="#스트레스-관리-나를-리팩터링-해서-스트레스-관리하기" aria-label="Permalink to &quot;스트레스 관리: 나를 리팩터링 해서 스트레스 관리하기&quot;">​</a></h1><h2 id="스트레스-관리는-왜-필요할까" tabindex="-1">스트레스 관리는 왜 필요할까? <a class="header-anchor" href="#스트레스-관리는-왜-필요할까" aria-label="Permalink to &quot;스트레스 관리는 왜 필요할까?&quot;">​</a></h2><p>갑작스러운 일이 발생하거나 정보 과부하가 생길 때 스트레스를 받곤 하지 않는가? 나는 계획형이고 신중한 성격이라 익숙하지 않는 갑작스러운 일이 발생하면 스트레스를 받곤 한다. 그리고 정보 과부하가 생기면 판단력이 흐려지곤 했다.</p><p><a href="https://www.mentalhealth.go.kr/portal/disease/diseaseDetail.do?dissId=30&amp;srCodeNm=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4" target="_blank" rel="noreferrer">질병관리청에서 스트레스</a>는 정신질환의 하나로 보고 있다. 사람은 스트레스를 받으면 판단력이 흐려지고 그만큼 본인의 능력치 만큼 발휘를 못한다. 즉, 스트레스 받는 지점을 줄이면 그만큼 업무 효율이 증가한다.</p><h2 id="스트레스-줄이기" tabindex="-1">스트레스 줄이기 <a class="header-anchor" href="#스트레스-줄이기" aria-label="Permalink to &quot;스트레스 줄이기&quot;">​</a></h2><h3 id="단순하고-반복적인-작업-줄이기" tabindex="-1">단순하고 반복적인 작업 줄이기 <a class="header-anchor" href="#단순하고-반복적인-작업-줄이기" aria-label="Permalink to &quot;단순하고 반복적인 작업 줄이기&quot;">​</a></h3><p>단순하고 반복적인 작업은 소모적인 작업이라 줄이면 스트레스 개선에 도움을 준다. 나는 코드의 네이밍은 <a href="https://www.jetbrains.com.cn/en-us/help/webstorm/refactoring-source-code.html" target="_blank" rel="noreferrer">Refactor</a> 기능을 활용했었고, 자주 사용되는 코드는 <a href="https://www.jetbrains.com/help/webstorm/using-live-templates.html" target="_blank" rel="noreferrer">Live Template</a> 기능을 활용해서 개선했었다.</p><p>그리고 디자이너와 백엔드 개발자와 협업할 때 개선할 수 있는 부분이 있다.</p><p>디자이너에게 100개 이상의 아이콘 파일을 받아 아이콘 컴포넌트에 반영해야 될 때가 있었다. 이때는 이미지를 아이콘 컴포넌트로 변환해 주는 nodejs 스크립트를 작성해서 해결했다. nodejs의 file system과 문자열 변경 그리고 명령어 실행 위치만 주의하면 스크립트 작성은 간단히 해결된다. 생성된 아이콘 컴포넌트의 코드 포맷은 Prettier를 nodejs에서 실행하면 쉽게 해결된다.</p><p>마지막으로 REST API의 DTO 타입을 정의할 때는 Swagger 문서를 읽어서 DTO 타입으로 정의해 주는 <a href="https://www.npmjs.com/package/swagger-typescript-api" target="_blank" rel="noreferrer">swagger-typescript-api</a>를 활용하면 개선할 수 있었다. 만약에 라우트 별로 각자 타입을 관리하고 싶다면 <a href="https://www.npmjs.com/package/dts-bundle-generator" target="_blank" rel="noreferrer">dts-bundle-generator</a>를 활용하면 해결할 수 있다.</p><h3 id="컨텍스트-스위칭-최적화" tabindex="-1">컨텍스트 스위칭 최적화 <a class="header-anchor" href="#컨텍스트-스위칭-최적화" aria-label="Permalink to &quot;컨텍스트 스위칭 최적화&quot;">​</a></h3><p>업무를 하다보면 메신저에 알림이 오거나 회의가 발생되거나 갑작스럽게 오프라인에서 질문을 받는 경우가 발생한다. 이때 집중하던 업무의 컨텍스트가 깨져서 다시 돌아오면 회복하는 데 시간이 걸린다.</p><p>회사에서 연차가 쌓이면 역할과 업무가 많아져 컨텍스트 스위칭 발생이 빈번했었다. 그래서 나는 엔지니어링의 기본인 큰일을 작게 쪼개서 업무를 하는 것을 항상 실천했다.</p><p>프런트 엔드 개발을 하면 마크업과 REST API 연동 그리고 완료 후 리팩터링을 한다. 나는 항상 다음과 같은 순서로 업무를 진행해서 컨텍스트 스위칭을 해결했다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Step 1. 러프하게 마크업 반영/개발</span></span>
<span class="line"><span>- 가끔 전체적인 흐름의 디자인은 있는데, 디테일한 디자인이 없는 경우가 있지 않은가?</span></span>
<span class="line"><span>- 디테일한 부분은 추후에 진행하면 되므로 이때는 레이아웃와 형태에 집중해서 작업한다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Step 2. (옵션) 중복되는 UI 컴포넌트화</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Step 3. REST API의 DTO 정의</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Step 4. 목업 데이터로 REST API 플로우 연동</span></span>
<span class="line"><span>- 백엔드 개발자에게 REST API가 동작된다고 전달받아 실행했는데, 안될 때가 있지 않은가?</span></span>
<span class="line"><span>- 고쳐지기 전에까지 목업 데이터라도 연동해두면 다음 업무를 진행할 수 있다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Step 5. REST API 서버 통신 연동</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Step 6. UI 디테일 시나리오 연동</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Step 7. 중복 로직 리팩토링</span></span></code></pre></div>`,15),r=[t];function l(i,o,c,h,d,m){return s(),e("div",null,r)}const _=a(p,[["render",l]]);export{g as __pageData,_ as default};