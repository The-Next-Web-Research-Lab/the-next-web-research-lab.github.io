import{_ as e,c as t,o as s,a3 as a}from"./chunks/framework.COm4hYgr.js";const m=JSON.parse('{"title":"A Summary of Test Types on One Page","description":"","frontmatter":{"title":"A Summary of Test Types on One Page"},"headers":[],"relativePath":"en/fe-dev/refactoring/test-types.md","filePath":"en/fe-dev/refactoring/test-types.md"}'),r={name:"en/fe-dev/refactoring/test-types.md"},i=a('<h1 id="test-types" tabindex="-1">Test Types <a class="header-anchor" href="#test-types" aria-label="Permalink to &quot;Test Types&quot;">​</a></h1><h2 id="unit-test" tabindex="-1">Unit Test <a class="header-anchor" href="#unit-test" aria-label="Permalink to &quot;Unit Test&quot;">​</a></h2><p>Unit test is a method of verifying that a specific module of code works exactly as intended. You will write test cases for every function and method.</p><p>Ideally, each test case should be separated from each other, and this will help you to identify and solve problems quickly whenever code changes cause problems. Creating Mock Objects is also a good way to do this.</p><p>Unit tests are performed not only by developers but also by testers, and there are cases where testers write unit tests and developers develop accordingly.</p><h2 id="static-test" tabindex="-1">Static Test <a class="header-anchor" href="#static-test" aria-label="Permalink to &quot;Static Test&quot;">​</a></h2><p>Static test means analyzing software without running software. eslint, prettier, open source license verification, test coverage measurement, etc. are included in static test.</p><h2 id="integration-test" tabindex="-1">Integration Test <a class="header-anchor" href="#integration-test" aria-label="Permalink to &quot;Integration Test&quot;">​</a></h2><p>Integration test is a test that is composed of a larger unit than unit test. Specifically, it is to test everything in a state where all systems such as client, server, DB, etc. are completely integrated and built.</p><p>In integration test, you will judge whether each integrated module works as planned, whether there is no difference between the actual operation of the system and the original requirements, etc. You will check the performance time, file storage and processing ability, maximum load, recovery and restart ability, manual procedures, etc. It is classified as a kind of black box test that performs tests regardless of the knowledge of the internal implementation or design of the system.</p><h2 id="regression-test" tabindex="-1">Regression Test <a class="header-anchor" href="#regression-test" aria-label="Permalink to &quot;Regression Test&quot;">​</a></h2><p>All test methods that find bugs can be called regression tests, and regression tests are methods of checking whether the resolved bugs/issues are reproduced.</p>',12),o=[i];function n(l,c,d,h,p,u){return s(),t("div",null,o)}const g=e(r,[["render",n]]);export{m as __pageData,g as default};