---
title: Web Performance Monitoring Methods - Synthetic Monitoring and Real User Monitoring (RUM)
---

# Web Performance Monitoring Methods - Synthetic Monitoring and Real User Monitoring (RUM)

There are two web performance monitoring methods: Synthetic Monitoring and Real User Monitoring (RUM). The differences between the two approaches are as follows.

## Synthetic Monitoring
Synthetic Monitoring is a method of monitoring performance using automation tools in a consistent environment. It also includes simulating the paths that users can move through the web app and monitoring the performance measured by the simulator.

Synthetic Monitoring allows you to be aware of performance issues before users detect them, and can be used for benchmarking against competitors.

Synthetic Monitoring can be measured through [WebPageTest.org](https://webpagetest.org/), [PageSpeed Insights](https://pagespeed.web.dev/).

## Real User Monitoring (RUM)
RUM measures the web app performance of real users. It inserts a script on the page to measure and report the page load data. Unlike Synthetic Monitoring, it measures the actual user's performance experience without fixing the device, browser, network performance, or geographic location.

RUM is based on real users, so it needs to receive a large amount of traffic and resources that can handle large data.
Therefore, RUM is difficult to build directly, and it is suitable to use a solution. In Korea, there is a solution called [IMQA MPM](https://imqa.io/mpm), which has impressive articles on the technical blog.

## References
- [Performance Monitoring: RUM vs Synthetic Monitoring - Web Performance | MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Rum-vs-Synthetic)
- [Synthetic vs. Real-User Monitoring: How to Improve Your Customer Experience | New Relic](https://newrelic.com/blog/best-practices/synthetic-versus-real-user-monitoring)
- [Synthetic Monitoring vs. Real User Monitoring Comparison - Sematext](https://sematext.com/blog/real-user-monitoring-vs-synthetic-monitoring/)
- [Synthetic Monitoring vs. Real User Monitoring - Pingdom](https://www.pingdom.com/blog/synthetic-monitoring-vs-real-user-monitoring/)
- [Synthetic & Real User Monitoring Explained - catchpoint](https://www.catchpoint.com/guide-to-synthetic-monitoring/rum-vs-synthetic-monitoring)