---
title: 웹 성능 모니터링 방식 - Synthetic Monitoring과 Real User Monitoring(RUM)
---

# 웹 성능 모니터링 방식 - Synthetic Monitoring과 Real User Monitoring(RUM)

웹 성능 모니터링 방식은 Synthetic Monitoring과 Real User Monitoring(RUM)로 두 가지가 있습니다. 두 접근 방식의 차이점은 다음과 같습니다.

## Synthetic Monitoring
Synthetic Monitoring은 일관된 환경에서 자동화 도구를 사용해서 성능을 모니터링하는 방법입니다. 사용자가 웹 앱을 통해 이동할 수 있는 경로를 시뮬레이션하고 시뮬레이터가 측정한 성능을 모니터링하는 것도 Synthetic Monitoring에 포함됩니다.  

Synthetic Monitoring은 사용자가 성능 이슈를 감지하기 전에 인지할 수 있고, 경쟁사 벤치마킹할 때 활용할 수 있습니다.

Synthetic Monitoring은 [WebPageTest.org](https://webpagetest.org/), [PageSpeed Insights](https://pagespeed.web.dev/)를 통해서 측정할 수 있습니다.

## Real User Monitoring(RUM)
RUM은 실제 사용자의 웹 앱 성능을 측정합니다. 페이지에 스크립트를 삽입해서 페이지 로드 데이터를 측정하고 리포트합니다. Synthetic Monitoring과 다르게 디바이스, 브라우저, 네트워크 성능, 지리적 위치가 고정되지 않고, 실제 사용자의 성능 경험을 측정합니다.

RUM은 실제 사용자를 기반으로 하므로 대량의 트래픽을 수신할 수 있어야 하고, 대용량 데이터를 처리할 수 있는 리소스가 필요합니다.
때문에 RUM은 직접 구축하기는 힘들고, 솔루션을 사용하는 게 적합합니다. 국내에는 [IMQA MPM](https://imqa.io/mpm)라는 솔루션이 있는데, 기술 블로그에 인상적인 글이 많습니다.

## 참고자료
- [성능 모니터링: RUM 대 합성 모니터링 - 웹 성능 | MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Rum-vs-Synthetic)
- [Synthetic vs. Real-User Monitoring: How to Improve Your Customer Experience | New Relic](https://newrelic.com/blog/best-practices/synthetic-versus-real-user-monitoring)
- [Synthetic Monitoring vs. Real User Monitoring Comparison - Sematext](https://sematext.com/blog/real-user-monitoring-vs-synthetic-monitoring/)
- [Synthetic Monitoring vs. Real User Monitoring - Pingdom](https://www.pingdom.com/blog/synthetic-monitoring-vs-real-user-monitoring/)
- [Synthetic & Real User Monitoring Explained - catchpoint](https://www.catchpoint.com/guide-to-synthetic-monitoring/rum-vs-synthetic-monitoring)