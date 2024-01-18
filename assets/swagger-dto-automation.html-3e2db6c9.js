import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,a as e,b as n,d as t,e as a}from"./app-8f51c971.js";const l={},p=a('<h1 id="automatically-generate-dto-code-defined-in-swagger-document" tabindex="-1"><a class="header-anchor" href="#automatically-generate-dto-code-defined-in-swagger-document" aria-hidden="true">#</a> Automatically generate DTO code defined in Swagger document</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This article introduces a project case using TypeScript and Swagger.</p><p>Before using REST API, we often define DTO files by looking at Swagger document. You can manually write DTO files, but by using open source, you can automate it You don&#39;t need to define coding rules separately, and you can easily change DTO when it changes.</p><p>This article introduces how to automatically generate DTO defined in Swagger document and how to bundle routing files for development productivity in large-scale projects.</p><h2 id="automatically-generate-dto-defined-in-swagger-document" tabindex="-1"><a class="header-anchor" href="#automatically-generate-dto-defined-in-swagger-document" aria-hidden="true">#</a> Automatically generate DTO defined in Swagger document</h2>',6),d={href:"https://www.npmjs.com/package/swagger-typescript-api",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"swagger-typescript-api",-1),m=a(`<p>You can easily manage files by separating them by using options appropriately. When I used it in the project, I defined it in <code>package.json</code> and used it, and the command and options are as follows.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swagger-typescript-api -p {Swagger JSON address} -o {DTO file path} --no-client --route-types --modular --sort-types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-p</code> sets the json file address of swagger.</li><li><code>-o</code> sets the location where the swagger DTO file is stored in the project.</li><li><code>--no-client</code> prevents JS code that requests API from being generated when running open source.</li><li><code>--route-types</code> defines API route paths by separating each namespace.</li><li><code>--modular</code> sets whether to separate the file used in common in the API route from the DTO to the <code>data-contracts.ts</code> file.</li><li><code>--sort-types</code> defines DTO by sorting.</li></ul><h2 id="bundle-routing-files" tabindex="-1"><a class="header-anchor" href="#bundle-routing-files" aria-hidden="true">#</a> Bundle routing files</h2><p>In the field, REST API is different for each service function, and the front-end person in charge is different for each function. In a situation where colleagues use the same repository, common DTO files often cause conflict problems in repository files. Therefore, there are cases where you have to manually resolve conflict problems in code merge or Pull Request.</p>`,5),g={href:"https://www.npmjs.com/package/dts-bundle-generator",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"dts-bundle-generator",-1),f=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// route.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CommonProps<span class="token punctuation">,</span> CommonName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token keyword">extends</span> <span class="token class-name">CommonProps</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> CommonName
<span class="token punctuation">}</span>

<span class="token comment">// common.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CommonProps</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> type CommonName <span class="token operator">=</span> string<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you have the above file and run the <code>dts-bundle-generator -o bundle.d.ts ./route.ts</code> command, the bundled file is created as follows.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Generated by dts-bundle-generator v8.0.1</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CommonProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> type CommonName <span class="token operator">=</span> string<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token keyword">extends</span> <span class="token class-name">CommonProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> CommonName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2><p>Finally, TypeScript code generated using open source may differ from the coding rules of the project. This problem can be easily solved by using the eslint or prettier set in the current project when automatically generating the DTO file of Swagger.</p>`,5);function k(v,y){const s=i("ExternalLinkIcon");return r(),c("div",null,[p,e("p",null,[n("The DTO of Swagger document can be automatically generated as TypeScript file of the project using "),e("a",d,[u,t(s)]),n(". In the early introduction, it was difficult to identify the added/modified DTO because the DTO was managed in a single file and Git diff increased.")]),m,e("p",null,[n("To solve this problem, we use "),e("a",g,[h,t(s)]),n(" to bundle DTO files. Bundling works as follows.")]),f])}const _=o(l,[["render",k],["__file","swagger-dto-automation.html.vue"]]);export{_ as default};