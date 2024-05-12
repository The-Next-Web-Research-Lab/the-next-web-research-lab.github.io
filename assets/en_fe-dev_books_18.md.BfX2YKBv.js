import{_ as e,c as i,o as t,a3 as n}from"./chunks/framework.9Buaa5aL.js";const g=JSON.parse('{"title":"Clean Software","description":"","frontmatter":{"title":"Clean Software"},"headers":[],"relativePath":"en/fe-dev/books/18.md","filePath":"en/fe-dev/books/18.md"}'),a={name:"en/fe-dev/books/18.md"},o=n('<h1 id="book-review-series-clean-software" tabindex="-1">Book Review Series - Clean Software <a class="header-anchor" href="#book-review-series-clean-software" aria-label="Permalink to &quot;Book Review Series - Clean Software&quot;">​</a></h1><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p>『Clean Software』 | Robert C. Martin / Lee Yong-won, Kim Jung-min, Jung Ji-ho (trans.) | Jpub | May 15, 2017</p><h2 id="one-line-review" tabindex="-1">One-line review <a class="header-anchor" href="#one-line-review" aria-label="Permalink to &quot;One-line review&quot;">​</a></h2><p>I recommend this book to developers who are starting to design for the first time.</p><h2 id="agile-design" tabindex="-1">Agile Design <a class="header-anchor" href="#agile-design" aria-label="Permalink to &quot;Agile Design&quot;">​</a></h2><h3 id="smells-of-design" tabindex="-1">Smells of Design <a class="header-anchor" href="#smells-of-design" aria-label="Permalink to &quot;Smells of Design&quot;">​</a></h3><p>You can tell that software needs to be redesigned if you feel the following things about the software:</p><ul><li><strong>Rigidity</strong>: When it is difficult to distinguish components that can be reused in other systems</li><li><strong>Fragility</strong>: When changing the system requires a lot of changes to other parts of the system</li><li><strong>Immobility</strong>: When changing the system breaks parts that have nothing to do with the concept</li><li><strong>Viscosity</strong>: When it is difficult to maintain the design when changes occur and it is difficult to do the right thing</li><li><strong>Needless Complexity</strong>: When the design contains something that is not needed at the current point</li><li><strong>Needless Repetition</strong>: When the design contains repetitive structures that can be integrated into a single abstract concept</li><li><strong>Opacity</strong>: When it is difficult to understand and does not express the intention well</li></ul><h3 id="principles" tabindex="-1">Principles <a class="header-anchor" href="#principles" aria-label="Permalink to &quot;Principles&quot;">​</a></h3><h4 id="single-responsibility-principle-srp" tabindex="-1">Single Responsibility Principle (SRP) <a class="header-anchor" href="#single-responsibility-principle-srp" aria-label="Permalink to &quot;Single Responsibility Principle (SRP)&quot;">​</a></h4><ul><li>A class should only be modified for one reason</li><li>Use <strong>Facade</strong> or <strong>Proxy</strong> patterns to separate responsibilities</li></ul><h4 id="open-closed-principle-ocp" tabindex="-1">Open Closed Principle (OCP) <a class="header-anchor" href="#open-closed-principle-ocp" aria-label="Permalink to &quot;Open Closed Principle (OCP)&quot;">​</a></h4><ul><li>Classes should be open to extension and closed to modification</li></ul><h4 id="liskov-substitution-principle-lsp" tabindex="-1">Liskov Substitution Principle (LSP) <a class="header-anchor" href="#liskov-substitution-principle-lsp" aria-label="Permalink to &quot;Liskov Substitution Principle (LSP)&quot;">​</a></h4><ul><li>Subclasses should be substitutable for base classes</li></ul><h4 id="interface-segregation-principle-isp" tabindex="-1">Interface Segregation Principle (ISP) <a class="header-anchor" href="#interface-segregation-principle-isp" aria-label="Permalink to &quot;Interface Segregation Principle (ISP)&quot;">​</a></h4><ul><li>Do not call the methods of the class directly, but create and use your own interface</li></ul><h4 id="dependency-inversion-principle-dip" tabindex="-1">Dependency Inversion Principle (DIP) <a class="header-anchor" href="#dependency-inversion-principle-dip" aria-label="Permalink to &quot;Dependency Inversion Principle (DIP)&quot;">​</a></h4><ul><li>Upper/lower relationship, implementation should depend on abstraction, and abstraction should not depend on implementation</li></ul><h3 id="test-code" tabindex="-1">Test Code <a class="header-anchor" href="#test-code" aria-label="Permalink to &quot;Test Code&quot;">​</a></h3><p>How to make clean test code? Three things are needed. Readability, readability, readability. Perhaps readability is more important for test code than for actual code. To improve readability in test code, as with any code, clarity, simplicity, and rich expressiveness are needed. Test code should express a lot with minimal expression.</p><p>Using the convention of given-when-then makes the test code easier to read. But unfortunately, separating the tests creates a lot of duplicate code. So the best rule is &quot;minimize the number of assert statements per concept&quot; and &quot;test only one concept per test function&quot;.</p><h4 id="f-i-r-s-t" tabindex="-1">F.I.R.S.T. <a class="header-anchor" href="#f-i-r-s-t" aria-label="Permalink to &quot;F.I.R.S.T.&quot;">​</a></h4><ul><li>Fast: Tests should be fast.</li><li>Independent: Each test should not depend on each other.</li><li>Repeatable: Tests should be repeatable in any environment.</li><li>Self-Validating: Tests are either success or failure.</li><li>Timely: Tests should be written in a timely manner.</li></ul>',25),s=[o];function r(l,c,d,h,p,u){return t(),i("div",null,s)}const b=e(a,[["render",r]]);export{g as __pageData,b as default};
