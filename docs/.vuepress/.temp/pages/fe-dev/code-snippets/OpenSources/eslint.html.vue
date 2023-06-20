<template><div><h2 id="overrides-typescript-eslint-naming-convention" tabindex="-1"><a class="header-anchor" href="#overrides-typescript-eslint-naming-convention" aria-hidden="true">#</a> overrides &amp; @typescript-eslint/naming-convention</h2>
<blockquote>
<ul>
<li><a href="https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work" target="_blank" rel="noopener noreferrer">https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work<ExternalLinkIcon/></a></li>
<li><a href="https://typescript-eslint.io/rules/naming-convention/" target="_blank" rel="noopener noreferrer">https://typescript-eslint.io/rules/naming-convention/<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<ul>
<li>ESLint에서 <code v-pre>overrides</code>를 사용하면 특정 파일에만 룰을 적용할 수 있다.</li>
<li>TS에서 네이밍 컨벤션을 적용하고 싶다면, <code v-pre>@typescript-eslint/naming-convention</code>로 적용할 수 있다.</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"parser"</span><span class="token operator">:</span> <span class="token string">"@typescript-eslint/parser"</span><span class="token punctuation">,</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@typescript-eslint"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:@typescript-eslint/recommended"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"overrides"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/global.d.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"@typescript-eslint/naming-convention"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"error"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"typeAlias"</span><span class="token punctuation">,</span> <span class="token string">"interface"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"format"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"PascalCase"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"T"</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/dto.d.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"@typescript-eslint/naming-convention"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"error"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"typeAlias"</span><span class="token punctuation">,</span> <span class="token string">"interface"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"format"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"PascalCase"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"suffix"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Output"</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


