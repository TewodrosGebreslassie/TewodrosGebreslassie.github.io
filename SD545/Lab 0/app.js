// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

// const arr = [20, 30, 50, 60, 60, 20, 10, 11, 13];

// function sum(arr) {
//   return arr.reduce((accumulator, currentValue) => {
//     if (currentValue > 20) {
//       return accumulator + currentValue;
//     } else {
//       return accumulator;
//     }
//   }, 0);
// }
// sum(arr);
const arr = [20, 30, 50, 60, 60, 20, 10, 11, 13];

function sum(arr) {
  let sum = 0;
  for (let ele of arr) {
    if (ele > 20) {
      sum += ele;
    }
  }
  console.log(sum);
}

sum(arr);

// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

// const getNewArray = function (arr) {
//   const result = [];
//   for (let ele of arr) {
//     if (ele.length >= 5) {
//       for (let i = 0; i < ele.length; i++) {
//         if (ele[i] === "a") {
//           result.push(ele);
//           break;
//         }
//       }
//     }
//   }
//   return result;
// };

const getNewArray = (arrStr) => arrStr.filter((str) => str.length >= 5 && str.includes("a"));

console.log(getNewArray(["hello", "halloo", "helllo", "helola"]));

// 3. Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const result = (str, arr, arrStr) => {
  return [...str, ...arr, ...arrStr];
};
const str = "hi";
const arr1 = [1, 2, 3];
const arrStr = ["Hello", "world"];
console.log(result(str, arr1, arrStr));
