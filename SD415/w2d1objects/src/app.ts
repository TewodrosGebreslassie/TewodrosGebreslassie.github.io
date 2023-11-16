//import { use } from "chai";



//use this file for any code you want to try out
interface User {
    name: string;
    age?: number
    }
    let name: User = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
    };
    delete name.age
    console.log(name);


    //Q1Object
    // ➢ Create 3 objects, student1, student2, student3
    // ➢ property studentId : 101, 102, 103 respectively
    // ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively

    type Studet={
        name:string
        studentId:Number;
        quizAnswers:Number[]
    }

    let student1:Studet={
        name:"student1",
        studentId:101,
        quizAnswers:[1, 1, 2,4]
    }
    let student2:Studet={
        name:"student2",
        studentId:202,
        quizAnswers: [2, 1, 2,2]
    }
    let student3:Studet={
        name:"student3",
        studentId:303,
        quizAnswers:[3, 1, 3,4]
    }


    function studentObject(stu1:Studet,stu2:Studet,stu3:Studet):Studet[]{

        
let result:Studet[]=[stu1,stu2,stu3]
     return result;
        

    }
    console.log(studentObject(student1,student2,student3));

// Q1b
// ➢ write a function to compute the score for a given student
// ➢ computeStudentScore(student1, [3, 1, 2, 4]) should return 3
// ➢ second argument is array of correct answers

function corectAns(stu:Studet,arr:Number[]):number{
    let count=0;
    for(let i=0;i<arr.length;i++){
if(stu.quizAnswers[i]===arr[i])
count++;
    }
    return count;
}
console.log(corectAns(student1,[3,1,2,4]));