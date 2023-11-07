import { assert } from "chai";
import { calcDistance } from "../src/calcDistance";


describe("calculates distance between coordinates", function(){
  it("disctance from (0,0) to (5,5) is 7.07", function () {
    let roundedDis = calcDistance(10,10, 50, 40);
    assert.strictEqual(+roundedDis.toFixed(2),50);
  });

   it("disctance from (-10,-5) to (10,5) is 20.62", function () {
     let roundedDis = calcDistance(-10,-5, 10,5);
     assert.strictEqual(+roundedDis.toFixed(2), 22.36);
   });

    it("disctance from (0,0) to (5,5) is 7.07", function () {
      let roundedDis = calcDistance(0, 0, 5, 5);
      assert.strictEqual(+roundedDis.toFixed(2),7.07);
    });
})