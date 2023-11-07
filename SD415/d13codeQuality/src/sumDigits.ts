
export function sumDigits(num: number) {
  let sum: number = 0;
 
  while (num) {
    sum = sum + (num % 10);
   
    num = Math.floor(num / 10);
  }
  return  sum;
}