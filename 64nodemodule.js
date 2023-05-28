const fs=require("fs");//built in module-->file system
let text=fs.readFileSync("hi.txt","utf-8");
console.log(text);
text=text.replace("node","java");
console.log(text);
fs.writeFileSync("hi1.txt",text);