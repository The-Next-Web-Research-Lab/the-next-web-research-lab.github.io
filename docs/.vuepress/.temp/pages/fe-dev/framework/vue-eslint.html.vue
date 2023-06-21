<template><div><h1 id="vue-eslint-설정" tabindex="-1"><a class="header-anchor" href="#vue-eslint-설정" aria-hidden="true">#</a> Vue ESLint 설정</h1>
<p>Nuxt 기반한 프로젝트에서 <code v-pre>vue/eslint-plugin-vue</code>를 사용중이다. prettier 를 사용하려고 검토하는 도중 우연히 <code v-pre>vue/eslint-plugin-vue</code>에 룰이 많다는 것을 알게 되었다. 초기 세팅 시에 잡혀있는 <code v-pre>plugin:vue/recommended</code>는 굉장히 약한 수준의 룰이다. <a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noopener noreferrer">eslint-plugin-vue<ExternalLinkIcon/></a>를 참고해서 아래와 같이 룰을 수정했다.</p>
<ul>
<li><code v-pre>rules</code>에 prettier로 작업했던 유사한 룰을 추가했다.</li>
<li>기본룰 수준을 <a href="https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-2-x" target="_blank" rel="noopener noreferrer">plugin:vue/recommended<ExternalLinkIcon/></a>에서 <a href="https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-2-x" target="_blank" rel="noopener noreferrer">plugin:vue/strongly-recommended<ExternalLinkIcon/></a>로 변경했다.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'@nuxtjs/eslint-config-typescript'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:nuxt/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:vue/strongly-recommended'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'vue/html-self-closing'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/component-name-in-template-casing'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token string">'kebab-case'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">registeredComponentsOnly</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/max-attributes-per-line'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'singleline'</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">'multiline'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'max'</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">'allowFirstLine'</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/singleline-html-element-content-newline'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'ignoreWhenNoAttributes'</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string-property property">'ignoreWhenEmpty'</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string-property property">'ignores'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


