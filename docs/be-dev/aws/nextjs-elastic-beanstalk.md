---
title: Elastic Beanstalk에 Next.js 배포 시행착오 정리
---

# Elastic Beanstalk에 Next.js 배포 시행착오 정리

### 1. CodePipeine 내에서 npm 관련 Deploy 실패 이슈

- next.config.mjs에서 output:standalone 사용 및 정적 리소스 Copy 처리
  - [next.config.js Options: output](https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files)
- package.json 파일에 정확한 node 버전 명서
  - (AS IS) node: ^18
  - (TO BE) node: >=18
- node 서버 포트를 8080로 지정
  - EB 내 nginx는 80 포트로 띄어지고, node 서버를 프록시함

### 2. EB Severe 상태 이슈

- (원인) index 페이지에서 UI를 미제공하므로 notFound 404로 처리했음
- (해결) index 페이지를 healthcheck 페이지로 사용

### 3. CodeBuild 후 Deploy 시점에 실패하는 이슈

- (원인) CodeBuild에서 Artifact를 압축하지 않아 Deploy에서 20분 이상 걸리고 실패함
- (해결) CodeBuild에서 Artifact를 Zip으로 압축함(CodePipeline 3분으로 개선)
