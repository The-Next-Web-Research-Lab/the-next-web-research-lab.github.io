import{_ as a,p as e,q as r,a1 as h}from"./framework-96b046e1.js";const n={},d=h('<h1 id="리펙토링-정의와-결과" tabindex="-1"><a class="header-anchor" href="#리펙토링-정의와-결과" aria-hidden="true">#</a> 리펙토링 정의와 결과</h1><blockquote><p>2019년 5월 26일에 마틴 파울러의 리팩토링 책 일부를 정리한 포스트입니다.</p></blockquote><h3 id="리팩토링" tabindex="-1"><a class="header-anchor" href="#리팩토링" aria-hidden="true">#</a> 리팩토링</h3><p><strong>리팩토링</strong>은 겉으로 드러나는 기능은 그대로 둔 채, 알아보기 쉽고 수정하기 간편하게 소프트웨어 내부를 수정하는 작업이다. 소프트웨어를 더 이해하기 쉽고 수정하기 쉽게 만들어 겉으로 드러나는 기능에 거의 또는 아예 영향을 주지 않으면서 소프트웨어의 각종 기능을 추가할 수 있다. 리팩토링 수행 후에 겉으로 드러나는 기능에 영향을 주지 않기 때문에 사용자는 소프트웨어의 변화를 눈치채지 못한다.</p><h4 id="리팩토링과-성능-최적화" tabindex="-1"><a class="header-anchor" href="#리팩토링과-성능-최적화" aria-hidden="true">#</a> 리팩토링과 성능 최적화</h4><p>리팩토링은 <strong>성능 최적화와 상반</strong>되는 데, 같은 점은 수행 후에 기능이 변경되지 않는 것이다. 다른 점은 성능 최적화는 성능 향상을 위해 불가피하게 필요한 성능을 내기 위해 <strong>코드를 파악하기 더 어려워질 때가 많다</strong>.</p><h4 id="리팩토링과-기능추가" tabindex="-1"><a class="header-anchor" href="#리팩토링과-기능추가" aria-hidden="true">#</a> 리팩토링과 기능추가</h4><p>리팩토링과 <strong>기능 추가는 동시에 진행되면 안된다</strong>. 동시에 진행하게 된다면 이슈 발생시 리팩토링으로 인한 이슈인지 <strong>기능상의 이슈인지 파악하기 어렵기 때문</strong>이다. 기능 추가시에 테스트 코드를 같이 추가하여 추후에 리팩토링 시 기능상의 이슈가 발생하지 않도록 해야 한다.</p><h3 id="리팩토링-결과" tabindex="-1"><a class="header-anchor" href="#리팩토링-결과" aria-hidden="true">#</a> 리팩토링 결과</h3><h4 id="코드-설계가-깔끔해짐" tabindex="-1"><a class="header-anchor" href="#코드-설계가-깔끔해짐" aria-hidden="true">#</a> 코드 설계가 깔끔해짐</h4><p>소프트웨어 설계 개선 단기적인 목적 때문에 코드를 수정하거나 코드의 설계를 완벽히 이해하지 않고 코드를 수정하면, 코드 구조가 뒤죽박죽되어 그 코드를 보고 설계를 파악하기가 어려워져 프로그램 설계가 점점 노후 된다. 정기적으로 리팩토링을 실시하면 코드 설계가 깔끔해진다.</p><h4 id="이해가-쉬워짐" tabindex="-1"><a class="header-anchor" href="#이해가-쉬워짐" aria-hidden="true">#</a> 이해가 쉬워짐</h4><p>기능을 추가하면서 설계한 것들을 모두 기억할 수 없기 때문에 코드를 깔끔하게 만들지 않으면 복잡한 내용을 이해할 수 없다.</p><h4 id="버그-찾기-쉬워짐" tabindex="-1"><a class="header-anchor" href="#버그-찾기-쉬워짐" aria-hidden="true">#</a> 버그 찾기 쉬워짐</h4><p>코드 리팩토링하면 구조가 명료하게 만들어서 디버그 시 쉽게 버그를 찾을 수 있다.</p><h4 id="프로그래밍-속도-빨라짐" tabindex="-1"><a class="header-anchor" href="#프로그래밍-속도-빨라짐" aria-hidden="true">#</a> 프로그래밍 속도 빨라짐</h4><p>리팩토링을 하지 않으면 소프트웨어 개발이 진행되면서 개발 속도가 현저히 줄어들게 된다. 설계가 정돈되지 않으면 기능 추가 시 시간이 오래 걸릴 수 밖에 없으며, 버그 찾기에 많은 시간을 낭비하게 된다. 프로그래밍 속도를 빠르게 하려면 깔끔한 설계를 유지해 설계가 노후화되지 않게 해야 한다.</p>',17),t=[d];function i(s,o){return e(),r("div",null,t)}const l=a(n,[["render",i],["__file","refactoring-meaning-and-result.html.vue"]]);export{l as default};
