---
title: Experience of using software version
---

# Experience of using software version
Version in software is a record of the deployment point. Knowing the deployment point makes it easy to solve service failures and to understand the dependencies of the software.
Depending on the project, I recorded the version in two ways, and I want to share the experience.

## Use date as version
When I was in charge of the Kakao movie reservation service, which is now closed, I used the date as the version. I used the `YYYYMMDD` format, for example, 20230101, which means filling in the year, month, and day.

This method makes it easy to know when it was deployed. It is useful when you want to know the point because failures can occur depending on the deployment point.

The service is deployed to multiple server devices, and sometimes there are cases where deployment is not done to a specific server device due to a deployment issue.
In this case, I was able to check the version through a failure monitoring tool like Sentry and find out if there was anything that was not deployed by looking through the server device.

## Use semantic version
Semantic version was used when I operated the internal library at the time of Kakao's internal platform development.

This method is a good way to express the state of the software. Generally, the `[major].[minor].[patch]` format is used.
For example, 1.2.3, which means writing with dots.

Each version is raised for the following reasons:

- major: when the function changes incompatibly with the existing version
- minor: when a new function is added while being compatible with the existing version
- patch: when a bug is fixed while being compatible with the existing version

For more information on semantic version, see [semver.org](https://semver.org/lang/en/).
