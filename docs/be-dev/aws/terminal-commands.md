---
title: 터미널 명령어 모음
---

# 터미널 명령어 모음

```bash
http-server . -p [포트번호] -a [호스트명]
npm list -g
time [명령어] # 명령어 실행 시간

nslookup [도메인] # IP 주소 조회
scutil --dns # DNS 조회
```

## Datadog
```bash
sudo datadog-agent status
sudo service datadog-agent start
sudo service datadog-agent stop
sudo chown -R dd-agent:dd-agent [파일경로]
sudo chmod 644 [파일경로]
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

### 메모리 관련 명령어
```bash
free -h # RAM

date "+%Y-%m-%d %H:%M:%S" | cat - <(free -h)
ps aux --sort=-%mem | head

watch -n 1 'date "+%Y-%m-%d %H:%M:%S" && free -h'
watch -n 1 'ps aux --sort=-%mem | head'
```
