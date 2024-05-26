import{_ as a,c as s,o as e,a3 as i}from"./chunks/framework.COm4hYgr.js";const v=JSON.parse('{"title":"DOM Event의 역사와 정의","description":"","frontmatter":{"title":"DOM Event의 역사와 정의"},"headers":[],"relativePath":"fe-dev/javascript/event.md","filePath":"fe-dev/javascript/event.md"}'),n={name:"fe-dev/javascript/event.md"},t=i(`<h1 id="dom-event의-역사와-정의" tabindex="-1">DOM Event의 역사와 정의 <a class="header-anchor" href="#dom-event의-역사와-정의" aria-label="Permalink to &quot;DOM Event의 역사와 정의&quot;">​</a></h1><h2 id="dom-event의-역사" tabindex="-1">DOM Event의 역사 <a class="header-anchor" href="#dom-event의-역사" aria-label="Permalink to &quot;DOM Event의 역사&quot;">​</a></h2><ul><li>DOM Event API는 DOM Level 2에서 논리적으로 표준화하려는 시도했음</li><li>DOM Level 2의 개정 전, IE와 Netscape가 서로 정반대 <code>이벤트 흐름</code>을 채택함</li><li>IE는 이벤트 버블링, Netscape는 이벤트 캡쳐링을 지원함</li><li>현재는 두 이벤트 흐름을 모두 지원함</li></ul><h2 id="dom-event의-정의" tabindex="-1">DOM Event의 정의 <a class="header-anchor" href="#dom-event의-정의" aria-label="Permalink to &quot;DOM Event의 정의&quot;">​</a></h2><ul><li>javascript와 HTML 간의 상호작용을 담당</li><li>옵져버 패턴으로 이벤트가 발생할 때만 리스너가 실행</li></ul><h3 id="이벤트-버블링" tabindex="-1">이벤트 버블링 <a class="header-anchor" href="#이벤트-버블링" aria-label="Permalink to &quot;이벤트 버블링&quot;">​</a></h3><ul><li>이벤트 흐름상 문서 트리에서 가장 깊이 위치한 요소에서 시작해 거슬러 올라감</li><li>가장 깊이 위치한 요소에서 시작해 거슬러 흐르는 모양이 마치 거품이 올라가는 것 같아 버블링이라함</li></ul><h3 id="이벤트-캡처링" tabindex="-1">이벤트 캡처링 <a class="header-anchor" href="#이벤트-캡처링" aria-label="Permalink to &quot;이벤트 캡처링&quot;">​</a></h3><ul><li>최상위 노드에서 처음으로 이벤트가 발생하며 가장 명시적인 노드에서 마지막으로 발생</li><li>이벤트 캡처링은 이벤트가 의도한 요소에 도달하기 전에 잡아채려는 목적으로 디자인</li></ul><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>addEventListener(</span></span>
<span class="line"><span>  [이벤트 이름],</span></span>
<span class="line"><span>  [핸들러],</span></span>
<span class="line"><span>  [호출 시점 true: 캡쳐링, false: 버블링]</span></span>
<span class="line"><span>)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onLoad</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;load&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  onLoad ,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,12),l=[t];function p(h,d,o,r,c,k){return e(),s("div",null,l)}const u=a(n,[["render",p]]);export{v as __pageData,u as default};