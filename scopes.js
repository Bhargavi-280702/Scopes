// Block scope
{
let x=10;
const y=20;
console.log(x);
}
// console.log(x);


//Function scope
function myFunction(){
    var z=30;
    console.log(z);
    
}
myFunction();
// console.log(z);


//Global scope
var a=100;
function test(){
   console.log(a);
   
}
test();
console.log(a);
