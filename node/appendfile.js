const fs=require("fs");
fs.appendFileSync("hello.txt","\n appended file");
console.log("file appended");