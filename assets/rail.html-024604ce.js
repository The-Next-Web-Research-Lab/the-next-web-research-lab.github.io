import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as i,a as e,b as t,d as o,e as d}from"./app-83a91251.js";const h={},c=e("h1",{id:"rail-model-web-performance-optimization-basics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rail-model-web-performance-optimization-basics","aria-hidden":"true"},"#"),t(" RAIL Model - Web Performance Optimization Basics")],-1),l={href:"https://web.dev/rail/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.nngroup.com/articles/response-times-3-important-limits/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),u=e("p",null,"Response refers to responding to most inputs after they occur, such as button clicks and animation starts. Touch drag and scroll are part of Animation.",-1),f=e("p",null,"To make the user feel that the input starts and responds instantly, you need to respond within 100ms. To respond within 100ms, the JavaScript processing time for events related to the input must be within 50ms. If it is difficult to process within 50ms, it is better to provide a different response to the user first.",-1),w=e("h3",{id:"why-the-processing-time-is-only-50ms-when-you-need-to-respond-within-100ms",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-the-processing-time-is-only-50ms-when-you-need-to-respond-within-100ms","aria-hidden":"true"},"#"),t(" Why the processing time is only 50ms when you need to respond within 100ms")],-1),g={href:"https://static.googleusercontent.com/media/research.google.com/ko//pubs/archive/45361.pdf",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"Chrome browser limits Idle Time (idle time) to 50ms. Therefore, the input generated by the user can wait up to 50ms, so the input processing time is assumed to be 50ms.",-1),_=e("h2",{id:"animation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#animation","aria-hidden":"true"},"#"),t(" Animation")],-1),k=e("p",null,"Animation refers to things like visual animation, loading, scrolling, touch drag.",-1),y=e("p",null,"Since humans are proficient at motion tracking, to feel that the animation is smooth, the maximum time of the frame must respond within 16ms.",-1),v={href:"https://developers.google.com/web/fundamentals/performance/rendering",target:"_blank",rel:"noopener noreferrer"},x=d('<h2 id="idle" tabindex="-1"><a class="header-anchor" href="#idle" aria-hidden="true">#</a> Idle</h2><p>Idle means that the browser has no work to do. When Idle, data loading and user input responses occur, and if you don&#39;t have Idle, they can interfere.</p><h2 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> Load</h2><p>Load means completing the load of the site when the user accesses the web site. The factors that affect the load are network speed and latency, hardware (e.g., slow CPU), caching, JavaScript parsing, etc.</p><p>When the user first accesses the web site, it should be loaded within 5 seconds considering the mobile user device and slow network. When a subsequent load occurs when moving to another page, it is better to load within 2 seconds.</p><h3 id="user-s-performance-delay-experience-depending-on-network-status-and-hardware" tabindex="-1"><a class="header-anchor" href="#user-s-performance-delay-experience-depending-on-network-status-and-hardware" aria-hidden="true">#</a> User&#39;s performance delay experience depending on network status and hardware</h3><p>Users perceive performance delays differently depending on their network status and hardware. In a fast network and fast hardware state, it is familiar to load the web site within 1 second. However, in a slow network or mobile device, it takes longer, so you are used to waiting. Therefore, in a mobile environment, it is realistic to load within 5 seconds.</p>',7);function I(T,L){const n=a("ExternalLinkIcon");return r(),i("div",null,[c,e("p",null,[e("a",l,[t("RAIL"),o(n)]),t(" is a naming convention for the main tasks of a web site: Response, Animation, Idle, Load. RAIL helps you divide the user experience into key tasks and define performance goals for each one. The performance goals recommended by RAIL are based on "),e("a",m,[t("context and UX research on how users perceive delays"),o(n)]),t(".")]),p,u,f,w,e("blockquote",null,[e("p",null,[t("[1] "),e("a",g,[t("Idle Time Garbage Collection Scheduling > 4. Idle Task Scheduling"),o(n)])])]),b,_,k,y,e("p",null,[t("The maximum time of the frame is 16ms, but the browser needs about 6ms to render, so the frame processing time should be assumed to be 10ms. If it is difficult to respond within 16ms, refer to "),e("a",v,[t("rendering performance"),o(n)]),t(" to solve it.")]),x])}const S=s(h,[["render",I],["__file","rail.html.vue"]]);export{S as default};