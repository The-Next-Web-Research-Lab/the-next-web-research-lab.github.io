import{_ as p,r as e,o,c,a as n,b as s,d as t,e as l}from"./app-f52d936f.js";const u={},i=n("h1",{id:"배터리-상태-조회",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#배터리-상태-조회","aria-hidden":"true"},"#"),s(" 배터리 상태 조회")],-1),r=n("p",null,"navigator.getBattery를 사용해서 배터리의 충전중 상태와 배터리량과 충전까지 남은 시간을 조회할 수 있습니다.",-1),k=n("h2",{id:"브라우저-지원-범위",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#브라우저-지원-범위","aria-hidden":"true"},"#"),s(" 브라우저 지원 범위")],-1),d=n("li",null,"Chrome / Edge / Opera / Android 에서 지원한다.",-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API#browser_compatibility",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"코드-예제",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#코드-예제","aria-hidden":"true"},"#"),s(" 코드 예제")],-1),g={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/UIComponent/Boilerplate.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://the-next-web-research-lab.github.io/docs/next-web-research/WebApis/battery.html",target:"_blank",rel:"noopener noreferrer"},y=l(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-full h-full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>React<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.tailwindcss.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@18/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@18/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@babel/standalone/babel.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-full h-full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-full h-full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> <span class="token function-variable function">MyApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>batteryStatus<span class="token punctuation">,</span> setBatteryStatus<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">charging</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chargingTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dischargingTime</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> batteryManagerRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">EVENT_LIST</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;chargingchange&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;levelchange&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;chargingtimechange&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dischargingtimechange&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> onChangeBattery <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>batteryManagerRef<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span>
        charging<span class="token punctuation">,</span>
        level<span class="token punctuation">,</span>
        chargingTime<span class="token punctuation">,</span>
        dischargingTime<span class="token punctuation">,</span>
      <span class="token punctuation">}</span> <span class="token operator">=</span> batteryManagerRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>

      <span class="token function">setBatteryStatus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        charging<span class="token punctuation">,</span>
        level<span class="token punctuation">,</span>
        chargingTime<span class="token punctuation">,</span>
        dischargingTime<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> addEventListener <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>batteryManagerRef<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

      <span class="token constant">EVENT_LIST</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">eventName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        batteryManagerRef
          <span class="token punctuation">.</span>current
          <span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> onChangeBattery<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> removeEventListener <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>batteryManagerRef<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

      <span class="token constant">EVENT_LIST</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">eventName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        batteryManagerRef
          <span class="token punctuation">.</span>current
          <span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> onChangeBattery<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span><span class="token function">getBattery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">battery</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          batteryManagerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> battery<span class="token punctuation">;</span>

          <span class="token function">onChangeBattery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> removeEventListener<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;h-full w-full text-xl text-center flex flex-col gap-y-5 pt-5&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>충전중 상태<span class="token operator">:</span> <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span>batteryStatus<span class="token punctuation">.</span>charging <span class="token operator">?</span> <span class="token string">&quot;Yes&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;No&quot;</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>베터리량<span class="token operator">:</span> <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span>batteryStatus<span class="token punctuation">.</span>level <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token number">100</span><span class="token operator">%</span> 충전까지 남은 시간<span class="token operator">:</span> <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span>batteryStatus<span class="token punctuation">.</span>chargingTime<span class="token punctuation">}</span> seconds<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>남은 베터리 사용 시간<span class="token operator">:</span> <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span>batteryStatus<span class="token punctuation">.</span>dischargingTime<span class="token punctuation">}</span> seconds<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  ReactDOM
    <span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyApp <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function q(_,w){const a=e("ExternalLinkIcon");return o(),c("div",null,[i,r,k,n("ul",null,[d,n("li",null,[n("a",v,[s("Browser compatibility"),t(a)])])]),m,n("div",g,[b,n("p",null,[n("a",h,[s("6장 코드 스니펫 > Boilerplate"),t(a)]),s(" 코드를 기반으로 데모가 제작되었습니다.")])]),n("p",null,[n("a",f,[s("데모보기"),t(a)])]),y])}const E=p(u,[["render",q],["__file","battery.html.vue"]]);export{E as default};