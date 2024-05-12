import{_ as a,c as e,o as t,a3 as i}from"./chunks/framework.9Buaa5aL.js";const p=JSON.parse('{"title":"Web Vitals - 웹 성능 최적화 기본","description":"","frontmatter":{"title":"Web Vitals - 웹 성능 최적화 기본"},"headers":[],"relativePath":"fe-dev/optimization/web-vitals.md","filePath":"fe-dev/optimization/web-vitals.md"}'),l={name:"fe-dev/optimization/web-vitals.md"},r=i('<h1 id="web-vitals-웹-성능-최적화-기본" tabindex="-1">Web Vitals - 웹 성능 최적화 기본 <a class="header-anchor" href="#web-vitals-웹-성능-최적화-기본" aria-label="Permalink to &quot;Web Vitals - 웹 성능 최적화 기본&quot;">​</a></h1><p><a href="https://web.dev/vitals/" target="_blank" rel="noreferrer">Web Vitals</a>은 좋은 UX를 제공하기 위해 Google에서 제안하는 성능 품질 지침입니다. Google에서는 기존에 제공한 도구와 측정 항목은 숙련도에 따라서 UX 품질을 파악하기 힘들다는 사실을 발견했습니다. 그래서 Web Vitals은 환경을 단순화해서 품질 개선에 도움이 되는 것에 초점을 맞췄습니다.</p><p>Web Vitals에서는 로딩 시간, 상호작용 시간, 시각적 변화량 항목에 대한 좋음/나쁨을 판단할 수 있는 숫자 범위를 가이드합니다. 그중에 중요한 지표는 Core Web Vitals로 구분하고 있습니다.</p><h2 id="로딩-시간-측정-항목" tabindex="-1">로딩 시간 측정 항목 <a class="header-anchor" href="#로딩-시간-측정-항목" aria-label="Permalink to &quot;로딩 시간 측정 항목&quot;">​</a></h2><h3 id="first-contentful-paint-fcp" tabindex="-1"><a href="https://web.dev/fcp/" target="_blank" rel="noreferrer">First Contentful Paint (FCP)</a> <a class="header-anchor" href="#first-contentful-paint-fcp" aria-label="Permalink to &quot;[First Contentful Paint (FCP)](https://web.dev/fcp/)&quot;">​</a></h3><p>페이지 로드가 시작된 후 페이지 콘텐츠의 일부가 화면에 렌더링 될 때까지의 시간을 측정합니다. 여기서 콘텐츠는 텍스트, 이미지(배경 이미지 포함), svg 요소 또는 흰색이 아닌 canvas 요소를 의미합니다.</p><h4 id="개선-방법" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h4><ul><li>리소스 요청 수를 줄이고 응답 크기를 작게 유지</li><li>효율적인 캐시 정책으로 정적 에셋 제공</li><li>CSS 용량 최적화</li><li>렌더링 차단 리소스 제거</li><li>과도한 DOM 크기 피하기</li></ul><h3 id="largest-contentful-paint-lcp" tabindex="-1"><a href="https://web.dev/lcp/" target="_blank" rel="noreferrer">Largest Contentful Paint (LCP)</a> <a class="header-anchor" href="#largest-contentful-paint-lcp" aria-label="Permalink to &quot;[Largest Contentful Paint (LCP)](https://web.dev/lcp/)&quot;">​</a></h3><p>페이지가 처음 로드를 시작한 시점을 기준으로 뷰포트 내에 표시되는 가장 큰 이미지/동영상 또는 텍스트 블록의 렌더링 시간을 측정합니다.</p><p>이미지는 img 태그, svg 내의 image, video, url() 배경을 대상으로 하고 화면에 보이는 크기와 원본 그기 중에 더 작은 크기를 기준으로 합니다. 텍스트 요소의 경우 해당 텍스트 노드의 크기만 고려됩니다.</p><h4 id="개선-방법-1" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법-1" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h4><ul><li>느린 서버 응답 시간을 최적화</li><li>JavaScript와 CSS 같은 렌더링 차단 요청 최적화</li><li>웹 폰트, 이미지와 같은 리소스 로딩 시간 최적화</li><li>클라이언트 사이드 렌더링 최적화</li></ul><h3 id="time-to-first-byte-ttfb" tabindex="-1"><a href="https://web.dev/time-to-first-byte/" target="_blank" rel="noreferrer">Time to First Byte (TTFB)</a> <a class="header-anchor" href="#time-to-first-byte-ttfb" aria-label="Permalink to &quot;[Time to First Byte (TTFB)](https://web.dev/time-to-first-byte/)&quot;">​</a></h3><p>브라우저가 페이지 콘텐츠의 첫 번째 바이트를 수신하는 데 걸리는 시간을 의미합니다. TTFB는 600ms 이상 걸리면 성능이 나쁘다는 것을 의미합니다.</p><h4 id="개선-방법-2" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법-2" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h4><ul><li>서버의 응용 프로그램 최적화</li><li>데이터베이스 쿼리 최적화</li><li>서버 하드웨어 업그레이드: 더 많은 메모리 또는 CPU</li></ul><h2 id="상호작용-시간-측정-항목" tabindex="-1">상호작용 시간 측정 항목 <a class="header-anchor" href="#상호작용-시간-측정-항목" aria-label="Permalink to &quot;상호작용 시간 측정 항목&quot;">​</a></h2><h3 id="time-to-interactive-tti" tabindex="-1"><a href="https://web.dev/tti/" target="_blank" rel="noreferrer">Time to Interactive (TTI)</a> <a class="header-anchor" href="#time-to-interactive-tti" aria-label="Permalink to &quot;[Time to Interactive (TTI)](https://web.dev/tti/)&quot;">​</a></h3><p>페이지가 로드 되기 시작한 시점부터 기본 하위 리소스가 로드 된 시점까지의 시간을 측정하며 사용자 입력이 가능한 시점을 측정합니다.</p><p>TTI를 측정하는 방법은 FCP가 시작되고, 5초 동안 메인 스레드를 차단하지 않는 시기를 찾고, 그 시기에서 과거로 검색하며 Long Task의 종료 시점을 찾아서 그 시점을 TTI 완료 시점으로 합니다.</p><h4 id="개선-방법-3" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법-3" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h4><ul><li>JavaScript 최소화</li><li>필요한 오리진에 사전 연결</li><li>요청 preload</li><li>주요 요청 깊이 최소화</li></ul><h3 id="first-input-delay-fid" tabindex="-1"><a href="https://web.dev/fid/" target="_blank" rel="noreferrer">First Input Delay (FID)</a> <a class="header-anchor" href="#first-input-delay-fid" aria-label="Permalink to &quot;[First Input Delay (FID)](https://web.dev/fid/)&quot;">​</a></h3><p>사용자가 페이지에 처음 인터렉션 한 시간부터 이벤트 핸들러 처리를 시작할 수 있는 시간까지의 시간을 측정합니다.</p><h4 id="개선-방법-4" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법-4" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h4><ul><li>third-party 코드 영향 감소</li><li>JavaScript 실행 감소</li><li>적은 요청 수와 작은 응답 사이즈</li><li>메인 쓰레드 실행 최소화</li></ul><h4 id="메인-쓰레드-실행-최소화-방법" tabindex="-1">메인 쓰레드 실행 최소화 방법 <a class="header-anchor" href="#메인-쓰레드-실행-최소화-방법" aria-label="Permalink to &quot;메인 쓰레드 실행 최소화 방법&quot;">​</a></h4><ul><li>third-party 자바스크립트 최적화</li><li>입력 핸들러 디바운스</li><li>웹 워커 사용</li><li>스타일 계산의 범위와 복잡성 감소</li><li>크고 복잡한 레이아웃 및 레이아웃 스래싱 방지</li><li>컴포지터 전용 속성에 사용 및 레이어 수 관리</li><li>페이지 복잡성을 단순화하고 페인트 영역 줄이기</li></ul><h3 id="total-blocking-time-tbt" tabindex="-1"><a href="https://web.dev/tbt/" target="_blank" rel="noreferrer">Total Blocking Time (TBT)</a> <a class="header-anchor" href="#total-blocking-time-tbt" aria-label="Permalink to &quot;[Total Blocking Time (TBT)](https://web.dev/tbt/)&quot;">​</a></h3><p>FCP와 TTI 사이의 총 시간을 측정합니다.</p><p>메인 스레드는 50ms 이상 실행되는 작업인 Long Task가 있을 때 차단된 것으로 간주하는데, FCP와 TTI 사이에 발생하는 각 Long Task의 차단 시간의 합계가 TBT입니다.</p><p>예를 들어 Long Task 250ms, 90ms가 있다면 각각 50ms를 제외한 240ms가 TBT입니다.</p><h4 id="개선-방법-5" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법-5" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h4><ul><li>third-party 코드 영향 감소</li><li>JavaScript 실행 감소</li><li>메인 쓰레드 실행 최소화</li><li>적은 요청 수와 작은 응답 사이즈</li></ul><h2 id="시각적-변화량-측정-항목" tabindex="-1">시각적 변화량 측정 항목 <a class="header-anchor" href="#시각적-변화량-측정-항목" aria-label="Permalink to &quot;시각적 변화량 측정 항목&quot;">​</a></h2><h3 id="cumulative-layout-shift-cls" tabindex="-1"><a href="https://web.dev/cls/" target="_blank" rel="noreferrer">Cumulative Layout Shift (CLS)</a> <a class="header-anchor" href="#cumulative-layout-shift-cls" aria-label="Permalink to &quot;[Cumulative Layout Shift (CLS)](https://web.dev/cls/)&quot;">​</a></h3><p>페이지에서 발생하는 모든 예기치 않는 레이아웃 이동에 대한 모든 개별 레이아웃 이동 점수의 합계를 측정합니다. CLS는 이동 거리 비율 x 이동한 영역 비율로 계산됩니다.</p><h3 id="개선-방법-6" tabindex="-1">개선 방법 <a class="header-anchor" href="#개선-방법-6" aria-label="Permalink to &quot;개선 방법&quot;">​</a></h3><ul><li>항상 이미지 및 동영상 요소에 크기 속성을 포함</li><li>사용자 상호 작용에 대한 응답을 제외하고는 기존 컨텐츠 위에 컨텐츠를 삽입하지 않기</li><li>레이아웃 변경을 트리거 하는 속성의 애니메이션보다 transform 애니메이션으로 적용</li></ul><h2 id="core-web-vitals" tabindex="-1">Core Web Vitals <a class="header-anchor" href="#core-web-vitals" aria-label="Permalink to &quot;Core Web Vitals&quot;">​</a></h2><p>성능 측정 항목 중 주요 지표인 <a href="https://web.dev/lcp/" target="_blank" rel="noreferrer">LCP</a>, <a href="https://web.dev/fid/" target="_blank" rel="noreferrer">FID</a>, <a href="https://web.dev/cls/" target="_blank" rel="noreferrer">CLS</a>를 의미합니다.</p><h3 id="lcp-성능-기준" tabindex="-1">LCP 성능 기준 <a class="header-anchor" href="#lcp-성능-기준" aria-label="Permalink to &quot;LCP 성능 기준&quot;">​</a></h3><ul><li>성능 좋음: 2500ms 미만</li><li>성능 나쁨: 4000ms 초과</li></ul><h3 id="fid-성능-기준" tabindex="-1">FID 성능 기준 <a class="header-anchor" href="#fid-성능-기준" aria-label="Permalink to &quot;FID 성능 기준&quot;">​</a></h3><ul><li>성능 좋음: 100ms 미만</li><li>성능 나쁨: 300ms 초과</li></ul><h3 id="cls-성능-기준" tabindex="-1">CLS 성능 기준 <a class="header-anchor" href="#cls-성능-기준" aria-label="Permalink to &quot;CLS 성능 기준&quot;">​</a></h3><ul><li>성능 좋음: 0.1 미만</li><li>성능 나쁨: 0.25 초과</li></ul>',48),o=[r];function h(n,s,d,b,c,u){return t(),e("div",null,o)}const m=a(l,[["render",h]]);export{p as __pageData,m as default};
