

export function compoundInterest(
    intialAmount: number,
    interestRate: number,
    yearToCompound: number
  ) {
    let monthlyRate = interestRate / 12;
    let balance = intialAmount;
    for (let month = 1; month <= yearToCompound * 12; month++) {
      let interest = balance * monthlyRate;
  
      balance = balance + interest;
    }
    return balance;
  }
  //console.log(compoundInterest(200, 0.1, 1));