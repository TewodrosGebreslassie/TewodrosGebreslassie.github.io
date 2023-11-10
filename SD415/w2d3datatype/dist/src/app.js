// • Can I add a string property?
// yes we add string proporty first we convert is to number by using + pluse or parsInt and add the if the value is not a number it will print out NAN but if both values we want add are a string value it concatnet it using +
// r readNumber function should take an array of strings as input and
// return the first element of the array that is a regular number in a string. E.g., ‘123’,
// ’12.3’ are ok, ‘123abc’ is not ok. Write a Mocha test that tests against the array [‘abc’,
// ‘123a’, ‘ab123’, ‘123.3’, ‘123’]
export function readNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            return arr[i] + "is Ok";
        }
    }
    return null;
}
export function readNumber2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            return arr[i] + "is Ok";
        }
    }
    return "is not ok";
}
function occasionalInfiniteLoop() {
    let count = 0;
    while (true) {
        count++;
        // Introduce a condition to occasionally break the loop
        if (count > 10000 && Math.random() < 0.1) {
            break;
        }
    }
    console.log("Exited the loop!");
}
occasionalInfiniteLoop();
//console.log(readNumber2(["1A2.3","123abc"]))
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// // /**
//  * 
// function readNumber(arr: string[]:string): any {
// for(let ele of arr){
// if(parseFloat(ele)===ele){
// return ele+"are Ok";
// }
// }
// return null;
// }
// console.log(readNumber(["12.3","123abc"]))
/* @param {*} str
*/
export function ucFirst(str) {
    if (str.length === 0) {
        return "";
    }
    let newstr = str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        newstr += str[i];
    }
    return newstr;
}
console.log(ucFirst(""));
/**
 *
 * @param {*} str
 */
export function checkSpam(str, checker) {
    for (let ele of checker) {
        if (str.toLowerCase().includes(ele.toLowerCase())) {
            return true;
        }
    }
    return false;
}
//console.log(checkSpam("not thrsjdkfcjsdhzjfxck free ",(['buy ViAgRA now','free xxxxx','innocent rabbit'])));
// export function checkSpam(str: string): boolean {
//   const spamKeyWords = ["buy ViAgRA now", "free xxxxx"];
//   const lowerCaseStr = str.toLowerCase();
//   for (let i = 0; i < spamKeyWords.length; i++) {
//     if (lowerCaseStr.includes(spamKeyWords[i].toLowerCase())) {
//       return true;
//     }
//   }
//   return false;
// }
/**
 *
 * @param {*} str
 * @param {*} maxlength
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }
    else {
        return str;
    }
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
export function camelize(str) {
    const words = str.split("-");
    let camelized = words[0];
    for (let i = 1; i < words.length; i++) {
        camelized += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return camelized;
}
export function extractCurrencyValue(str) {
    let result = str.slice(1);
    return Number(result);
}
// /**
//  * 
//  * @param {*} str 
//  * @param {*} maxlength 
//  */
// export   function truncate(str, maxlength) {
//   }
// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} the total of the maximal subarray
//  */
// export function getMaxSubSum(arr) {
// }
// export function camelize(str) {
//   }
// export function extractCurrencyValue(){} 
