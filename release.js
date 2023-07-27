const fs = require("fs-extra");

try {
    fs.removeSync("./assets");
} catch {
    console.error("fs.removeSync('./assets'); 실패");
}
fs.removeSync("./src");
fs.copySync("./docs/.vuepress/dist", "./");
fs.copySync("./docs/.vuepress/public/robots.txt", "./robots.txt");