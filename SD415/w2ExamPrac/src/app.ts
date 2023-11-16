// //What will appear in console when this code runs? Enter BLANK if nothing is there.
// function foo(bat) {
//   if(bat) {
//        bat = console.log("bat");
//     return bat;
//      }
//       conso long = console.log("short");
//   return long;
// }
// console.log(foo());

// import { Session } from "inspector";
// import { type } from "os";

//import { type } from "os";

// const x = 123;
// const y = 123;
// const a = [1, 2, 3];
// const b = [1, 2, 3];

// const c=[4,5,6]
// const d=c;  //is it true yes they have the same referance value

// function sayhi():void{
// console.log("Hello");

// }
// const myhi=sayhi;

// arr.forEach(num: number)
// arrayBuffer.filter,==> return  Boolean
// arr.find,==> return  Boolean
// arr.map ==> upgrade

// const squararr= arr123.map(num: number )=>{
//     return (num*num)
// }

// no1

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// type players= { name: string,points:number[] }

// function avgnew(players:players[]): number[] {
// let sum :number;
//     let avgresult=[];
//     for(let player of players){
//  sum=0
//         for(let element of player.points){
//             sum+=element;
//         }
//         avgresult.push(sum/player.points.length)

//     }
// return avgresult;
// }

// const player1 = {name: "Bob", points: [2, 2, 2,2]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log(avgnew(players))

// // 2. const array123 = [1, 2, 3]
// // use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]
// const arr= [1, 2, 3]

// let newarr2=arr.map((num:number)=>{

//     return num*num;
// });

// console.log(newarr2)

// // 3. Implement the ask function, which should callback the yes function if the user answers yes to the question, else
// calls back the no function.
// const prompt = require("prompt-sync")();
// function ask(question, yes, no) {
// }

// ans =>you agreed

// 4; // replace the showCancel and showOk function declaration with arrow functions in the ask call

// function ask(question, yes, no) {
//     const userResponse = prompt(`${question} (yes/no): `);

//     if (userResponse === 'yes') {
//         yes();
//     } else {
//         no();
//     }
// }
// ask(
//     "Do you agree?",
//     () => console.log("You agreed."),
//     () => console.log("You canceled the execution.")
// );

// 5. /* write functions executor, add, and mult as defined by the test below */
// describe("executor", function(){
//  it ("tests add", function(){
//  assert.strictEqual(executor(add, 5, 10), 15);
//  });
//  it("tests mult", function(){
//  assert.strictEqual(executor(mult, 5, 10), 50);
//  });
// });

// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }

// // Function to multiply two numbers
// function mult(num1: number, num2: number): number {
//     return num1 * num2;
// }

// // Executor function
// function executor(func: (num1: number, num2: number) => number, num1: number, num2: number): number {
//     return func(num1, num2);
// }

// //6. Create an object calculator with two methods using an object literal:
// //  getValues(operand1, operand2) takes two values and saves them as object properties.
// //  sum() returns the sum of saved values.
// //  mul() multiplies saved values and returns the result.
// // let calculator = {
// // ... your code ...
// // };
// calculator.setValues(5, 10);
// console.log( “expect 15 : “, calculator.sum() );
// console.log(“expect 50 : “, calculator.mul() );

// class Calculator {
//     private operand1: number = 0;
//     private operand2: number = 0;

//     setValues(operand1: number, operand2: number): void {
//         this.operand1 = operand1;
//         this.operand2 = operand2;
//     }

//     sum(): number {
//         return this.operand1 + this.operand2;
//     }

//     mul(): number {
//         return this.operand1 * this.operand2;
//     }
// }

// const calculator = new Calculator();
// calculator.setValues(5, 10);
// console.log("Expect 15:", calculator.sum());
// console.log("Expect 50:", calculator.mul());

// origin

// class Calculator {
//     private operand1: number = 0;
//     private operand2: number = 0;

//     setValues(operand1: number, operand2: number): void {
//         Calculator.operand1 = operand1;
//         Calculator.operand2 = operand2;
//     }

//     sum(): number {
//         return Calculator.operand1 + Calculator.operand2;
//     }

//     mul(): number {
//         return Calculator.operand1 * Calculator.operand2;
//     }
// }

// const calculator = new Calculator();
// calculator.setValues(5, 10);
// console.log("Expect 15:", calculator.sum());
// console.log("Expect 50:", calculator.mul());

// 10// let result = arr.map(function(item, index, array) {
//     // returns the new value instead of item
//    });
//    let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
//    console.log(lengths); // 5,7,6
//    //modify so that it logs array with index: item.length instead of just item.length
// //    console.log("expect 0: 5, 1: 7, 2: 6", lengths);
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item, index) => {
//     console.log(index + ": " + item.length);
//     return item.length;
// });

// console.log("Expect 0: 5, 1: 7, 2: 6", lengths);

// // 11. Get average age, round the result to keep only two decimals.
// // let array= [{name:"ram",age:29}, {name:"syam",age:40}, {name:"ganga",age:19}];
// // console.log(“expect 75.33”,getAverageAge(array));
// function findOldestMan(people) {
//     if (!people || people.length === 0) {
//         return null; // Handle the case when the array is empty or undefined
//     }

//     let oldestMan = null;

//     for (let i = 0; i < people.length; i++) {
//         const currentPerson = people[i];

//         if (currentPerson.gender === "male" && (!oldestMan || currentPerson.age > oldestMan.age)) {
//             oldestMan = currentPerson;
//         }
//     }

//     return oldestMan;
// }

// Create 3 objects, student1, student2, student3
// ➢ property studentId : 101, 102, 103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢push the students into an array, quizAnswers
// ➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g.,
// [3,1,2,4] and returns an array that has scores for each student. Their score is the number of
// correct answers.
// ➢ expect [ 3, 2, 3 ]

// type Student = {
//   stuudentId: number;
//   quizeAnswer: number[];
// };

// const student1: Student = { stuudentId: 101, quizeAnswer: [1, 1, 2, 4] };
// const student2: Student = { stuudentId: 102, quizeAnswer: [2, 1, 2, 2] };
// const student3: Student = { stuudentId: 103, quizeAnswer: [3, 1, 3, 4] };

// const students: Student[] = [student1, student2, student3];

// let correctanswers = [3, 1, 2, 4];
// function gradeQuizcompletion(
//   students: Student[],
//   correctanswers: number[]
// ): number[] {
//   let resultArr: number[] = [];

//   let scor: number;
//   for (const student of students) {
//     scor = 0;
//     let sans = student.quizeAnswer;

//     for (let i = 0; i < sans.length; i++) {
//       if (sans[i] === correctanswers[i]) {
//         scor++;
//       }
//     }
//     resultArr.push(scor);
//   }
//   return resultArr;
// }

// console.log(gradeQuizcompletion(students, correctanswers));

// const numbers = {
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444
//   };

//   const propertyOrder = ["one", "four", "three", "two"];

//   for (let ele of propertyOrder) {
//     console.log(numbers[ele]);
//   }

// ??q3*************************************************************************************************

let arr = [1, 2, 3, 4];

let result = arr.map((ele) => ele * ele);
console.log(result);

// let name=arr.map(baz)

// ??q4*************************************************************************************************
type Name = { firstName: string; lastName: string };

function firstLast(names: string[]): Name[] {
  let resultArr = names.map((ele) => {
    let spName = ele.split(" ");
    let obj = { firstName: spName[0], lastName: spName[1] };
    return obj;
  });
  return resultArr;
}
console.log(firstLast(["teddy wngel", "menge nati"]));

//***********************************************************************************************no 7777777777777777777777777777777***********************************************************88

const session1 = { userId: 1, duration: 60 };
const session2 = { userId: 2, duration: 45 };
const session3 = { userId: 2, duration: 30 };
const session4 = { userId: 3, duration: 15 };
const session5 = { userId: 3, duration: 75 };
const day1 = { sessions: [session1, session2], date: "01/10/2022" };
const day2 = { sessions: [session3, session4, session5], date: "01/10/2022" };
const dailyRecord = [day1, day2];
//**********************************************************************************************7AAAAAAAAAAAAAAAAAAAAAAAAAA*********************************************************88
type Session = {
  userId: number;
  duration: number;
};
type Day = {
  sessions: Session[];
  date: string;
};
//*****************************************************************************************7BBBBBBBBBBBBBBBBBBBBBBBBBBBBB*********************************************************88
function calculateDailyTotalDuration(day: Day): number {
  let total = 0;
  for (const session of day.sessions) {
    total += session.duration;
  }
  return total;
}

//**********************************************************************************************7CCCCCCCCCCCCCCCCCCCCCCC*******************************************************88
function calculateTotalDuration(dailyRecord: Day[]): number {
  let tot = 0;
  for (const dayy of dailyRecord) {
    tot += calculateDailyTotalDuration(dayy);
  }
  return tot;
}

console.log(calculateTotalDuration(dailyRecord));

//*********************************************************************************************7DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD******************************************************88

function getAllSessions(dailyRecord: Day[]): Session[] {
  let allsection: Session[] = [];
  for (const day of dailyRecord) {
    for (const section of day.sessions) {
      allsection = allsection.concat(section);
    }
  }
  return allsection;
}
console.log(getAllSessions(dailyRecord));

//********************************************************************************************7EEEEEEEEEEEEEEEEEEEEE****************************************************88

function filterForUserId(dailyRecord: Day[], num: number): Session[] {
  let allsec = getAllSessions(dailyRecord);

  let filterdSect = allsec.filter((section) => section.userId === num);
  return filterdSect;
}

console.log(filterForUserId(dailyRecord, 2));

//*********************************************************************************************7FFFFFFFFFFFFFFFFFFFFFFFFF******************************************************88

// function getAllDuration(dailyRecord:Day[]):number[]{

//     let getallse=getAllSessions(dailyRecord);

//     let resultAr:number[]=getallse.filter(wengel=>wengel.duration)
//     return resultAr;

// }

// console.log(getAllDuration(dailyRecord));

//*********************************************************************************************filter*array*****************************************************88
// let arr4=[2,5,7,8,9]

// function filterar(arr:number[]):number[]{
//     let resuArrr=arr.filter(num=>if(num>5){
//         return num}));
//     return resuArrr;
// }
// console.log(filterar(arr4));

// let arr4=[2,5,7,3,4,8,9]

// function filterar(arr:number[]):number[]{
//     let newArr=arr.filter(num=>{
// if(num%2!==0){
//     return true
// }
// else{
//     return false
// }
//     })
//     return newArr;
// }

// console.log(filterar(arr4));
///***********************************************************************************************gpt exer***********************************************************88
// Create a function called calculateSquareRoots that takes an array of numbers and returns a new array
// of objects. Each object in the new array should have a property called number which is the original number,
// and another property called squareRoot which is the square root of that number.[2,4,6,7]  [{2,4,5,7},{4,16,36,49}]

// type Num={numberr:number,square:number}

// function calcnum(num:number[]): Num[]{

// let result=num.map(ele=>{

// let obj={numberr:ele,square:Math.sqrt(ele)}
// return obj
// })

// return result;
// }

// console.log(calcnum([4,16,36,49]));

//     let onjename={firstName:ele.split(" ")[0],lastName:ele.split(" ")[1]}
//     return onjename
// })
// return resultArr;

// console.log(firstLast(["teddy wngel","menge nati"]));

// type flnames={
//     fname:string;
//     lname:string
// }

// function firstlastname(arr:string[]):flnames[]{

//     let resultArr=arr.map(name=>{
//         let obje:flnames={fname:name.split(" ")[0],lname:name.split(" ")[1]}
//         return obje
//     }

//         )
//         return resultArr
// }
// console.log(firstlastname(["teddy yoo","bajoo miyoo","tibag piyoo"]));

///q5splice and slicenum***********************************************************************************************
// function replaceEnds(arr:number[],num1:number,num2:number):number[]{
//     let newarr=arr.slice();
// newarr.splice(0,1,num1)
// newarr.splice(newarr.length-1,1,num2);

// let result2=[...arr];
// result2.splice(0,1,num2);
// result2.splice(result2.length-1,1,num1)

// return newarr,result2
// }
// console.log(replaceEnds([1,2,3,4,5],0,100))

// // ??q5*************************************************************************************************************

// const arr1=[1,2,3,4,5];

// const newarr=[...arr1];
// newarr.splice(0,1,0);
// newarr.splice(4,1,100);
// //let newarr2=newarr.splice(1,4);

// let result2=[...arr1]
//     result2.splice(0,1,100)
//     result2.splice(4,1,0)

// console.log(newarr);
// console.log(result2);

// // ??q7*************************************************************************************************************
// const session1 = { userId: 1, duration: 60 };
// const session2 = { userId: 2, duration: 45 };
// const session3 = { userId: 2, duration: 30 };
// const session4 = { userId: 3, duration: 15 };
// const session5 = { userId: 3, duration: 75 };
// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/10/2022" };
// const dailyRecord = [ day1, day2];

// type Session={
//     userId:number,
//     duration:number
// }

// type Day={
//     Sessions:Session[],
//     Date:string
// }

// type DalyRecord={
//     day:Day[]
//  }

// function calculateDailyTotalDuration(sessions:Session[]):number{

//     let total=0;
//     for(const session of sessions){
//         total+=session.duration;
//     }

// return total
// }
// console.log(calculateDailyTotalDuration(day2.sessions));

// function totalDuration(dalyrecord:Day[]):number{

//     let total=0;

//     for(const day of dalyrecord){
//         total+=calculateDailyTotalDuration(day.Sessions);
//     }
// return total;
// }

//console.log(totalDuration(dailyRecord));

// ??7D*calculateDaliyTotalDurat************************************************************************************************************

// function getAllSessions(dailyRecord:Day[]):Session[]{

//     let allsessions:Session[]=[]
// for(const day of dailyRecord){
//     allsessions=allsessions.concat(day.Sessions)
// }
// return allsessions;

// }
//   console.log(getAllSessions(dailyRecord));
//   // ??7*calculateDaliyTotalDurat************************************************************************************************************

//   function getallse(dailyRecord:any,userID:number){

//   let allsec=getAllSessions(dailyRecord);

//   let allsecuserID=allsec.filter(sec=>{sec.userId===userID})

// return allsecuserID;
//   }
//   console.log(getallse(dailyRecord,2));
//   // ??7D*calculateDaliyTotalDurat************************************************************************************************************
//   function getallse(dailyRecord:any,userID:number){
// let result:number[]=[];
//     let getalls=getAllSessions(dailyRecord);
//     for(const sec of getalls){
// result.push(sec.userId)
//     }

//   }

//   let result=getallse.map(sec=>sec.duration);

//   return result
