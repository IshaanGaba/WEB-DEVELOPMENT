const express=require('express');
const path =require('path');
const port=8000;
const app=express();

app.use(express.urlencoded({extended:true}));
app.use('/static',express.static('static'));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'view'));

app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
});
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
});

app.listen(port,()=>{
    console.log(`on port ${port}`)
});