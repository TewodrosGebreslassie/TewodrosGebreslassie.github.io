export function calcDownpayment(houseCost: number) {
  let downpayment: number = 0;
  if (houseCost < 50000) {
    downpayment = houseCost * 0.05;
  } else if (houseCost >= 50000 && houseCost < 100000) {
    downpayment = 2500 + (houseCost - 50000) * 0.1;
  } else if (houseCost >= 100000 && houseCost < 200000) {
    downpayment = 7500 + (houseCost - 100000) * 0.15;
  } else if (houseCost >= 200000) {
    downpayment = 20000 + (houseCost - 200000) * 0.1;
  }
  return downpayment;
}
console.log(calcDownpayment(250000));
