import { assert } from "chai";
import { calcTemperature } from "../src/calcTemperature";

describe("Temperature Conversion", function () {
  it("should convert 0 Celsius to Fahrenheit", function () {
    const result = calcTemperature(0, "celsius");
    assert.strictEqual(result, "Temperature is: 32 degrees Fahrenheit");
  });

  it("should convert 32 Fahrenheit to Celsius", function () {
    const result = calcTemperature(32, "fahrenheit");
    assert.strictEqual(result, "Temperature is: 0 degrees Celsius");
  });

  it("should provide a message for invalid input", function () {
    const result = calcTemperature(0, "kelvin");
    assert.strictEqual(result, "Provide valid input");
  });
});
