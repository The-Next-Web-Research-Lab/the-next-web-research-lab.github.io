import{_ as n,o as s,c as a,e}from"./app-f227ea51.js";const t={},p=e(`<h1 id="nuxt-v2-11-기반-nuxt-typescript-환경-세팅" tabindex="-1"><a class="header-anchor" href="#nuxt-v2-11-기반-nuxt-typescript-환경-세팅" aria-hidden="true">#</a> Nuxt v2.11 기반 nuxt/typescript 환경 세팅</h1><h3 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h3><p>설치 순서는 다음과 같다.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npx <span class="token comment"># npx 설치. create-nuxt-app을 설치하기 위함.</span>
$ npx create-nuxt-app <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span> <span class="token comment"># nuxt 설치</span>
$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev @nuxt/typescript-build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="환경설정" tabindex="-1"><a class="header-anchor" href="#환경설정" aria-hidden="true">#</a> 환경설정</h3><p>설치가 완료되면 몇가지 환경설정이 필요하다.</p><h4 id="_1-typescript의-빌드-옵션-설정" tabindex="-1"><a class="header-anchor" href="#_1-typescript의-빌드-옵션-설정" aria-hidden="true">#</a> 1. TypeScript의 빌드 옵션 설정</h4><p><code>tsconfig.json</code> 파일을 추가한뒤 아래 코드를 작성한다. 아래 코드는 공식 가이드 문서에서 가져왔다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2018&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;esnext.asynciterable&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dom&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;~/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;./*&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;./*&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;@types/node&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@nuxt/types&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node_modules&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-vue-확장자-파일-설정" tabindex="-1"><a class="header-anchor" href="#_2-vue-확장자-파일-설정" aria-hidden="true">#</a> 2. <code>*.vue</code> 확장자 파일 설정</h4><p>TypeScript에서 <code>*.vue</code> 확장자 파일을 사용하기 위한 설정이다. <code>vue-shim.d.ts</code> 파일을 추가한뒤 아래 코드를 작성한다.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*.vue&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Vue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-nuxt에-typescript-빌드-설정" tabindex="-1"><a class="header-anchor" href="#_3-nuxt에-typescript-빌드-설정" aria-hidden="true">#</a> 3. Nuxt에 TypeScript 빌드 설정</h4><p><code>nuxt.config.js</code>의 <code>buildModules</code>에 <code>@nuxt/typescript-build</code>를 추가한다.</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>buildModules: [
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  &#39;@nuxt/typescript-build&#39;
</span></span>],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="동작확인" tabindex="-1"><a class="header-anchor" href="#동작확인" aria-hidden="true">#</a> 동작확인</h3><p>먼저 로컬 서버를 띄운다.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>pages/index.vue</code> 파일에서 TypeScript 코드를 작성하여 확인해보자.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Logo <span class="token keyword">from</span> <span class="token string">&#39;~/components/Logo.vue&#39;</span>

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
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Peter&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Cho&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="끝" tabindex="-1"><a class="header-anchor" href="#끝" aria-hidden="true">#</a> 끝</h3>`,21),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","nuxt-2-11-typescript.html.vue"]]);export{u as default};
