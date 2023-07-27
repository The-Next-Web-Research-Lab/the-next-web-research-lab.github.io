const fs = require("fs-extra");

try {
    fs.removeSync("./docs/.vuepress/dist");
} catch {
    console.error("fs.removeSync('./docs/.vuepress/dist'); 실패");
}