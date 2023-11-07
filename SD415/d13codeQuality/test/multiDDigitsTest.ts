import { assert } from "chai";
import { multiDigits } from "../src/multiDigits";

describe("multiplys each digits", function () {
  it("checks product of digits in 345 is 60", function () {
    assert.strictEqual(multiDigits(345), 60);
  });

  it("checks product of digits in 102 is 0", function () {
    assert.strictEqual(multiDigits(102), 0);
  });

  it("checks product  of digits in 8 is 8", function () {
    assert.strictEqual(multiDigits(8), 8);
  });

  it("checks product  of digits in 10 is 1", function () {
    assert.strictEqual(multiDigits(10), 0);
  });
});
