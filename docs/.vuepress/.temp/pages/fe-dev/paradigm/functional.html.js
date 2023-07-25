export const data = JSON.parse("{\"key\":\"v-1ad120be\",\"path\":\"/fe-dev/paradigm/functional.html\",\"title\":\"함수형 프로그래밍 정리\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"함수형 프로그래밍 정리\",\"description\":\"2019년 6월 15일 정리한 포스트입니다. 함수형은 함수를 이해하는 게 절반이다 함수형에서 이야기하는 함수는 수학에서 다루는 함수이다. 수학에서 다루는 함수는 입력값을 계산하고 출력값을 반환한다. 그리고 입력값은 항상 같은 출력값에 대응된다. 함수형에서 이야기하는 함수도 동일하게 동작한다. 함수는 인자라는 입력값을...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/paradigm/functional.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"함수형 프로그래밍 정리\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"2019년 6월 15일 정리한 포스트입니다. 함수형은 함수를 이해하는 게 절반이다 함수형에서 이야기하는 함수는 수학에서 다루는 함수이다. 수학에서 다루는 함수는 입력값을 계산하고 출력값을 반환한다. 그리고 입력값은 항상 같은 출력값에 대응된다. 함수형에서 이야기하는 함수도 동일하게 동작한다. 함수는 인자라는 입력값을...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/white_logo.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-26T07:28:10.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"함수형 프로그래밍 정리\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-26T07:28:10.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"함수형 프로그래밍 정리\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/white_logo.png\\\"],\\\"dateModified\\\":\\\"2023-06-26T07:28:10.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"함수형은 함수를 이해하는 게 절반이다\",\"slug\":\"함수형은-함수를-이해하는-게-절반이다\",\"link\":\"#함수형은-함수를-이해하는-게-절반이다\",\"children\":[]},{\"level\":2,\"title\":\"함수란 무엇인가\",\"slug\":\"함수란-무엇인가\",\"link\":\"#함수란-무엇인가\",\"children\":[{\"level\":3,\"title\":\"인자와 반환값\",\"slug\":\"인자와-반환값\",\"link\":\"#인자와-반환값\",\"children\":[]},{\"level\":3,\"title\":\"프로시저와 함수\",\"slug\":\"프로시저와-함수\",\"link\":\"#프로시저와-함수\",\"children\":[]},{\"level\":3,\"title\":\"순수함수와 비순수함수\",\"slug\":\"순수함수와-비순수함수\",\"link\":\"#순수함수와-비순수함수\",\"children\":[]}]},{\"level\":2,\"title\":\"함수를 조립하기\",\"slug\":\"함수를-조립하기\",\"link\":\"#함수를-조립하기\",\"children\":[{\"level\":3,\"title\":\"함수로만 조립하기\",\"slug\":\"함수로만-조립하기\",\"link\":\"#함수로만-조립하기\",\"children\":[]},{\"level\":3,\"title\":\"Compose로 조립하기\",\"slug\":\"compose로-조립하기\",\"link\":\"#compose로-조립하기\",\"children\":[]},{\"level\":3,\"title\":\"Pipe로 조립히기\",\"slug\":\"pipe로-조립히기\",\"link\":\"#pipe로-조립히기\",\"children\":[]},{\"level\":3,\"title\":\"Compose와 Pipe 비교\",\"slug\":\"compose와-pipe-비교\",\"link\":\"#compose와-pipe-비교\",\"children\":[]}]},{\"level\":2,\"title\":\"함수로 만들수 있는 도구\",\"slug\":\"함수로-만들수-있는-도구\",\"link\":\"#함수로-만들수-있는-도구\",\"children\":[{\"level\":3,\"title\":\"클로저\",\"slug\":\"클로저\",\"link\":\"#클로저\",\"children\":[]},{\"level\":3,\"title\":\"커리\",\"slug\":\"커리\",\"link\":\"#커리\",\"children\":[]},{\"level\":3,\"title\":\"부분 적용\",\"slug\":\"부분-적용\",\"link\":\"#부분-적용\",\"children\":[]}]},{\"level\":2,\"title\":\"함수형의 본질은 무엇인가\",\"slug\":\"함수형의-본질은-무엇인가\",\"link\":\"#함수형의-본질은-무엇인가\",\"children\":[{\"level\":3,\"title\":\"일급함수\",\"slug\":\"일급함수\",\"link\":\"#일급함수\",\"children\":[]},{\"level\":3,\"title\":\"컨테이너 패턴\",\"slug\":\"컨테이너-패턴\",\"link\":\"#컨테이너-패턴\",\"children\":[]},{\"level\":3,\"title\":\"상태변화\",\"slug\":\"상태변화\",\"link\":\"#상태변화\",\"children\":[]}]},{\"level\":2,\"title\":\"그래서 함수형 프로그래밍은 어떻게 하는 걸까\",\"slug\":\"그래서-함수형-프로그래밍은-어떻게-하는-걸까\",\"link\":\"#그래서-함수형-프로그래밍은-어떻게-하는-걸까\",\"children\":[{\"level\":3,\"title\":\"수학적함수\",\"slug\":\"수학적함수\",\"link\":\"#수학적함수\",\"children\":[]},{\"level\":3,\"title\":\"모든 것을 함수로 생각\",\"slug\":\"모든-것을-함수로-생각\",\"link\":\"#모든-것을-함수로-생각\",\"children\":[]},{\"level\":3,\"title\":\"값 대신 함수를 사용\",\"slug\":\"값-대신-함수를-사용\",\"link\":\"#값-대신-함수를-사용\",\"children\":[]},{\"level\":3,\"title\":\"끝\",\"slug\":\"끝\",\"link\":\"#끝\",\"children\":[]}]}],\"git\":{\"updatedTime\":1687764490000},\"filePathRelative\":\"fe-dev/paradigm/functional.md\",\"autoDesc\":true}")
