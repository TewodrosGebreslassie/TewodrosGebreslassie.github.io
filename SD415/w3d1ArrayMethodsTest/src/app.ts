// type Sections

import { type } from "os";

// function getAllSecton(dailyRecord: day[]):Section[]{

//     let sectioArr:section[]=[];

//     for(const day of dailyRecod){

//         for(let i=0;i<day.section.length;i++){
//             sectioArr.push(day.section[i])
//         }

//     }

// }

// //for each second mated using concat

// for(const day of daliyRecord){

//     let concatArr=concatArr.concat(day.section)

// }

// ///filter uing userid

const session1 = { userId: 1, duration: 60 };
const session2 = { userId: 2, duration: 45 };
const session3 = { userId: 2, duration: 30 };
const session4 = { userId: 3, duration: 15 };
const session5 = { userId: 3, duration: 75 };
const day1 = { sessions: [session1, session2], date: "01/10/2022" };
const day2 = { sessions: [session3, session4, session5], date: "01/10/2022" };
const dailyRecord = [day1, day2];

// day1, d2==> for day of indalyrec==>

//A data type//////////////////////////////////////////////////////////////////////////////////////////////////////////
type Session = {
  userId: number;
  duration: number;
};
type Day = {
  sessions: Session[];
  date: string;
};
//B calculate daily total duration expect 120, calculatdtD(day 2.section);*******************************************************
// function calculateDailyTotalDuration(sections: Session[]): number {
//   let totaldur: number = 0;
//   for (const section of sections) {
//     totaldur += section.duration;
//   }
//   return totaldur;
// }
// console.log(calculateDailyTotalDuration(day1.seessions))

// C calculate total duration  daly record  as parameter::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// function calculateTotalDuration(dailyRecord: Day[]): number {
//   let total = 0;

//   for (const days of dailyRecord) {
//     for (const section of days.sessions) {
//       total += section.duration;
//     }
//   }
//   return total;
// }

//     for(const day of dailyRecord){
//       total+=calculateDailyTotalDuration(day.sessions)
//     }
//     return total;
//   }

//   console.log(calculateTotalDuration(daliyRecord));

//////D.use the concate methode to return  an array with all the sessions {session1,session2,se......5].....(getAllSession(dailyRecord))}/////////////////////////////////////////////////////////////////////////

function getAllSessions(dailyRecord: Day[]): Session[] {
  let allSessions: Session[] = [];
  for (const days of dailyRecord) {
    allSessions = allSessions.concat(days.sessions);
  }
  return allSessions;
}
console.log(getAllSessions(dailyRecord));

/////E use apppropriate arry method to get all sessions using userId ==>getall section for userdalyrecored(dalyrecord,Id)

function getallsectionforuser(dailyRecord: Day[], user: number): Session[] {
  let filterd = getAllSessions(dailyRecord).filter(
    (elemt) => elemt.userId === user
  );
  return filterd;
}
console.log(getallsectionforuser(dailyRecord, 2));

///fff using duration times[60,45,30,15,75]
// function getAllDurations(dailyRecord:Day[]):number[]{
//     //const allSessions=getAllSessions(dailyRecord);
//     const allDuration=getAllSessions(dailyRecord).map(session=>session.duration);
//     return allDuration;
//   }
//   console.log(getAllDurations(dailyRecord));
function getAllDurations(dailyRecord: Day[]): number[] {
  let allduration: number[] = [];

  for (const day of dailyRecord) {
    for (const section of day.sessions) {
      allduration.push(section.duration);
    }
  }
  return allduration;
}

console.log(getAllDurations(dailyRecord));

// function getAllSessions(dailyRecord: Day[]): Session[] {
//   let sessArr: Session[] = [];
//   for (const days of dailyRecord) {
//     sessArr = sessArr.concat(days.sessions);
//   }
//   return sessArr;
// }
//console.log(getAllSessions(dailyRecord));

// function  getAllSession(dailyRecord:Day[]):Session[]{

//     let allsections:Session[]=[]

//     for(const day of dailyRecord){

//         for(const section of day.sessions){

// allsections.push(section);

//         }

//     }
// return allsections;

// }

// console.log(getAllSession(daliyRecord));

// function getAllSession(daliyRecord:day[]):Sections[], num:number):section[]{

// const sectionArr:Sections[]=[];
// let sectioArr=daliyRecod.filter(user=>day.section.userId===2)=>

// for(const day of daliyRecord){

//     for(const section of day.sections){

//         let userid=section.filter(userId==2)=>{
//             section.push(userid)
//         }
//     }
// }

// //second option
// function getallsection(allsection, userId:number){

// const allsection= allsection.filter(userID)=>{
// if(userId===2){
//     return userId
// }

// }

// }

// ///f

// }



// function squaredArr(arr:number[]): number[]{

//   let squaredArr=arr.map(num=>(num*num))
  
// return squaredArr
  
//   }
//   const array123 = [1, 2, 3]
//   console.log(squaredArr(array123))

//   const arr123 = [1, 2, 3];

// function reducefun(arr:number[]):number[]{
// const sum = arr123.reduce((total, num) => total + num, 0);

// console.log(sum);
// }
// console.log(reducefun(arr123))


// Part 1 of 1 -

// Question 8 of 9	0 Points
// /* write a function, maxPoints, to find and return the maximum points of any single player.   */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 4:",  maxPoints(players));

// function maxPoints(players) {
//   let maxPoints = 0;

//   for (const player of players) {
//     let playerPoints = 0;
    
//     for (const point of player.points) {
//       playerPoints += point;
//     }

//     if (playerPoints > maxPoints) {
//       maxPoints = playerPoints;
//     }
//   }

//   return maxPoints;
// }

// console.log("expect 4:",  maxPoints(players));

// type Player = {
//   name: string;
//   points: number[];
// };

// function maxPoints(players: Player[]): number {
//   let maxPoints = 0;

//   for (const player of players) {
//     let playerPoints = 0;
    
//     for (const point of player.points) {
//       playerPoints += point;
//     }

//     if (playerPoints > maxPoints) {
//       maxPoints = playerPoints;
//     }
//   }
//   return maxPoints;
// }


///function 
// function logger(foo:number):void {
//   console.log(foo) 
// }
// let var1=logger;
// console.log(var1); ///the function logger to the variable var1. So, var1 now holds a reference to the logger function./the function it sel.This will log the function itself because var1 holds a reference to the logger function.
//let var2=logger(2);  // calling the logger function with the argument 2,//Logs 2, var2 is undefined// function logger does not have a return statement (returns void), so var2 is assigned the value undefined.
// console.log(var2);


// function loggere(x:number,y:number):number {
//  return y*x;
// }
// let vare1=loggere(10,2);
// console.log(vare1);


// no 4

type Name={
  fname:string,
  lname:string
}

function firstLast(arr: string[]):Name[]{

  let firstLastname=arr.map(name=>name.split(" "))



  return 0;
  
}