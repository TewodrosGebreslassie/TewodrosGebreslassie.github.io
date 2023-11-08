// // //write any code you want to test here and run with npm run app

// // let user = {
// //     name: "John",
// //     age: 30,
// //     sayHi: function(): void {
// //     // "this" is the "current object"
// //     console.log(this.name);
// //     console.log(this.age);
// //     console.log(this.user.name)
// //     }
// //    };
// //    user.sayHi(); // John
   
//    let x=5;
//    let y={x};
//    console.log(y); //// {x:5}


//    function sum(arr: number[]):number[] { return arr; }

//    const foo={sum,x};
//    console.log("foo.sum is: ", foo);
//    console.log("foo.sum is: ", foo.sum);


// // the output will be

//    //    { x: 5 }
// //    foo.sum is:  { sum: [Function: sum], x: 5 }
// //    foo.sum is:  [Function: sum]


const numbers= {one: 1, two: 22,three: 333, four: 444}
   const propertyOrder = ["one", "four ", "three", "two", ];


   for(proporty of propertyOrder){

    console.log(numbers[proporty]);


   }
