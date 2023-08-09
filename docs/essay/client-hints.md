# Client Hints로 클린 하게 브라우저 분기하기
## User-Agent의 문제점
[User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)는 
브라우저를 구분할 때 사용하곤 합니다. 하지만 아래와 같이 Chromium 기반 브라우저에서 `window.navigator.userAgent`로 User-Agent를 조회하면 동일한 문자열을 볼 수 있습니다.
```
// Chrome
Mozilla/5.0 (X11; Linux x86_64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/51.0.2704.103 
Safari/537.36

// Opera
Mozilla/5.0 (X11; Linux x86_64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/51.0.2704.106 
Safari/537.36 
OPR/38.0.2220.41

// Edge
Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/91.0.4472.124 
Safari/537.36 
Edg/91.0.864.59
```

User-Agent에서 Chrome 브라우저를 구분하려면 어떻게 해야 할까요?
OPR, Edg가 포함되지 않으면 Chrome으로 구분 가능할 것 같지만 Chromium 기반의 다른 브라우저에서 접근하면 이 방식은 버그를 유발할 수 있습니다.

```js
const userAgent = window.navigator.userAgent;
const isEdge = userAgent.includes("Edg");
const isOpera = userAgent.includes("OPR");
// Chrome이 아닌 Edge, Opara 이외 Chromium 기반 브라우저에서 항상 true
const isChrome = userAgent.includes("Chrome") && !isEdge && !isOpera;
```

## Client Hints 사용하기
Chromium 기반의 브라우저를 명확히 구분하기 위해서는 [Client Hints](https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API)을 활용해야 합니다. Client Hints는 User-Agent의 오용을 방지하기 위해 만들어졌고, 브라우저에서 문자열을 전달합니다.

Client Hints는 `window.navigator.userAgentData.brands`를 사용해서 조회할 수 있습니다.
Chromium 기반 브라우저에서 Client Hints를 조회하면 브라우저별로 다른 문자열이 포함된 것을 확인할 수 있습니다.

```
// Chrome
[
    {
        "brand": "Not/A)Brand",
        "version": "99"
    },
    {
        "brand": "Google Chrome",
        "version": "115"
    },
    {
        "brand": "Chromium",
        "version": "115"
    }
]

// Opera
[
    {
        "brand": "Not/A)Brand",
        "version": "99"
    },
    {
        "brand": "Opera",
        "version": "101"
    },
    {
        "brand": "Chromium",
        "version": "115"
    }
]

// Edge
[
    {
        "brand": "Not/A)Brand",
        "version": "99"
    },
    {
        "brand": "Microsoft Edge",
        "version": "115"
    },
    {
        "brand": "Chromium",
        "version": "115"
    }
]
```

위와 같이 브라우저의 문자열을 명확히 구분할 수 있습니다. 때문에 User-Agent와 다르게 아래와 같이 버그 없는 코드를 작성할 수 있습니다.
```js
const userAgentBrands = window.navigator
  .userAgentData.brands.map(({brand}) => brand);
const isEdge = userAgentBrands.includes("Microsoft Edge");
const isOpera = userAgentBrands.includes("Opera");
const isChrome = userAgentBrands.includes("Google Chrome");
```