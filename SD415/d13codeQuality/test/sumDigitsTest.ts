
 import {assert} from 'chai';
 import {sumDigits} from "../src/sumDigits";


describe("adds each digits", function(){
  it("checks sum of digits in 345 is 12", function(){
    assert.strictEqual(sumDigits(345), 12)
  })

   it("checks sum of digits in 102 is 3", function () {
     assert.strictEqual(sumDigits(102), 3);
   });

    it("checks sum of digits in 8 is 8", function () {
      assert.strictEqual(sumDigits(8), 8);
    });

     it("checks sum of digits in 10 is 1", function () {
       assert.strictEqual(sumDigits(10), 1);
     });
})

