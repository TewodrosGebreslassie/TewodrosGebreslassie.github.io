import { assert } from "chai"

import{calcDownpayment} from "../src/calcDownpayment"


describe("calculates downpayment", function(){

 it("tests houseCost of 25000 and downpayment 1250", function () {
   assert.strictEqual(calcDownpayment(25000), 1250);
 });

  it("tests houseCost of 75000 and downpayment 5000", function(){
    assert.strictEqual(calcDownpayment(75000),5000)
    });

   it("tests houseCost of 75000 and downpayment 15000", function(){
    assert.strictEqual(calcDownpayment(150000),15000)
   });

    it("tests houseCost of 300000 and downpayment 30000", function () {
      assert.strictEqual(calcDownpayment(300000), 30000);
    });


})


