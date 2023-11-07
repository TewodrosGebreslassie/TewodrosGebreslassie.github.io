
export function computeSalesCommission (issalrid:boolean, sales:number){
    let commission:number = 0;
    if(true){
      if(sales<300){
        commission =0;
      }else if(sales>=300 && sales<=500){
        commission=sales*0.01;
      }else if(sales>500){
        commission=(500*0.01) +(sales-500)*0.02;
      }
  
    }
    else {
      if(sales>=300 && sales<=500){
        commission = sales*0.02;
      }else if(sales>500){
        commission = 500*0.02 + (sales-500)*0.03
      }
    }return commission
  }
  
//   console.log(calcCommission(2000, "notsalaried"))
 console.log(computeSalesCommission(true, 300))