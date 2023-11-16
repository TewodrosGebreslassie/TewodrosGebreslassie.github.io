

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */


/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */





/**
 * @returns {Function} closure that returns it's number
 */



  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...

  export function inArray(arr:Number[]) {
    return function (value:Number) {
      return arr.includes(value);
    };
  }
  //console.log(inArray([1,2]))//**************************************************************8888888 */
  
  // Implementing inBetween
  export function inBetween(start, end) {
    return function (value) {
      return value >= start && value <= end;
    };
  }
  
  // Implementing makeArmy
  export function makeArmy() {
    let shooters = [];
  
    for (let idx = 0; idx < 6; idx++) {
      let shooter = function () {
        console.log("I am shooter", idx);
        return idx;
      };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  // Implementing createShoppingCart
 