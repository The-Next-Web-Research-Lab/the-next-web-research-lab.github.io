import fs from 'fs-extra';

try {
    fs.removeSync("./assets");
} catch {
    console.error("fs.removeSync('./assets'); 실패");
}

fs.removeSync("./src");

try {
  fs.copySync("./docs/.vitepress/dist", "./");
  fs.copySync("./docs/.vitepress/public/robots.txt", "./robots.txt");
} catch {
  console.error(`
  fs.copySync("./docs/.vitepress/dist", "./");
  fs.copySync("./docs/.vitepress/public/robots.txt", "./robots.txt"); 실패`);
}