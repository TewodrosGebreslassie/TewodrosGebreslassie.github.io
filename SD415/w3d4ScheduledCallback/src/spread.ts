/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

//a
export function copyArray<T>(arr: T[]): T[] {
  const newArr = [...arr];
  return newArr;
}

//b
export function concat<T>(arr1: T[], arr2: T[]): T[] {
  const newArr = arr1.concat(arr2);
  return newArr;
}

//c
export function findMin(...arr1: number[]): number {
  let min = arr1.reduce((acc, current) => {
    acc = Math.min(acc, current);
    return acc;
  }, Infinity);
  return min;
}
export function findProduct(...arr:number[]):number{
    const product = arr.reduce((mul, current)=>{
        mul *=current; 
        return mul;
    },1)
    return product;
}
//