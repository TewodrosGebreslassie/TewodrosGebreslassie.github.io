// const user: object={}
// console.log(user);
// export {};
// const obj:object={key1:1,key2:2,key3:3,key4:4,key5:5,key6:6,key7:7,key8:8}
// function iseven(obje:object.values(obje)):number[]{
//   let newar: number[]=[]
//   for(let num of Obje){
//     if(num.value %2===0){
// newar.push(num)
//     }
//   }
//   return newar;
// }
// console.log(iseven(obj));
// const obj: object = { key1: 1, key2: 2, key3: 3, key4: 4, key5: 5, key6: 6, key7: 7, key8: 8 };
// function isEven(objectInput:object) :number[]{
//   let resultArr: number[]=[]
//   for(let ele of Object.values(objectInput)){
//       resultArr.push(ele)
//   }
//   return resultArr
// }
// console.log(isEven(obj))
// function num(){
// }
// let foo = 42; // foo is now a number
// foo = 'bar'; // Type 'string' is not assignable to type 'number'.ts(2322)
// foo = true; // Type 'Boolean' is not assignable to type 'number'.ts(2322)
// //to convert fro string to number
// function num(text: string): any{
// let integer = parseInt(text, 10);
// return integer;
// }
// let text = '42px';
// console.log(num(text));
// let num=2.34549;
// let fix=num.toFixed(3);
// let roun=Math.round(num)
// let addd=fix+roun
// console.log(fix)
// console.log(roun)
// console.log((fix)+roun)
// console.log(typeof(addd))
// let unum=Math.floor(num*100)/100
// console.log(unum)
// console.log( +"100px" ); // NaN
// let str="1234"  //→ 1234
// Number(str) //→ 1234
// console.log(str);
// const foo = 45;
// const bar = +("" + foo);
// const bar2 = "" + 108;
// const bar3 = foo.toString();
// const bar4 = 108..toString(); //need both periods after number
// const bar5 = foo + "";
// console.log(typeof foo === "number"); //true
// console.log(typeof bar === "string"); //true
// console.log(typeof bar2 === "string"); //true
// console.log(typeof bar3 === "string"); //true
// console.log(typeof bar4 === "string"); //true
// console.log(typeof bar5 === "string"); //true
// console.log(typeof foo === "number")
// splice?
// let arrStr=["hi","how","are","you"];
// console.log(arrStr.slice(2)); //[ 'are', 'you' ]
// console.log(arrStr); //[ 'hi', 'how', 'are', 'you' ] => it dosnt affect th orginal arry
// console.log(arrStr.splice(1,1));  //[ 'how' ]
// console.log(arrStr);  //[ 'hi', 'are', 'you' ] ==> it affects the orginal array
// let strings="this is the monthly postion and files of the following !"
// // console.log(strings.slice(strings.length-11));   // it slices onlt after -11 =>following !
// //splice is only for arry if we want to splice 
// let arrstrings=strings.split(" ");   //
// //console.log(arrstrings);// it split it to an array with " " different 
// let newchanged =arrstrings.splice(arrstrings.length-1,0, "this", "is", "it" );
// let newthing=newchanged.join(" ")
// console.log(newthing);
// console.log(arrstrings)
// let strings = "this is the monthly position and files of the following !";
// let arrstrings = strings.split(" ");
// // Using splice to add elements at a specific position
// arrstrings.splice(arrstrings.length - 1, 0, "this", "is", "it");
// let newthing = arrstrings.join(" ");
// console.log(newthing);
