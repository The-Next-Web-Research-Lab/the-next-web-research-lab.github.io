---
title: CORS and HTTP Cookie
---
# CORS and HTTP Cookie
> This is a post I wrote on October 22, 2019 to explain to a BE developer who I was collaborating with while developing an internal service.

### Purpose of the article
Cross-Origin Resource Sharing! It is called CORS by taking the first letters. In my experience, CORS is the first phenomenon that occurs when a client and an API server using different domains communicate.

Recently, I had to use HTTP Cookie, and I learned new knowledge about CORS while using Cookie. So I summarized the contents of how to handle CORS and HTTP Cookie.

### What is CORS
CORS is a security mechanism that occurs when a client using a different domain requests a server. When a client requests a server of a different domain, it requests by **Cross-Origin HTTP request**. HTTP requests and responses according to **Cross-Origin HTTP request** must be composed of CORS mechanism.

The server sets the allow/deny status when a request from a client using a different domain comes. The setting for allow/deny is done through **Access-Control-Allow-Origin** in the HTTP Header.

**Access-Control-Allow-Origin** specifies the domain to allow or writes a wildcard (*) that can allow all domains.

#### [Example] The phenomenon before using Access-Control-Allow-Origin
> Client (http://localhost:3000), Server (http://localhost:4000)

If **Access-Control-Allow-Origin** is not set in the server response header, an error occurs for the policy.

##### HTTP request
```js
fetch('http://localhost:4000')
```

##### Chrome developer tool > Console
Access to fetch at 'http://localhost:4000/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

#### [Example] The phenomenon after using Access-Control-Allow-Origin
It works normally when **Access-Control-Allow-Origin** is set in the server response header.

##### HTTP request
```js
fetch('http://localhost:4000')
```

##### Chrome developer tool > Network > Response Headers
```
Access-Control-Allow-Origin: *
Content-Length: 12
Content-Type: text/html; charset=utf-8
Date: Mon, 21 Oct 2019 21:56:47 GMT
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
X-Powered-By: Express
```

### Credentials setting for using HTTP Cookie
#### The situation where HTTP Cookie was used
First of all, the reason why I used HTTP Cookie was to determine the login and login status. The service configuration consists of three: client service, API server, and login service, each using a different domain.

After logging in at the login service, the login completion status is stored in the Cookie and redirected to the client service. Cookie is set to HttpOnly so that it cannot be accessed by the client service.

> If Cookie is set to HttpOnly, it cannot be accessed by Javascript's `document.cookie`.

In the client service, it requests the API server to **determine the login status**. At this time, **client and server Credentials** settings are required to use Cookie on the API server.

#### Credentials setting
Both the client and the server must activate Credentials.

##### Client Credentials setting
The client can set it differently depending on the Javascript API. The following are examples of the most commonly used fetch and XMLHttpRequest.
```js
fetch('http://localhost:4000', {
  credentials: 'include'
})
```
```js
const xhr = new XMLHttpRequest();
const url = 'http://localhost:4000';

xhr.open('GET', url, true);
xhr.withCredentials = true;
xhr.send();
```

##### Server Credentials setting
The server sets Credentials in the response header. Set the header named **Access-Control-Allow-Credentials** to true.
```js
res.header("Access-Control-Allow-Credentials", true)
```

After activating **Credentials**, the following error occurs when making an HTTP request.

Access to fetch at 'http://localhost:4000/' from origin 'http://localhost:3000' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.

This is because you cannot use a wildcard (*) in **Access-Control-Allow-Origin** after activating **Credentials**.

The point to note here is that the situation of the client and the server is different by activating Credentials. On the server, activating Credentials allows access to Cookie, so it looks like normal operation. However, on the client, HTTP response cannot be checked due to CORS policy.

#### Credentials and Access-Control-Allow-Origin setting
In the server HTTP response header, write the domain of the client to allow in **Access-Control-Allow-Origin**. After setting, you can check the normal operation by checking the client response header.

##### Server HTTP response header setting
```js
res.header("Access-Control-Allow-Origin", "http://localhost:3000");
res.header("Access-Control-Allow-Credentials", true);
```

##### Chrome developer tool > Network > Response Headers
```
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: http://localhost:3000
Content-Length: 12
Content-Type: text/html; charset=utf-8
Date: Mon, 21 Oct 2019 22:46:47 GMT
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
X-Powered-By: Express
```

### Conclusion
Using different domains for the client and the API server is a common pattern in the field. This pattern occurs once or twice during the initial development of the service. It can be solved by simply following the CORS policy. The issue of CORS is not something that only one side of the client and server managers should be aware of, but everyone needs to understand. I think it is better to solve this issue smoothly by following the CORS policy and focus on business development.