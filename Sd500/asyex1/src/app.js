let a = 1;
let b = 1;

console.log(a);
console.log(b);

setTimeout(function () {
  console.log("assync");
}, 10000);

// fetch('/').then(function(){
//     console.log("this is fetch")
// })

console.log("ssynchronous");
console.log("this is " + a);
console.log("this is " + b);
//the output will be
// 1
// 1
// ssynchronous
// this is 1
// this is 1
//and after 10000milisecond it will print out the with in settime out fun
// assync

//ssynchronous==>serial

console.log("this is");
console.log(" not ");
console.log(" a number");
console.log(" peryod ");

//Asynchronous==>serial

console.log("this is");
console.log(" example ");
console.log(" of assync");

//arrowfunction example*************************************************************************************
//function arrowfun (){}
//let arrowfun=()=>{}

setTimeout(() => {
  console.log(" with settimeout ");
}, 4000);



