export const data = JSON.parse("{\"key\":\"v-09632038\",\"path\":\"/fe-dev/my-page.html\",\"title\":\"MyPage\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"MyPage\",\"sidebar\":\"auto\"},\"headers\":[{\"level\":2,\"title\":\"MyPage\",\"slug\":\"mypage\",\"link\":\"#mypage\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"fe-dev/my-page.md\"}")

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
