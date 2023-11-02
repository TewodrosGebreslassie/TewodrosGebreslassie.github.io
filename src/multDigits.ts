

export function multDigits(num: number) {
    let sum: number = 0;
    let product = 1;
    while (num) {
      sum = sum + (num % 10);
      product = product * (num % 10);
      num = Math.floor(num / 10);
    }
    return "sum is :" + sum + ", " + "product is : " + product;
  }
  console.log(multDigits(1234));