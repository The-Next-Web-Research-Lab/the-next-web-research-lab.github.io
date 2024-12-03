---
title: Beanstalk에서 nginx 로드밸런스 설정
---

# Beanstalk에서 nginx 로드밸런스 설정

### 1. 노드 서버 2개 띄우기

Procfile에서 서버 2개 띄우기 설정

```
web: PORT_SERVER=8080 node app.js & PORT_SERVER=8081 node app.js
```

### 2. upstream 설정 추가

```
# .platform/nginx/conf.d/custom.conf
upstream node {
  server 127.0.0.1:8080;
  server 127.0.0.1:8081;
}
```

### 3. upstream 사용 설정 추가

> 참고: https://gist.github.com/henhan/2943013c9064606425b0ee5bb1ca8c99

```
# .platform/nginx/conf.d/elasticbeanstalk/00_application.conf
location / {
    # custom.conf에 정의한 upstream 사용
    proxy_pass          http://node;
    proxy_http_version  1.1;

    proxy_set_header    Connection          $connection_upgrade;
    proxy_set_header    Upgrade             $http_upgrade;
    proxy_set_header    Host                $host;
    proxy_set_header    X-Real-IP           $remote_addr;
    proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
}
```
