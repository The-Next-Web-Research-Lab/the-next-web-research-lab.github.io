import fs from 'fs-extra';

try {
    fs.removeSync("./docs/.vitepress/dist");
} catch {
    console.error("fs.removeSync('./docs/.vitepress/dist'); 실패");
}