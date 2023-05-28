const { log } = require("console");
const fs=require("fs");
// fs.readFile("hi.txt","utf-8");//error

// fs.readFile("hi2.txt","utf-8",(err,data)=>{
//     log(err,data);
// }); //error file does not exist
fs.readFile("hi.txt","utf-8",(err,data)=>{
    log(err,data);//error is null
});


log("later");
fs.readFile("hi1.txt","utf-8",(err,data)=>{
    log(err,data);//error is null
});
log("very late!!");