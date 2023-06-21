<template><div><h1 id="nuxt에서-typescript로-개발하기" tabindex="-1"><a class="header-anchor" href="#nuxt에서-typescript로-개발하기" aria-hidden="true">#</a> Nuxt에서 TypeScript로 개발하기</h1>
<h3 id="글의-목적" tabindex="-1"><a class="header-anchor" href="#글의-목적" aria-hidden="true">#</a> 글의 목적</h3>
<p>Angular 기반한 프로젝트를 한 경험이 있다. Angular는 TypeScript를 필수로 사용한다. 그 프로젝트에서 TypeScript를 사용하면 생산성이 높아지는 것을 몸소 느끼게 되었다. 그래서 새롭게 프로젝트를 하게되면 TypeScript를 사용하는 것으로 마음(?)먹었다.</p>
<p>이 글에서는 Nuxt를 TypeScript 기반으로 개발하는 것을 가이드한다. Nuxt를 TypeScript로 개발하는 것에 대한 레퍼런스가 아직 많이 없기 때문에 직접 작성하기로 했다. 이 글에서는 Nuxt에 TypeScript를 세팅하는 방법과 TypeScript로 작성한 Vue와 Vuex 코드를 소개한다.</p>
<h3 id="설치-및-설정" tabindex="-1"><a class="header-anchor" href="#설치-및-설정" aria-hidden="true">#</a> 설치 및 설정</h3>
<p>먼저 개발환경을 잡기 위해서 필요할 모듈 설치와 환경설정이 필요하다.</p>
<h4 id="npx-설치" tabindex="-1"><a class="header-anchor" href="#npx-설치" aria-hidden="true">#</a> NPX 설치</h4>
<p>TypeScript로 작성된 Nuxt는 <code v-pre>npx</code>를 통해서 커멘드를 실행하는 게 좋다. 기본으로 제공하는 <code v-pre>dev</code> 명령어는 TypeScript를 기반으로 실행해주지 않기 때문에 <code v-pre>npx</code> 설치는 필수이다.</p>
<p><a href="https://www.npmjs.com/package/npx#description" target="_blank" rel="noopener noreferrer">npx<ExternalLinkIcon/></a>는 <code v-pre>node_modules/.bin</code>에 설치되는 커멘드를 프로젝트 로컬에서 실행가능하도록 해주는 모듈이다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npm install -g npx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="nuxt-프로젝트-설치" tabindex="-1"><a class="header-anchor" href="#nuxt-프로젝트-설치" aria-hidden="true">#</a> Nuxt 프로젝트 설치</h4>
<blockquote>
<p><a href="https://nuxtjs.org/guide/installation" target="_blank" rel="noopener noreferrer">공식 가이드 문서<ExternalLinkIcon/></a>를 참고한다.</p>
</blockquote>
<p>Nuxt를 설치하는 것은 JS로 개발할 때와 동일하다. 이 명령어를 실행하면 <strong>UI Framework</strong>와 <strong>Server-side Framework</strong> 선택이 나온다. 원하는 Framework를 선택하면 된다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npx create-nuxt-app &lt;project-name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="nuxt-typescript-설치" tabindex="-1"><a class="header-anchor" href="#nuxt-typescript-설치" aria-hidden="true">#</a> Nuxt TypeScript 설치</h4>
<p>컴파일 타임에 타입 체크를 하기 위해서 <code v-pre>devDependencies</code>에 <code v-pre>@nuxt/typescript</code>와 <code v-pre>nuxt-property-decorator</code>를 설치한다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npm install -D @nuxt/typescript nuxt-property-decorator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>nuxt.config.ts</code>와 <code v-pre>serverMiddlewares</code>에 TypeScript를 런타임에 지원하기 위해서 <code v-pre>dependencies</code>에 <code v-pre>ts-node</code>를 설치한다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npm install ts-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="설정-파일-수정" tabindex="-1"><a class="header-anchor" href="#설정-파일-수정" aria-hidden="true">#</a> 설정 파일 수정</h4>
<p>모듈 설치가 끝나면 TypeScript로 개발할 수 있도록 설정이 필요하다.</p>
<ol>
<li><code v-pre>touch tsconfig.json</code> 명령어로 TypeScript 설정파일을 만든다.</li>
<li><code v-pre>npx nuxt</code> 명령어로 <code v-pre>tsconfig.json</code>을 수정한다. <code v-pre>nuxt</code>를 처음 실행하면 <code v-pre>tsconfig.json</code>을 자동으로 업데이트 해준다.</li>
<li><code v-pre>tsconfig.json</code>에 <code v-pre>@nuxt/config</code>을 추가한다. nuxt 타입을 IDE에서 자동완성 가능하게 된다.</li>
</ol>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code>"types": [
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">"@types/node",
</span><span class="token prefix unchanged"> </span><span class="token line">"@nuxt/vue-app",
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> "@nuxt/config"
</span></span>]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="설정파일을-typescript로-변경" tabindex="-1"><a class="header-anchor" href="#설정파일을-typescript로-변경" aria-hidden="true">#</a> 설정파일을 TypeScript로 변경</h4>
<ol>
<li><code v-pre>nuxt.config.js</code>를 <code v-pre>nuxt.config.ts</code>로 변경한다.</li>
<li>TypeScript로 <code v-pre>nuxt.config.ts</code>를 수정한다.</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> NuxtConfiguration <span class="token keyword">from</span> <span class="token string">'@nuxt/config'</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> NuxtConfiguration <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Type or Press `Ctrl + Space` for autocompletion</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="실행하기" tabindex="-1"><a class="header-anchor" href="#실행하기" aria-hidden="true">#</a> 실행하기</h4>
<p>Nuxt에서 TypeScript를 사용하기 위해서는 해당 명령어로 실행해야 한다.
<code v-pre>npm run dev</code> 명령어가 기본으로 설정되어 있지만 해당 명령어로는 TypeScript가 동작하지 않는다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npx nuxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="빌드하기" tabindex="-1"><a class="header-anchor" href="#빌드하기" aria-hidden="true">#</a> 빌드하기</h4>
<p>빌드는 2가지가 있다. <code v-pre>SPA</code>와 <code v-pre>정적파일 생성</code>이다.</p>
<ul>
<li><code v-pre>npx nuxt build</code>: SPA 빌드</li>
<li><code v-pre>npx nuxt generate</code>: 정적파일 생성</li>
</ul>
<h3 id="빌드-파일-실행하기" tabindex="-1"><a class="header-anchor" href="#빌드-파일-실행하기" aria-hidden="true">#</a> 빌드 파일 실행하기</h3>
<p>빌드 결과가 있는 <code v-pre>dist</code> 폴더를 실행하기 위해서는 아래 명령어를 사용한다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npx nuxt start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="typescript로-vue-코드-작성하기" tabindex="-1"><a class="header-anchor" href="#typescript로-vue-코드-작성하기" aria-hidden="true">#</a> TypeScript로 Vue 코드 작성하기</h3>
<h4 id="vue의-script-를-typescript로-설정하기" tabindex="-1"><a class="header-anchor" href="#vue의-script-를-typescript로-설정하기" aria-hidden="true">#</a> Vue의 <code v-pre>&lt;script&gt;</code>를 TypeScript로 설정하기</h4>
<p>먼저 <strong>주의</strong>할 점은 <code v-pre>.vue</code>파일에 <code v-pre>&lt;script&gt;</code>는 <code v-pre>&lt;script lang=&quot;ts&quot;&gt;</code>로만 작성해야 한다. <code v-pre>lang=&quot;ts&quot;</code>를 추가하면 IDE에서 컴포넌트를 자동으로 <code v-pre>import</code>가능하다.</p>
<h4 id="컴포넌트-작성하기" tabindex="-1"><a class="header-anchor" href="#컴포넌트-작성하기" aria-hidden="true">#</a> 컴포넌트 작성하기</h4>
<blockquote>
<p><code v-pre>v-for</code>를 사용하면 <code v-pre>:key</code>를 필수로 사용해야 한다.</p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>VueToNuxtLogo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in classes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`${COMMON_CLASS} ${item}`<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'nuxt-property-decorator'</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Logo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token constant">COMMON_CLASS</span> <span class="token operator">=</span> <span class="token string">'Triangle'</span>
  <span class="token literal-property property">classes</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'Triangle--two'</span><span class="token punctuation">,</span>
    <span class="token string">'Triangle--one'</span><span class="token punctuation">,</span>
    <span class="token string">'Triangle--three'</span><span class="token punctuation">,</span>
    <span class="token string">'Triangle--four'</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Logo
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logo</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button--green<span class="token punctuation">"</span></span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upCount()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Up
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    { { count } }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button--grey<span class="token punctuation">"</span></span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>downCount()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Down
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'nuxt-property-decorator'</span>
<span class="token keyword">import</span> Logo <span class="token keyword">from</span> <span class="token string">'~/components/Logo.vue'</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Logo
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token function">upCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token function">downCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vuex-루트에-사용하기" tabindex="-1"><a class="header-anchor" href="#vuex-루트에-사용하기" aria-hidden="true">#</a> Vuex 루트에 사용하기</h4>
<p>루트에 정의할 때는 <code v-pre>store/index.ts</code>에 <code v-pre>state</code>, <code v-pre>mutations</code>, <code v-pre>getters</code>, <code v-pre>actions</code>를 정의한다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">upCount</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">downCount</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count<span class="token operator">--</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴포넌트에서는 데코레이터만 붙이면 사용가능하다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> count
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Mutation</span></span> upCount
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Mutation</span></span> downCount
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vuex-모듈-모드-사용하기" tabindex="-1"><a class="header-anchor" href="#vuex-모듈-모드-사용하기" aria-hidden="true">#</a> Vuex 모듈 모드 사용하기</h4>
<p>모듈 모드로 정의할 때는 <code v-pre>store</code>에 다른 파일을 정의한다. 파일 내부에는 <code v-pre>state</code>, <code v-pre>mutations</code>, <code v-pre>getters</code>, <code v-pre>actions</code>를 정의한다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// page.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">upCount</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">downCount</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count<span class="token operator">--</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴포넌트에서 사용할 때는 모듈을 접근해서 사용한다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>page<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
  count
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Mutation</span></span><span class="token punctuation">(</span><span class="token string">'page/upCount'</span><span class="token punctuation">)</span>
  upCount
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Mutation</span></span><span class="token punctuation">(</span><span class="token string">'page/downCount'</span><span class="token punctuation">)</span>
  downCount
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="끝" tabindex="-1"><a class="header-anchor" href="#끝" aria-hidden="true">#</a> 끝</h3>
<p>이 글에서 작성된 설정과정을 보일러 플레이트로 만들어서 <a href="https://github.com/ChoDragon9/create-nuxt-ts" target="_blank" rel="noopener noreferrer">create-nuxt-ts<ExternalLinkIcon/></a>에 올렸다. 이 저장소를 내려받으면 설정 과정없이 바로 사용 가능하다.</p>
<p>그리고 처음 인텔리제이를 통해서 개발환경세팅을 했는 데, 인텔리제이는 IDE에 설정과정에서 많은 삽질이 필요하다. 웹스톰을 사용하면 별도로 IDE 설정 필요없이 바로 사용가능하다.</p>
</div></template>


