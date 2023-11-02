// import { assert } from "chai";

// import {multDigits} from "../src/multDigits";

// describe("calculate Compound Interest", function () {

// it("multiplay the nuber Digits", function(){
//     const exact = multDigits(10);
//     assert.strictEqual(exact,  );
//     });

 
// });
console.log(multDigits(1234));

import { assert } from "chai";
import { multDigits } from "../src/multDigits";

describe("Multiply the Digits of a Number", function () {
  it("should multiply the digits of a number", function () {
    const result = multDigits(10);
    assert.strictEqual(result, "sum is: 1, product is: 0");
  });
});