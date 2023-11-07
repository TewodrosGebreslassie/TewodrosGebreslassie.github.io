console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c) {
        return b;
    }
    else {
        return c;
    }
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let added = 0;
    for (let i = 0; i < arr.length; i++) {
        added += arr[i];
    }
    //IMPLEMENT THIS
    return added;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    //IMPLEMENT THIS
    let product = 1;
    for (let ele of arr) {
        product = product * ele;
    }
    return product;
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    //IMPLEMENT THIS
    if (arr.length === 0) {
        return 0;
    }
    let longestWordlength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordlength) {
            longestWordlength = arr[i].length;
        }
    }
    return longestWordlength;
}
// 4. Reverse an Array
// Arrays have a reverse method that changes the array by inverting the order in which its elements
// appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
// reverseArray, takes an array as argument and produces a new array that has the same elements in
// the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
// modifies the array given as argument by reversing its elements. This is a method that is very space
// efficient. It does not create a new array or copy of the array. It returns the original array. Neither may
// use the standard reverse method.
// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue)
export function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
export function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, columns) {
    //IMPLEMENT THIS
    let result = [];
    let counter = 1;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(counter++);
        }
        result.push(row);
    }
    return result;
}
