import{_ as e,r as o,o as p,c as i,a as n,b as s,d as t,e as c}from"./app-f52d936f.js";const l={},u=n("h2",{id:"overrides-typescript-eslint-naming-convention",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#overrides-typescript-eslint-naming-convention","aria-hidden":"true"},"#"),s(" overrides & @typescript-eslint/naming-convention")],-1),r={href:"https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work",target:"_blank",rel:"noopener noreferrer"},d={href:"https://typescript-eslint.io/rules/naming-convention/",target:"_blank",rel:"noopener noreferrer"},k=c(`<ul><li>ESLint에서 <code>overrides</code>를 사용하면 특정 파일에만 룰을 적용할 수 있다.</li><li>TS에서 네이밍 컨벤션을 적용하고 싶다면, <code>@typescript-eslint/naming-convention</code>로 적용할 수 있다.</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/global.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@typescript-eslint/naming-convention&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;typeAlias&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;interface&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;PascalCase&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;T&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/dto.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@typescript-eslint/naming-convention&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;typeAlias&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;interface&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;PascalCase&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;suffix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Output&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(q,m){const a=o("ExternalLinkIcon");return p(),i("div",null,[u,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",r,[s("https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work"),t(a)])]),n("li",null,[n("a",d,[s("https://typescript-eslint.io/rules/naming-convention/"),t(a)])])])]),k])}const g=e(l,[["render",v],["__file","eslint.html.vue"]]);export{g as default};