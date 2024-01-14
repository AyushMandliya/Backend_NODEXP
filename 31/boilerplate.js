// const fs = require("fs");
// // console.log(fs);
// const folderName = process.argv[2] || "Demo";

// fs.mkdir("apple", { recursive: true }, (err) => {
//   console.log("In the callback");
//   if (err) throw err;
// });
// console.log("I come after mkdir");
// fs.mkdirSync(folderName);
// console.log("I came after mkdir in the file");

// fs.mkdirSync(folderName);
// fs.writeFileSync(`${folderName}/index.html`, "");
// fs.writeFileSync(`${folderName}/app.js`, "");
// fs.writeFileSync(`${folderName}/styles.css`, "");
const fs = require("fs");
const folderName = process.argv[2] || "Demo";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(e);
}
