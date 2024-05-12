import{_ as e,c as t,o as a,a3 as n}from"./chunks/framework.9Buaa5aL.js";const f=JSON.parse('{"title":"Development Schedule Estimation","description":"","frontmatter":{"title":"Development Schedule Estimation"},"headers":[],"relativePath":"en/fe-dev/project-management/estimation.md","filePath":"en/fe-dev/project-management/estimation.md"}'),s={name:"en/fe-dev/project-management/estimation.md"},o=n(`<h1 id="development-schedule-estimation" tabindex="-1">Development Schedule Estimation <a class="header-anchor" href="#development-schedule-estimation" aria-label="Permalink to &quot;Development Schedule Estimation&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>There are many backlogs that need to be added or improved during service operation, but it is difficult to implement them all in reality. Therefore, we needed to adjust the work such as &quot;what features to put in the sprint and deploy&quot; and &quot;how to do the large volume of features and the deployment time&quot; among a series of sprints.</p><p>Before this work adjustment, the first thing we need to do is to estimate the schedule that takes for development. The schedule estimation is based on the agile methodology, and there are various methods such as story points and planning poker, but we would like to introduce the easiest method to introduce based on experience.</p><h2 id="terminology" tabindex="-1">Terminology <a class="header-anchor" href="#terminology" aria-label="Permalink to &quot;Terminology&quot;">​</a></h2><ul><li>MD: Man Day abbreviation, meaning that one person worked for a day. That is, 8 hours.</li></ul><h2 id="overall-process-of-schedule-estimation" tabindex="-1">Overall process of schedule estimation <a class="header-anchor" href="#overall-process-of-schedule-estimation" aria-label="Permalink to &quot;Overall process of schedule estimation&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>User Story =&gt; Feature List =&gt; Estimation =&gt; Buffer</span></span></code></pre></div><p>The start of the schedule estimation process is to write a User Story by referring to the planning document, and to write a Feature List based on the User Story. And through the Feature List, we estimate the MD based on experience and add Buffer depending on the situation to finish the schedule estimation.</p><h2 id="user-story" tabindex="-1">User Story <a class="header-anchor" href="#user-story" aria-label="Permalink to &quot;User Story&quot;">​</a></h2><p>User Story is a list of who, what, and why they do it in the form of &quot;~can do ~ if they do ~&quot; from the user&#39;s point of view by looking at the planning document.</p><h3 id="user-story-example" tabindex="-1">User Story example <a class="header-anchor" href="#user-story-example" aria-label="Permalink to &quot;User Story example&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[US] If you press pay, you can see the payment page.</span></span>
<span class="line"><span>[US] On the payment page, you can see the product name, price, shipping address, and check button to agree to the terms and conditions.</span></span></code></pre></div><p>When you write a User Story, you can understand the product more easily and focus on the business value, and it helps to select the development priority. And unclear parts are seen and a list of things to check is created.</p><p>When writing a User Story, be careful to write each User Story by looking at the planning document carefully from the perspective of the service user, not the developer. And it is good to write even if it is an existing function. Then, instead of the planning document, you can understand the service function with only User Story.</p><h2 id="feature-list" tabindex="-1">Feature List <a class="header-anchor" href="#feature-list" aria-label="Permalink to &quot;Feature List&quot;">​</a></h2><p>Feature List is a list of features that need to be implemented to satisfy one User Story. Usually, because we collaborated with publishers and backend developers, the category of Feature was expressed as &quot;markup&quot;, &quot;FE&quot;, &quot;API&quot;. Feature List is good for extracting good features as more people review.</p><h3 id="feature-list-example" tabindex="-1">Feature List example <a class="header-anchor" href="#feature-list-example" aria-label="Permalink to &quot;Feature List example&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[US] If you press pay, you can see the payment page.</span></span>
<span class="line"><span>- [Markup] Payment page markup</span></span>
<span class="line"><span>- [FE] Payment button connection</span></span>
<span class="line"><span>[US] On the payment page, you can see the product name, price, shipping address, and check button to agree to the terms and conditions.</span></span>
<span class="line"><span>- [API] Payment API</span></span>
<span class="line"><span>- [FE] Form validation work</span></span></code></pre></div><p>It is good to keep writing the feature list even if it looks like a feature that has been developed before. When everything is written, compare it with the product and distinguish only the features that are actually needed.</p><p>The last thing to do when writing a Feature List is to group the features that can be reused. Grouping makes it easier to shorten development time and generalize for reuse.</p><h2 id="estimation" tabindex="-1">Estimation <a class="header-anchor" href="#estimation" aria-label="Permalink to &quot;Estimation&quot;">​</a></h2><p>In Estimation, we estimate the schedule for each Feature. It would be good if it is 0.25~2MD per Feature, but it varies depending on the experience and competence of each individual. Estimation is just an estimation, not necessarily accurate, and if necessary, adjust it by modifying the Feature List.</p><h3 id="estimation-example" tabindex="-1">Estimation example <a class="header-anchor" href="#estimation-example" aria-label="Permalink to &quot;Estimation example&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[US] If you press pay, you can see the payment page.</span></span>
<span class="line"><span>- [0.25MD][Markup] Payment page markup</span></span>
<span class="line"><span>- [0.25MD][FE] Payment button connection</span></span>
<span class="line"><span>[US] On the payment page, you can see the product name, price, shipping address, and check button to agree to the terms and conditions.</span></span>
<span class="line"><span>- [0.5MD][API] Payment API</span></span>
<span class="line"><span>- [1MD][FE] Form validation work</span></span></code></pre></div><h2 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h2><p>Depending on the project situation, add a buffer of about 2 times, such as code review, test writing, etc. You can see the effect of the buffer period to prevent schedule delays.</p><h2 id="note-expected-effects-obtained-through-schedule-estimation" tabindex="-1">Note: Expected effects obtained through schedule estimation <a class="header-anchor" href="#note-expected-effects-obtained-through-schedule-estimation" aria-label="Permalink to &quot;Note: Expected effects obtained through schedule estimation&quot;">​</a></h2><ol><li>Based on the schedule estimation, smooth communication with the collaboration partners on schedule adjustment is possible.</li><li>Flexibility of schedule adjustment by adjusting the period or Feature is created.</li><li>Development progress can be visualized.</li><li>You can measure the time it takes to work, and you can know how productive you are in the given time.</li></ol><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>When I received this method from a senior developer at Kakao, I didn&#39;t know if it was an effective method. But after several schedule estimations and trial and error, I was able to find a method that suits me and my team. If you want to introduce a systematic schedule estimation based on theory rather than a simple hit-and-miss schedule estimation, I think it would be helpful to refer to the agile methodology or this article.</p>`,31),i=[o];function r(l,d,h,p,c,u){return a(),t("div",null,i)}const g=e(s,[["render",r]]);export{f as __pageData,g as default};
