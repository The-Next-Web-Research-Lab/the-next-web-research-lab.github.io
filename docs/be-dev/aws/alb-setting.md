---
title: AWS에서 ALB 환경 설정하기
---

# AWS에서 ALB 환경 설정하기

ALB는 Application Load Balancer로 HTTP 및 HTTPS 트래픽을 사용하는 애플리케이션의 트래픽을 조절하는 기능을 한다. 아래와 같은 순서로 설정하면 ALB 생성 및 인터넷에서 ALB를 접속할 수 있다.

1. EC2 인스턴스를 생성한다.
1. EC2 인스턴스에서 소프트웨어를 설치한다.
1. EC2 인스턴스를 기준으로 AMI를 생성한다.
1. AMI를 기준으로 시작 템플릿을 생성한다.
1. Auto Scaling 그룹 생성을 클릭한다.
1. Auto Scaling을 설정 중에 ALB를 선택한다.
1. 생성된 로드밸런서의 보안을 인터넷에서 접속할 수 있게 설정한다.
1. 로드밸런서의 DNS로 접속 확인한다.
