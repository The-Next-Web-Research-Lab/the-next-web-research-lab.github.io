const fs = require("fs-extra");

fs.removeSync("./assets");
fs.removeSync("./src");
fs.copySync("./docs/.vuepress/dist", "./");
fs.copySync("./docs/.vuepress/public/robots.txt", "./robots.txt");