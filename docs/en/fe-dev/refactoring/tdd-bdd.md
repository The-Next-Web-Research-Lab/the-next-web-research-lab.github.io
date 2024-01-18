---
title: Comparison of TDD and BDD
---

# Comparison of TDD and BDD

## TDD (Test Driven Development)
TDD is one of the development methodologies that repeats the process of writing test code that fails first, writing development code, running tests, passing, and refactoring.
This is a development methodology that focuses on writing only the essential code and increasing the reliability of the code by repeating these tasks.

## BDD (Behavior Driven Development)
First of all, the disadvantage of TDD is that unnecessary test code modifications occur when modifying the code by writing tests from the code perspective.

To solve this situation, BDD methodology came out, and in BDD, the suite is written from the *user scenario* perspective.

It is written in units of functions from the user's perspective, and it is written in units of behavior so that the test code does not change when the development code changes.

The basic order of writing test code is as follows.

#### 1. Feature
   - Specify the function/responsibility of the test subject.
   - Write user stories.
#### 2. Scenario
   - Describe the situation for the test purpose.
   - Write use cases.
#### 3. Given
   - Set the value required for the scenario progress.
#### 4. When
   - Specify the conditions required to proceed with the scenario.
#### 5. Then
   - Specify the result that must be guaranteed when the scenario is completed.
