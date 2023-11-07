export function computeSalesCommission(
  employment: boolean,
  salesAmount: number
): number {
  let commission: number = 0;
  if (employment === true) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      commission = salesAmount * 0.01;
    } else if (salesAmount > 500) {
      commission = 500 * 0.01 + (salesAmount - 500) * 0.02;
    }
  } else if (employment=== false) {
    if (salesAmount >= 300 && salesAmount <= 500) {
      commission = salesAmount * 0.02;
    } else if (salesAmount > 500) {
      commission = 500 * 0.02 + (salesAmount - 500) * 0.03;
    }
  }
  return commission;
}
// console.log(computeSalesCommission(2000, true));
