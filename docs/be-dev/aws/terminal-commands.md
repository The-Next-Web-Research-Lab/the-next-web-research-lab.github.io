---
title: 터미널 명령어 모음
---

# 터미널 명령어 모음

```bash
http-server . -p [포트번호] -a [호스트명]
npm list -g
time [명령어] # 명령어 실행 시간
```

## EC2 인스턴스에서 자주 사용하는 명령어

```bash
ping # 도메인 연결 확인
curl -X [method] [url] # HTTP 요청

service nginx status
ps aux | grep node # node 프로세스 찾기

find / -name "[파일명]" # 파일 찾기
cat [파일명] # 파일 보기
sudo tail /var/log/nginx/error.log # nginx 로그

du -sh [folder] # 전체 디스크 용량
du -h [folder] # 서브 폴더 디스크 용량
df -h # 남은 디스크 용량
```
