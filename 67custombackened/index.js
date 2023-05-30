const http=require("http");
const fs=require("fs");
const { log } = require("console");
const { url } = require("inspector");

const hostname='127.0.0.1';
const port=3000;

const home=fs.readFileSync('home.html')
const about=fs.readFileSync('./about.html')
const services=fs.readFileSync('./services.html')
const server=http.createServer((req,res)=>{
    log(req.url);
    Url=req.url;
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if(Url=='/' || Url=='/home'){
        res.end(home);
    }
    else if(Url=='/about'){
        res.end(about);
    }
    else if(Url=='/services'){
        res.end(services);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port,hostname,()=>{
    log(`server at http://${hostname}:${port}/`);
});

