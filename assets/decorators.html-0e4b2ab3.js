import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as s,b as n,d as e,e as r}from"./app-0d43d911.js";const l={},p=s("h1",{id:"javascript-decorators",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#javascript-decorators","aria-hidden":"true"},"#"),n(" JavaScript - Decorators")],-1),d=s("h2",{id:"decorators-proposal",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#decorators-proposal","aria-hidden":"true"},"#"),n(" Decorators Proposal")],-1),u={href:"https://github.com/tc39/proposal-decorators",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/erights/Orthogonal-Classes",target:"_blank",rel:"noopener noreferrer"},h={href:"https://onedrive.live.com/view.aspx?resid=A7BBCE1FC8EE16DB!442046&app=PowerPoint&authkey=!AEeXmhZASk50KjA",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tc39.github.io/proposal-class-fields/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/tc39/proposal-private-methods",target:"_blank",rel:"noopener noreferrer"},b=s("li",null,"Decorators are useful for adding functionality without modifying the code of already defined classes, functions, and variables.",-1),f=s("li",null,"It is used for memoization, access control, authentication, instrumentation, timing processing, logging, rate limiting, etc.",-1),_=s("h2",{id:"decorators-practicality",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#decorators-practicality","aria-hidden":"true"},"#"),n(" Decorators Practicality")],-1),g={href:"https://www.typescriptlang.org/docs/handbook/decorators.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.nestjs.com/controllers",target:"_blank",rel:"noopener noreferrer"},y={href:"https://angular.kr/guide/what-is-angular",target:"_blank",rel:"noopener noreferrer"},x=r(`<h3 id="code-usage-examples" tabindex="-1"><a class="header-anchor" href="#code-usage-examples" aria-hidden="true">#</a> Code Usage Examples</h3><ul><li><code>@defineElement</code>: Ability to create custom elements</li><li><code>@bound</code>: Debounce processing function</li><li><code>@observed</code>: A function that monitors the field and automatically calls when it changes.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">defineElement</span><span class="token punctuation">(</span><span class="token string">&#39;num-counter&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  @observed #x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  @bound
  <span class="token function">#clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#x<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#clicked<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @bound
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function E(C,j){const a=o("ExternalLinkIcon");return c(),i("div",null,[p,d,s("ul",null,[s("li",null,[n("Proposal defined in "),s("a",u,[n("tc39/proposal-decorators"),e(a)])]),s("li",null,[s("a",k,[n("Orthogonal Classes"),e(a)]),n("and "),s("a",h,[n("Class Evaluation Order"),e(a)]),n(" Based on the proposal, Decorators and "),s("a",m,[n("Class Field"),e(a)]),n(" and "),s("a",v,[n("Private methods"),e(a)]),n(" propose a combined vision of how to make them work together")]),b,f]),_,s("p",null,[n("Decorators are not available in JavaScript, but "),s("a",g,[n("Decorators in TypeScript"),e(a)]),n(" You can use it. That's why Node.js Framework "),s("a",w,[n("nestjs"),e(a)]),n(" and Front-end Framework "),s("a",y,[n("Angular"),e(a)]),n(" is officially in use.")]),x])}const B=t(l,[["render",E],["__file","decorators.html.vue"]]);export{B as default};
