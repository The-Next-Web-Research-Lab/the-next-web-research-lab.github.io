import{_ as e,c as t,o,a3 as s}from"./chunks/framework.9Buaa5aL.js";const g=JSON.parse('{"title":"Save costs with commit message rules","description":"","frontmatter":{},"headers":[],"relativePath":"en/essay/commit-message.md","filePath":"en/essay/commit-message.md"}'),a={name:"en/essay/commit-message.md"},i=s('<h1 id="save-costs-with-commit-message-rules" tabindex="-1">Save costs with commit message rules <a class="header-anchor" href="#save-costs-with-commit-message-rules" aria-label="Permalink to &quot;Save costs with commit message rules&quot;">​</a></h1><h2 id="introduction-what-is-the-cost-that-developers-talk-about" tabindex="-1">Introduction: What is the cost that developers talk about? <a class="header-anchor" href="#introduction-what-is-the-cost-that-developers-talk-about" aria-label="Permalink to &quot;Introduction: What is the cost that developers talk about?&quot;">​</a></h2><p>Sometimes when collaborating, we talk about costs such as &quot;This is a costly task&quot; or &quot;This way we can save costs&quot;. Here, the cost means the developer&#39;s time usage, and one of the most common costs in application development is the developer&#39;s labor cost, so we often talk about costs in this way.</p><p>The developer&#39;s labor cost can be estimated at about 200,000 won per day depending on the case, and if you work 8 hours a day, it is 25,000 won per hour. If you waste 30 minutes due to inefficient work, you lose about 12,500 won. Although I get paid, I feel sorry to use it carelessly when I convert time to money, so I tried to work as efficiently as possible.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note: In fact, the cost of developers used by companies includes not only labor costs but also other costs such as office space, welfare, and insurance. Therefore, more costs are incurred than expected.</p></div><h2 id="benefits-of-using-commit-message-rules" tabindex="-1">Benefits of using commit message rules <a class="header-anchor" href="#benefits-of-using-commit-message-rules" aria-label="Permalink to &quot;Benefits of using commit message rules&quot;">​</a></h2><h3 id="the-cost-of-checking-the-code-status-is-reduced" tabindex="-1">The cost of checking the code status is reduced <a class="header-anchor" href="#the-cost-of-checking-the-code-status-is-reduced" aria-label="Permalink to &quot;The cost of checking the code status is reduced&quot;">​</a></h3><p>The commit message helps you to check the status of the source code to be deployed with just a message. If you express bug fixes, refactoring, etc. in the commit message, you can check whether it is something that should not be deployed or something that needs to be checked more carefully before deployment.</p><p>So the communication and verification costs are reduced, for example, when cross-checking before deployment, you can capture the commit log and request confirmation only to the colleagues in the log via messenger. The colleague can see the log and see if they need to check it directly or if it is not necessary.</p><h3 id="the-cost-of-writing-release-notes-is-reduced" tabindex="-1">The cost of writing release notes is reduced <a class="header-anchor" href="#the-cost-of-writing-release-notes-is-reduced" aria-label="Permalink to &quot;The cost of writing release notes is reduced&quot;">​</a></h3><p>If the commit message is unified, it also helps when deploying the library. When deploying the library, we often write release notes, and we write release notes by dividing them into headers such as bug fixes, feature additions, and refactoring. If it is written in the commit message, you can write the release note with just a message, and even automate it.</p><h2 id="how-to-write-commit-message-rules" tabindex="-1">How to write commit message rules <a class="header-anchor" href="#how-to-write-commit-message-rules" aria-label="Permalink to &quot;How to write commit message rules&quot;">​</a></h2><p>Basically, the form of the commit message is <code>[prefix]: [message]</code>.</p><p><code>[message]</code> summarizes the current commit code in one line. If the description of the code is difficult or you need to include a lot of content, you need to commit more frequently. The more often you commit, the more it helps with context switching and code rollback.</p><p><code>[prefix]</code> uses the following:</p><ul><li><code>feat</code> is used when adding a feature.</li><li><code>fix</code> is used when fixing a bug.</li><li><code>refactor</code> is used when refactoring without changing the function.</li><li><code>chore</code> is used when adding a package to <code>package.json</code> or modifying a configuration file.</li><li><code>docs</code> is used when simply writing comments or markdown.</li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>You can see more rich explanations and information in addition to what is introduced here by referring to the link below. <a href="https://udacity.github.io/git-styleguide/" target="_blank" rel="noreferrer">https://udacity.github.io/git-styleguide/</a></p>',18),c=[i];function n(r,h,d,l,u,m){return o(),t("div",null,c)}const p=e(a,[["render",n]]);export{g as __pageData,p as default};
