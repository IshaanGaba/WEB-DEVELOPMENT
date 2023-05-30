console.log("this is module");
function average(arr){
    let s=0;
    arr.forEach(element => {
       s=s+element; 
    });
    return s/arr.length;
}
// 1. 
// module.exports=average; //to give function to other modules


//2.
// module.exports={
//     avg:average,
//     name:"abc",
//     11:'abcd'
// };

//3.
d={
    avg:average,
    name:"abc",
    11:'abcd' 
};
module.exports=d;

//4.
module.exports.name1="abhg";
console.log(d);