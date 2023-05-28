const http=require("http");
const fs=require("fs");
const { log } = require("console");
let content=fs.readFileSync("hi.txt","utf-8");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});//200 means all ok ,header 
    res.end(content);
})
server.listen(80,'127.0.0.1',()=>{
    log("listening");
})