---
title: AWS에서 Node.js 서버 환경 설정하기
---

# AWS에서 Node.js 서버 환경 설정하기

AWS의 EC2 인스턴스에 Node.js 서버를 띄우기 위해 설치해야 하는 소프트웨어와 EC2 인스턴스가 재실행이 되었을 때, Node.js 서버가 실행되도록 설정하는 명령어들을 나열합니다.

```bash
# 시스템 업데이트
$ sudo apt update
$ sudo apt upgrade

# Node.js, npm 설치
$ sudo apt install nodejs
$ sudo apt install npm

# npm 패키지 설정
$ sudo npm init

# PM2 설치
$ sudo npm install -g pm2

# PM2으로 재실행 설정
$ pm2 startup
$ pm2 start app.js
$ pm2 save
```
