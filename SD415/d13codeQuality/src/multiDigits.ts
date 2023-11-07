export function multiDigits(num: number):Number {
  
  let product = 1;
  while (num) {
   
    product = product * (num % 10);
    num = Math.floor(num / 10);
  }
  return product;
}
