---
title: "Stress Management: Refactor Yourself to Manage Stress"
---
# Stress Management: Refactor Yourself to Manage Stress
## Why do we need stress management?
Do you feel stressed when something unexpected happens or when you are overloaded with information? I'm a planner and cautious person, so I get stressed out when something unexpected happens that I'm not used to. And when information overload occurred, judgment would be clouded.

[Stress at the Centers for Disease Control and Preventionis](https://www.mentalhealth.go.kr/portal/disease/diseaseDetail.do?dissId=30&srCodeNm=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4) considered one of the mental illnesses. When people are stressed, their judgment is clouded, and they are unable to perform to their full potential. In other words, if you reduce the points of stress, your work efficiency will increase accordingly.

## Reducing Stress
### Reduce simple, repetitive tasks
Simple, repetitive tasks are exhausting, so reducing them can help improve stress. The naming of the code is [Refactor](https://www.jetbrains.com.cn/en-us/help/webstorm/refactoring-source-code.html) function, and the frequently used code is [Live Template](https://www.jetbrains.com/help/webstorm/using-live-templates.html) We used the features to improve it.

And when collaborating with designers and backend developers, there are areas where things can be improved.

There was a time when I had to get more than 100 icon files from the designer and reflect them in the icon component. In this case, I solved it by writing a nodejs script that converts the image into an icon component. As long as you pay attention to nodejs' file system, string changes, and where to execute commands, writing scripts is a simple solution. The code formatting of the generated icon component can be easily solved by running Prettier in nodejs.

Lastly, when defining the DTO type of the REST API, read the Swagger documentation to define the DTO type. [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api) I was able to improve it by utilizing it. If you want to manage each type of route, [dts-bundle-generator](https://www.npmjs.com/package/dts-bundle-generator) You can solve it by using

### Context Switching Optimization
When you are working, you may receive a notification on a messenger, a meeting may occur, or you may suddenly receive a question offline. At this time, the context of the work you were focusing on is broken, and when you come back, it takes time to recover.

As seniority in the company accumulated, roles and tasks increased, and context switching occurred frequently. That's why I've always practiced the basics of engineering, which is to break down big things into smaller pieces.

When you do front-end development, you link markup and REST APIs, and then refactor after completion. I've always worked in the following order to solve context switching:

```
Step 1. Roughly implement/develop the markup

Sometimes, there is a design for the overall flow, but not for the detailed parts, right?
The detailed parts can be done later, so at this time, focus on the layout and the shape of the work.
Step 2. (Optional) Componentize the duplicated UI elements

Step 3. Define the DTO of the REST API

Step 4. Connect the mock data to the REST API flow

Have you ever tried to run the REST API after receiving a confirmation from the backend developer, but it didn’t work?
You can proceed with the next task by connecting the mock data until it is fixed.
Step 5. Connect to the REST API server

Step 6. Connect the UI detail scenarios

Step 7. Refactor the duplicated logic
```