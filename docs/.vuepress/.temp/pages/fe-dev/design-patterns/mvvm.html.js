export const data = JSON.parse("{\"key\":\"v-82c8f026\",\"path\":\"/fe-dev/design-patterns/mvvm.html\",\"title\":\"2019.07.27 MVVM 정리\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"2019.07.27 MVVM 정리\",\"description\":\"MVVM 정리 MVVM MVC에서 파생되는 패턴들은 모델과 뷰 사이에 무언가를 넣는 것이다. 뷰를 가상화하는 프록시를 가짐으로서 뷰와 모델간의 관계를 끊는 다. 모델의 데이터 형태가 뷰에게 의존이 생기기 때문에 모델의 변경이 필요할 때는 뷰까지 변경이 이뤄짐으로 변경을 할 때 비용이 많이 든다. 그래서 모델의 데이터 형태와 뷰 렌더링을 위한 데이터 형태를 분리하기 위해 객체를 만들어서 의존성을 해결한다. 뷰를 위한 데이터이기 때문에 뷰모델이라고 부른다. 뷰와 뷰모델은 양방향 바인딩이 이뤄진다. 뷰와 뷰모델은 변경이 되었을 때 서로 변경이 됬음을 알려준다.\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/design-patterns/mvvm.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2019.07.27 MVVM 정리\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"MVVM 정리 MVVM MVC에서 파생되는 패턴들은 모델과 뷰 사이에 무언가를 넣는 것이다. 뷰를 가상화하는 프록시를 가짐으로서 뷰와 모델간의 관계를 끊는 다. 모델의 데이터 형태가 뷰에게 의존이 생기기 때문에 모델의 변경이 필요할 때는 뷰까지 변경이 이뤄짐으로 변경을 할 때 비용이 많이 든다. 그래서 모델의 데이터 형태와 뷰 렌더링을 위한 데이터 형태를 분리하기 위해 객체를 만들어서 의존성을 해결한다. 뷰를 위한 데이터이기 때문에 뷰모델이라고 부른다. 뷰와 뷰모델은 양방향 바인딩이 이뤄진다. 뷰와 뷰모델은 변경이 되었을 때 서로 변경이 됬음을 알려준다.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"2019.07.27 MVVM 정리\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2019.07.27 MVVM 정리\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"MVVM\",\"slug\":\"mvvm\",\"link\":\"#mvvm\",\"children\":[]}],\"readingTime\":{\"minutes\":0.12,\"words\":35},\"filePathRelative\":\"fe-dev/design-patterns/mvvm.md\",\"excerpt\":\"<h1> MVVM 정리</h1>\\n<h2> MVVM</h2>\\n<p>MVC에서 파생되는 패턴들은 모델과 뷰 사이에 무언가를 넣는 것이다. 뷰를 가상화하는 프록시를 가짐으로서 뷰와 모델간의 관계를 끊는 다. 모델의 데이터 형태가 뷰에게 의존이 생기기 때문에 모델의 변경이 필요할 때는 뷰까지 변경이 이뤄짐으로 변경을 할 때 비용이 많이 든다. 그래서 모델의 데이터 형태와 뷰 렌더링을 위한 데이터 형태를 분리하기 위해 객체를 만들어서 의존성을 해결한다. 뷰를 위한 데이터이기 때문에 뷰모델이라고 부른다. 뷰와 뷰모델은 양방향 바인딩이 이뤄진다. 뷰와 뷰모델은 변경이 되었을 때 서로 변경이 됬음을 알려준다.</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
