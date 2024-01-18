# Save costs with commit message rules
## Introduction: What is the cost that developers talk about?
Sometimes when collaborating, we talk about costs such as "This is a costly task" or "This way we can save costs".
Here, the cost means the developer's time usage, and one of the most common costs in application development is the developer's labor cost, so we often talk about costs in this way.

The developer's labor cost can be estimated at about 200,000 won per day depending on the case, and if you work 8 hours a day, it is 25,000 won per hour. If you waste 30 minutes due to inefficient work, you lose about 12,500 won. Although I get paid, I feel sorry to use it carelessly when I convert time to money, so I tried to work as efficiently as possible.

::: tip
Note: In fact, the cost of developers used by companies includes not only labor costs but also other costs such as office space, welfare, and insurance. Therefore, more costs are incurred than expected.
:::

## Benefits of using commit message rules
### The cost of checking the code status is reduced
The commit message helps you to check the status of the source code to be deployed with just a message. If you express bug fixes, refactoring, etc. in the commit message, you can check whether it is something that should not be deployed or something that needs to be checked more carefully before deployment.

So the communication and verification costs are reduced, for example, when cross-checking before deployment, you can capture the commit log and request confirmation only to the colleagues in the log via messenger. The colleague can see the log and see if they need to check it directly or if it is not necessary.

### The cost of writing release notes is reduced
If the commit message is unified, it also helps when deploying the library. When deploying the library, we often write release notes, and we write release notes by dividing them into headers such as bug fixes, feature additions, and refactoring. If it is written in the commit message, you can write the release note with just a message, and even automate it.

## How to write commit message rules
Basically, the form of the commit message is `[prefix]: [message]`.

`[message]` summarizes the current commit code in one line. If the description of the code is difficult or you need to include a lot of content, you need to commit more frequently. The more often you commit, the more it helps with context switching and code rollback.

`[prefix]` uses the following:
- `feat` is used when adding a feature.
- `fix` is used when fixing a bug.
- `refactor` is used when refactoring without changing the function.
- `chore` is used when adding a package to `package.json` or modifying a configuration file.
- `docs` is used when simply writing comments or markdown.

## Conclusion
You can see more rich explanations and information in addition to what is introduced here by referring to the link below.
[https://udacity.github.io/git-styleguide/](https://udacity.github.io/git-styleguide/)
