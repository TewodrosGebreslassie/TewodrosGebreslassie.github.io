 import { assert } from "chai";
 import{convertFahrenheit} from "../src/convertFahrenheit"

describe("converts to celsius", function(){
  it("it converts 32 to 0", function(){
    assert.strictEqual(convertFahrenheit(32), 0)
  })

  it("it converts 50 to 10", function () {
    assert.strictEqual(convertFahrenheit(50), 10);
  });

  it("it converts -40 to -40", function () {
    assert.strictEqual(convertFahrenheit(-40), -40);
  });
})
