export const themeData = JSON.parse("{\"colorMode\":\"dark\",\"colorModeSwitch\":false,\"navbar\":[{\"text\":\"소개\",\"link\":\"/intro/\"},{\"text\":\"선행개발\",\"link\":\"/next-web-research/\"},{\"text\":\"실용주의 FE Dev\",\"children\":[{\"text\":\"0장 소개\",\"link\":\"/fe-dev/intro\"},{\"text\":\"1장 좋은코드\",\"link\":\"/fe-dev/good-code\"},{\"text\":\"2장 리팩터링\",\"link\":\"/fe-dev/refactoring\"},{\"text\":\"3장 프로젝트 관리\",\"link\":\"/fe-dev/project-management\"},{\"text\":\"4장 React / Vue / Angular\",\"link\":\"/fe-dev/framework\"},{\"text\":\"5장 명령형 / 객체지향 / 함수형\",\"link\":\"/fe-dev/paradigm\"},{\"text\":\"6장 코드 스니펫\",\"link\":\"/fe-dev/code-snippets\"},{\"text\":\"7장 펫 프로젝트\",\"link\":\"/fe-dev/pet-project\"},{\"text\":\"8장 디자인 패턴\",\"link\":\"/fe-dev/design-patterns\"}]},{\"text\":\"에세이\",\"link\":\"/essay/\"}],\"sidebar\":{\"/fe-dev/pet-project\":[\"/fe-dev/pet-project/\",{\"text\":\"Vue\",\"collapsible\":true,\"children\":[\"/fe-dev/pet-project/vue2-part/\",\"/fe-dev/pet-project/vue2-component/\",\"/fe-dev/pet-project/vuex/\"]},{\"text\":\"Helper\",\"collapsible\":true,\"children\":[\"/fe-dev/pet-project/momentjs/\",\"/fe-dev/pet-project/immerjs/\",\"/fe-dev/pet-project/axios/\"]},{\"text\":\"Component\",\"collapsible\":true,\"children\":[\"/fe-dev/pet-project/component/2020-08-component/\",\"/fe-dev/pet-project/component/vuex-feature/\",\"/fe-dev/pet-project/component/recoil-feature/\",\"/fe-dev/pet-project/component/fragment-dom/\",\"/fe-dev/pet-project/component/simple-dom/\",\"/fe-dev/pet-project/component/simple-component/\"]},{\"text\":\"MVC\",\"collapsible\":true,\"children\":[\"/fe-dev/pet-project/mvc/2021-07-mvc/\",\"/fe-dev/pet-project/mvc/2020-08-mvc/\",\"/fe-dev/pet-project/mvc/2021-07-mvc-class/\",\"/fe-dev/pet-project/mvc/2020-08-mvc-class/\",\"/fe-dev/pet-project/mvc/2020-08-mvc-function/\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
