---
title: Definition and Basic Principles of Monorepo
---
# Definition and Basic Principles of Monorepo
## Definition of Monorepo
A software development strategy that stores multiple projects in a single version control repository.

## Basic Principle of Monorepo: npm symbolic link
Through npm symbolic links, other projects in the same repository can be used as npm modules.

### Creating npm symbolic links

#### Step 1. Create the my-core package
Create the my-core package in the project root.
```bash
$ mkdir my-core
$ cd my-core
$ npm init
```
Create an index.js file in the my-core folder and write the following code:
```js
module.exports = (a, b) => a + b
```

#### Step 2. Create the my-repo package
Create the my-repo package in the project root.
```bash
$ mkdir my-repo
$ cd my-repo
$ npm init
```
Create an index.js file in the my-repo folder and write the following code:
```js
const sum = require('my-core')
console.log(sum(1, 2))
```

#### Step 3. Set up npm symbolic links
`npm link` sets up a symbolic link based on the package name of the folder. 
```bash
$ cd my-core
$ npm link # Set up symbolic link
```

#### Step 4. Install npm symbolic links
`npm link <package>` installs the registered symbolic link. It is installed in the `node_modules` folder like other packages.
```bash
$ cd my-repo
$ npm link my-core # Install symbolic link
```

After installing the symbolic link, you can see the following result when you run index.js:
```bash
$ node index.js // 3
```