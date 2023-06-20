<template><div><h2 id="mvc란" tabindex="-1"><a class="header-anchor" href="#mvc란" aria-hidden="true">#</a> MVC란</h2>
<p>MVC는 Model-View-Controller의 약자다.</p>
<h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h3>
<ul>
<li>순수한 데이터 원형이다.</li>
<li>데이터 변경을 전파한다.</li>
</ul>
<h3 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h3>
<ul>
<li>GUI 역할을 한다.</li>
<li>Model 기반으로 렌더링한다.</li>
<li>사용자 인터렉션 처리를 Controller에게 위임한다.</li>
</ul>
<h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h3>
<ul>
<li>Model과 View를 생성한다.</li>
<li>Model의 옵저버 역할을 한다.</li>
<li>Model에게 전달받은 데이터를 뷰에 전달한다.</li>
<li>View 사용자 인터렉션 처리를 한다.</li>
</ul>
</div></template>


