# Cleanly branch browsers with Client Hints
## The problem with User-Agent
[User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) is often used to distinguish browsers. However, if you query User-Agent with `window.navigator.userAgent` in Chromium-based browsers, you will see the same string as below.
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

How do you distinguish Chrome browser from User-Agent?
It seems possible to distinguish Chrome if OPR and Edg are not included, but this method can cause bugs when accessed from other Chromium-based browsers.

```js
const userAgent = window.navigator.userAgent;
const isEdge = userAgent.includes("Edg");
const isOpera = userAgent.includes("OPR");
// Always true in Chromium-based browsers other than Edge and Opera
const isChrome = userAgent.includes("Chrome") && !isEdge && !isOpera;
```

## Using Client Hints
To clearly distinguish Chromium-based browsers, you need to use [Client Hints](https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API). Client Hints were created to prevent misuse of User-Agent, and deliver strings from the browser.

Client Hints can be queried using `window.navigator.userAgentData.brands`.
If you query Client Hints in Chromium-based browsers, you can see that different strings are included for each browser.

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

As you can see, you can clearly distinguish the browser's strings. Therefore, unlike User-Agent, you can write bug-free code as follows.
```js
const userAgentBrands = window.navigator
  .userAgentData.brands.map(({brand}) => brand);
const isEdge = userAgentBrands.includes("Microsoft Edge");
const isOpera = userAgentBrands.includes("Opera");
const isChrome = userAgentBrands.includes("Google Chrome");
```
