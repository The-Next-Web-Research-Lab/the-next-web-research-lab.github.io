---
title: A Summary of Test Types on One Page
---

# Test Types
## Unit Test
Unit test is a method of verifying that a specific module of code works exactly as intended. You will write test cases for every function and method.

Ideally, each test case should be separated from each other, and this will help you to identify and solve problems quickly whenever code changes cause problems. Creating Mock Objects is also a good way to do this.

Unit tests are performed not only by developers but also by testers, and there are cases where testers write unit tests and developers develop accordingly.

## Static Test
Static test means analyzing software without running software. eslint, prettier, open source license verification, test coverage measurement, etc. are included in static test.

## Integration Test
Integration test is a test that is composed of a larger unit than unit test. Specifically, it is to test everything in a state where all systems such as client, server, DB, etc. are completely integrated and built.

In integration test, you will judge whether each integrated module works as planned, whether there is no difference between the actual operation of the system and the original requirements, etc. You will check the performance time, file storage and processing ability, maximum load, recovery and restart ability, manual procedures, etc. It is classified as a kind of black box test that performs tests regardless of the knowledge of the internal implementation or design of the system.

## Regression Test
All test methods that find bugs can be called regression tests, and regression tests are methods of checking whether the resolved bugs/issues are reproduced.
