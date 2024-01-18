---
title: How much do you know about deployment?
---
# How much do you know about deployment?
> This post was written on April 25, 2019.

## Purpose of the post
The series of processes for service deployment and stabilization period are important for safe service operation.
However, this knowledge is hard to obtain except by experiencing it in the field. I wrote this to help engineers who develop and operate services.

## Knowledge related to deployment
### Deployment process
There is a **process** to **deploy** software. I am in charge of the front, and the front usually depends on the backend deployment.
If there is software that has dependencies, the order must be clearly defined between the collaboration departments.

There are times when the service cannot be used temporarily during the deployment process. In this case, users are prevented from using the software by using a device such as a **notice**.

### Rollback plan
A rollback plan is a way to **respond** so that **the issue does not occur** when an issue that interferes with product use occurs after deployment.
I usually saw two methods being performed.

**The first** is to roll back the version in configuration management or deploy to the previous tagging version.
The disadvantage of this method is that everyone who can deploy must be aware of version management and deployment version management.
I wonder if all this can be recorded and managed reliably.

**The second** is to modify the code for feature deactivation. QA was done for deployment.
If you modify many lines of code at this time, I think it means nothing to QA.

So the method I prefer is **feature toggling**. You can adjust activation/deactivation with a simple boolean value change,
and you can reduce mistakes in urgent situations like deployment.

This feature can also be used as a countermeasure for errors in risky features in terms of business. An example of a risky feature in terms of business is the **payment window**. The payment window can cause financial damage if it is implemented incorrectly, so setting up a countermeasure is one of the ways to reduce the damage.

> I have experience applying KakaoPay's new payment page to KakaoTalk movie service last year, and I designed it to be separable as a component and toggleable in case the feature is abnormally exposed.

> The payment window has many services related to the pay library, billing API, etc., and if one of the services has a temporary error, it exposes the **old UI**. This way, users can proceed with movie reservations normally.

### Stabilization period
The stabilization period means the period to check whether the service is **operating stably** after service deployment. Users need time to use it, so it is recommended to have **1~2 weeks** if possible. It is good not to have a new deployment during the stabilization period. It is necessary to identify whether the issue is related to the deployment when the issue occurs, so it is recommended not to deploy during the stabilization period.

### Error report
> Kakao uses a tool called [Sentry](https://sentry.io/welcome/).

We check errors through the console while developing. But there is no guarantee that there will be no errors during service operation.
When an error occurs in the service, the service operator must be aware that the user cannot use the normal service.
At this time, use the error report function.

The error report contains exception occurrence logs (thrown by throw), user devices, and movement paths. But from experience, sometimes it is hard to figure out with this information.
Therefore, you need to set up an error report to do additional logging according to the service.
