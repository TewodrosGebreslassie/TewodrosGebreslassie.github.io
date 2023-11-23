// Reduce

//import { type } from "os";





// let number=[12,22,33,4,5];
// function reduce(num:number[]):number{
//   const reducenum=num.reduce((acc,current)=>
//   acc+current);
//   return reducenum;
// }
// console.log(reduce(number));
//find index filter*******************************************************************************************************************************

const fruits = ['apple', 'banana', 'orange']; 
const indexOfBanana = fruits.indexOf('bana'); // indexOfBanana is 1
console.log(indexOfBanana)
  

let number=[1,2,18,2,77,108];
const evenNum=number.filter(num=>num%2===0);
const findEven=number.find(num=>num%2===0);
const IndexEven=number.indexOf(108);
console.log(evenNum);
console.log(findEven);
console.log(IndexEven);

//map*******************************************************************************************************************************


let lengths = ["Bilbo", "Gandalf", "Nazgul"];
const lengthNam=lengths.map(name=>name.length);
console.log(lengthNam);  //[ 5, 7, 6 ]

//sort

let arr = [ 2, 1,6,5,4,8,9, 75, ];
const sortedArr=arr.sort();
console.log(sortedArr); // 1,  2, 4, 5,6, 75, 8, 9]

// sort function*******************************************************************************************************************************

let arr2 = [ 100, 11,6,5,44,8,9, 75, ];
arr2.sort((a,b)=>b-a);
console.log(arr2);  // 100, 75, 44, 11,9,  8,  6,  5  b/c b-1 desending if a-b it will be assending

// let namess = ["Bilbo", "Gandalf", "Nazgul","zin","Aman","Mana","Zsn"];
// namess.sort((x,y)=>x-y);
// console.log(namess);


//reduce*******************************************************************************************************************************


let arrr=[12,23,3,45,67,8];
const sum=arrr.reduce((acc,curent)=>acc+curent,0);
console.log("reduce sum! " + sum);  //reduce sum! 158  or below
const funsum=arrr.reduce(function(acc,curent){return acc+curent},0)
console.log("using function reduce sum! " + funsum); //using function reduce sum! 158



//Destructuring  *******************************************************************************************************************************

let arr3 = ["Ilya", "Kantor"]
let firstName:string;
let surname:string;
 [firstName, surname] = arr3;
console.log(surname);//Kantor

console.log(firstName);//Ilya


const [firne, , title] = ["Julius", "Caesar", "Consul”, “of the Roman Republic"];
console.log( title ,"\n",firne); // Consul”, “of the Roman Republic//Julius



// let obj={fname:"teddy",lname:'gebre', midname:'ab'}
// console.log(obj)
let { fname, lname, ...username}={fname:"teddy",lname:'gebre', midname:'ab',username:"teddyab",other:"this is the paragraph of the following system"}
console.log(fname);
console.log(lname);
console.log(username);  //{ midname: 'ab', username: 'teddyab' } after .. its an object insid the object

//ex
const team = [ "Bob", "Fred", "Jim"];

const [bob, ,Jim]=team;
// destructure the team array onto variables with the same names as the elements, but all lower case
console.log("expect Bob", bob.toLocaleLowerCase() );
console.log("expect Jim", Jim.toLocaleLowerCase());  //expect Bob Bob expect Jim 


//Object destructuring ********************************************************************************

// interface Options {
//   titele: string;
//   width: number;
//   height: number;
// }

//quastion ?***********************if we assign with data type and with out data type***what is code block(-----)--can we asign type out side or inside the fun ******************************************************
// const options= {
//   titele: "Menu",
//   width: 100,
//   height: 200,
//   newe:"new thing"
//   };
//   let { titele, width, height,newe}= options;
//   console.log(titele); // Menu
//   console.log(width); // 100
//   console.log(height); // 200
//   console.log(newe); // 200

//   let {width:w, height:h, titele:t }:{width:string,height:number,titele:string}=options;
//   console.log(t)
//   console.log(w)
//   console.log(h)
type Options= {titele: string,
  width?: number,
  height?: number
}
const optionss:Options= {
  titele: "Menu",

  };
  const {width = 100, height = 200, titele} = optionss;  // if we deleted the hight it will show us anly til&widtg
  console.log(titele); // Menu
  console.log(width); // 100
  console.log(height); // 200
  
//destructure the team object onto variables with the same names as the properties
const teams = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
const { power,small,point,center,shooting,}=teams

console.log("expect Big Sleep", center);
console.log("expect small", small);
console.log("expect power ", power);
console.log("expect this is pointer", point);
console.log("expect shooting", shooting);
const { power:foure, small:three, point:one, center:five, shooting:two,}=teams;
console.log("expect Big Sleep1", one);
console.log("expect small 2", two);
console.log("expect power 3 ", three);
console.log("expect this is pointer 4", foure);
console.log("expect shooting 5", five);

//Destructuring function parameters********************************************************************************
//it ust have type ,must be optional values , must be object parameter, must diclar the type of the onject, if it doesnt have value it will take the interna value but must be optional in type

type Option={
titelee:string,
width?:number,
height?:number,
item?:string[]}

let opt:Option={
  titelee:"this is Typescript",
  //item:["itemOne","Item2"],
  height:45000
}

function destructureingFun({width=100,height=200,item=["if the value not assighn"],titelee}:Option){
  console.log( item,width,height,titelee ); // Item1, Item2
}
destructureingFun(opt);
// parameter declaration for destructuring


const obje = {a: 1, b: 2 };
function addonj({a,b}:{a:number,b:number}):number{
  return a+b;
}
console.log(addonj(obje));
//Use destructuring with care
let user = { name: "John", age: 30 ,job:"programer",sex:"male"};
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))




//json********************************************************************************


// let user = {
//   name: "John",
//   age: 30,
//   toString: function(): string {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// console.log(user.toString());


//json  JSON.stringify to convert objects into JSON.
//JSON.parse to convert JSON back into an object
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null};
  let json = JSON.stringify(student);
  console.log("this is json",json);

  let numberss = "[0, 1, 2, 3]";
  console.log(JSON.parse(json));
console.log(JSON.parse(numberss));


let userr = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
userr = JSON.parse(userr);
console.log( userr);
// recursion 

// Write a function, evenRecurse, that will use recursion to print all positive even numbers less than a given number, e.g.,
// evenRecurse(7) will log 6,4,2,0

// function evenRecurse(num:number):void{

//   if(num%2===0){
//     console.log(num);
//   }
//   if(num>=0){
//     evenRecurse(num-1);
//   }
// }
// console.log(evenRecurse(4));
// evenRecurse(4);







//sum
// function sumEvenRecurse(num:number):number{
// let sum=0;
// if(num%2===0 && num>=0){
//   sum = num + sumEvenRecurse(num-2);
// }
// else {
//   sumEvenRecurse(num-1);
// }
// return sum;
// }
// console.log(sumEvenRecurse(4))


//write an expression to access the name and salary of the second employee in sales
//same for the second employee in the sites subdepartment

// type Person = { name: string; salary: number;}

// type Department = { [ deptName: string]: Person[] | Department};

// const company: Department = 
// {sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
// development: [{ sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
// internals: [{name: 'Jack', salary: 1300}]
// }
// };


////Displaying the name of employees
// function printName(department: Department): void {
//   if (Array.isArray(department)) {
//     department.forEach((subDiv) => console.log(subDiv.name));
//   } else {
//     for (const subdep of Object.values(department)) {
//       const subDepartment = subdep as Department;
//       printName(subDepartment);
//     }
//   }
// }
// console.log(printName(company)); // John, Alice, Peter, Alex, Jack
 


// 1. write a function, averagePoints, to get an array containing the average points across for each player .

// Try with a regular for..of loop and then using map.

// const player1 = {name: "Bob", points: [1, 2, 1]};

// const player2 = {name: "Andre", points: [2, 0, 1]};

// const player3 = {name: "Max", points: [1, 1, 1]};

// const players = [player1, player2, player3];

// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));

//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));

// type Players={name:string,poiints:number[]};
// //type Player={players:Player[]};

// function averagePoint(player:Players[]):number[]{
  
// }

const lengthsss = ["Bilbo", "Gandalf", "Nazgul"].map(function (name, index) {
  return index + ": " + name.length;
});

console.log("Expect [0: 5, 1: 7, 2: 6]", lengthsss);