<template><div><h1 id="nuxt-v2-11-기반-nuxt-typescript-환경-세팅" tabindex="-1"><a class="header-anchor" href="#nuxt-v2-11-기반-nuxt-typescript-환경-세팅" aria-hidden="true">#</a> Nuxt v2.11 기반 nuxt/typescript 환경 세팅</h1>
<h3 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h3>
<p>설치 순서는 다음과 같다.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npx <span class="token comment"># npx 설치. create-nuxt-app을 설치하기 위함.</span>
$ npx create-nuxt-app <span class="token operator">&lt;</span>project-name<span class="token operator">></span> <span class="token comment"># nuxt 설치</span>
$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">></span>
$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev @nuxt/typescript-build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="환경설정" tabindex="-1"><a class="header-anchor" href="#환경설정" aria-hidden="true">#</a> 환경설정</h3>
<p>설치가 완료되면 몇가지 환경설정이 필요하다.</p>
<h4 id="_1-typescript의-빌드-옵션-설정" tabindex="-1"><a class="header-anchor" href="#_1-typescript의-빌드-옵션-설정" aria-hidden="true">#</a> 1. TypeScript의 빌드 옵션 설정</h4>
<p><code v-pre>tsconfig.json</code> 파일을 추가한뒤 아래 코드를 작성한다. 아래 코드는 공식 가이드 문서에서 가져왔다.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"es2018"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"esnext"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"esnext"</span><span class="token punctuation">,</span>
      <span class="token string">"esnext.asynciterable"</span><span class="token punctuation">,</span>
      <span class="token string">"dom"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"~/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"./*"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"./*"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"@types/node"</span><span class="token punctuation">,</span>
      <span class="token string">"@nuxt/types"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"node_modules"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-vue-확장자-파일-설정" tabindex="-1"><a class="header-anchor" href="#_2-vue-확장자-파일-설정" aria-hidden="true">#</a> 2. <code v-pre>*.vue</code> 확장자 파일 설정</h4>
<p>TypeScript에서 <code v-pre>*.vue</code> 확장자 파일을 사용하기 위한 설정이다. <code v-pre>vue-shim.d.ts</code> 파일을 추가한뒤 아래 코드를 작성한다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"*.vue"</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Vue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-nuxt에-typescript-빌드-설정" tabindex="-1"><a class="header-anchor" href="#_3-nuxt에-typescript-빌드-설정" aria-hidden="true">#</a> 3. Nuxt에 TypeScript 빌드 설정</h4>
<p><code v-pre>nuxt.config.js</code>의 <code v-pre>buildModules</code>에 <code v-pre>@nuxt/typescript-build</code>를 추가한다.</p>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code>buildModules: [
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  '@nuxt/typescript-build'
</span></span>],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="동작확인" tabindex="-1"><a class="header-anchor" href="#동작확인" aria-hidden="true">#</a> 동작확인</h3>
<p>먼저 로컬 서버를 띄운다.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>pages/index.vue</code> 파일에서 TypeScript 코드를 작성하여 확인해보자.</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Logo <span class="token keyword">from</span> <span class="token string">'~/components/Logo.vue'</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> string
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Logo
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Peter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Cho'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="끝" tabindex="-1"><a class="header-anchor" href="#끝" aria-hidden="true">#</a> 끝</h3>
</div></template>


