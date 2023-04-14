console.log("hi");
let n='ishaan';
console.log("hi "+n);
let n1="i";
console.log("hi "+n1);

function great(name='i'){
    console.log("hello "+name);
}
great('ishaan');
great();
let s='ishaan1'
great(s);

let g=great();
console.log(g);//undefined

function sum(a,b){
    let c=a+b;
    return c;
    //console.log("no");--->not printed bec after return
}
let a=6;
let d=10;
let x=sum(a,d);
console.log(x);

function greater(a,b){
    if(a>b)
    return a;
    else if(a==b)
    return true;
    else
    return b;
}
let r1=greater(5,6);
console.log(r1);
// let q=prompt("enter 1st");
// let w=prompt("enter 2nd");
// let r=greater(q,w);
// console.log(r);


