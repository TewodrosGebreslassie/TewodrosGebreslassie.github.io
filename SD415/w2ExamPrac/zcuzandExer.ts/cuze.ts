// Recall the makeCounter code:
// function makeCounter(): ()=>number { 
//   let count = 0;   
//   return function():number { count++; return count; };
// }
// Rewrite makeCounter to that the callback function it returns can take an increment as an argument.  This will allow the caller to increase the count by a given number.  E.g., 
// const myCount = makeCounter();
// myCount(10);  // will return the count incremented by 10.


function makeCounter(): (increment: number) => number {
    let count = 0;
  
    return function(increment: number): number {
      count += increment;
      return count;
    };
  }
  
  const myCount = makeCounter();
  
  console.log(myCount(10));   
};
}

const myCounter = makeCounter();

console.log(myCounter());    // Increment by 1 (no warning)
console.log(myCounter(10));  // Warning: increment was by a value greater than 1: 1