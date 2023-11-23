


function evenRecurse(n) {
    if (n < 0) {
      return 0;
    }
    if (n % 2 === 0) {
      console.log(n);
    }
    evenRecurse(n - 1);
  }
  
  evenRecurse(100);