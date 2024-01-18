---
title: Definition and Results of Refactoring
---
# Definition and Results of Refactoring
> This post is a summary of part of Martin Fowler's Refactoring book written on May 26, 2019.

### Refactoring
**Refactoring** is the process of modifying the internal of the software to make it easier to understand and modify, while leaving the functionality that appears on the surface intact. It makes the software easier to understand and modify, and allows you to add various functions to the software without affecting the functionality that appears on the surface. Users do not notice the changes in the software because refactoring does not affect the functionality that appears on the surface after performing it.

#### Refactoring and Performance Optimization
Refactoring is **opposite to performance optimization**, and the same point is that the functionality does not change after performing it. The difference is that performance optimization often makes the code harder to understand in order to achieve the performance that is inevitably necessary for performance improvement.

#### Refactoring and Feature Addition
Refactoring and **feature addition should not be done at the same time**. If you proceed at the same time, it is difficult to identify whether the issue is due to refactoring or **the feature issue** when the issue occurs. When adding a feature, you need to add test code together so that there is no feature issue when refactoring later.

### Refactoring Results
#### Code design is neat
If you modify the code or modify the code without fully understanding the design of the code for short-term purposes of software design improvement, the code structure becomes messy and it becomes difficult to understand the design by looking at the code, and the program design becomes obsolete. Regularly performing refactoring makes the code design neat.

#### Easy to understand
You can't remember everything you designed while adding features, so if you don't make the code neat, you can't understand complex content.

#### Easy to find bugs
Code refactoring makes the structure clear and easy to find bugs when debugging.

#### Programming speed is fast
If you don't refactor, the software development speed will decrease significantly as the software development progresses. If the design is not organized, it will take a long time to add features, and you will waste a lot of time finding bugs. To speed up programming, you need to keep the design neat and prevent the design from becoming obsolete.
