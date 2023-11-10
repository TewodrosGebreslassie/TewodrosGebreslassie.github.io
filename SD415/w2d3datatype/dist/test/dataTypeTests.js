/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import {
  readNumber,
  readNumber2,
  getRandomNumber,
  ucFirst,
  checkSpam,
  truncate,
  extractCurrencyValue,
  getMaxSubSum,
  camelize,
} from "../src/app.js";
import { describe, it } from "node:test";
//  [‘abc’ ‘123a’, ‘ab123’, ‘123.3’, ‘123’]
describe("is it number", function () {
  it("check if 12.34 is a numberr!", function () {
    assert.strictEqual(readNumber(["12.23"]), "12.23is Ok");
  });
});
describe("is it number", function () {
  it("check abc is not a numberr!", function () {
    assert.strictEqual(readNumber2(["abc"]), "is not ok");
  });
});
describe("ucFirst", function () {
  it("Uppercases the first symbol", function () {
    assert.strictEqual(ucFirst("john"), "John");
  });
  it("Doesn't die on an empty string", function () {
    assert.strictEqual(ucFirst(""), "");
  });
});
describe("getRandomNumber", function () {
  it("it should generate number b/n max and min", function () {
    for (let i = 0; i < 10; i++) {
      const min = 5;
      const max = 10;
      const randomNumber = getRandomNumber(min, max);
      assert.isAtLeast(randomNumber, min);
      assert.isAtMost(randomNumber, max);
    }
  });
});
describe("checkSpam", function () {
  it('finds spam in "free xxxxx"', function () {
    assert.strictEqual(
      checkSpam("not thrsjdkfcjsdhzjfxck free xxxxx ", [
        "buy ViAgRA now",
        "free xxxxx",
        "innocent rabbit",
      ]),
      true
    );
  });
  it('no spam in "innocent rabbit"', function () {
    assert.strictEqual(
      checkSpam("not thrsjdkfcjsdhzjfxck free ", [
        "buy ViAgRA now",
        "free xxxxx",
        "innocent rabbit",
      ]),
      false
    );
  });
});
describe("truncate", function () {
  it("truncate the long string to the given length (including the ellipsis)", function () {
    assert.equal(
      truncate("What I'd like to tell on this topic is:", 20),
      "What I'd like to te…"
    );
  });
  it("doesn't change short strings", function () {
    assert.equal(truncate("Hi everyone!", 20), "Hi everyone!");
  });
});
describe("extractCurrencyValue", function () {
  it("for the string $120 returns the number 120", function () {
    assert.strictEqual(extractCurrencyValue("$120"), 120);
  });
});
describe("getMaxSubSum", function () {
  it("maximal subsum of [1, 2, 3] equals 6", function () {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });
  it("maximal subsum of [-1, 2, 3, -9] equals 5", function () {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });
  it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function () {
    assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });
  it("maximal subsum of [-2, -1, 1, 2] equals 3", function () {
    assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
  });
  it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function () {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });
  it("maximal subsum of [] equals 0", function () {
    assert.equal(getMaxSubSum([]), 0);
  });
  it("maximal subsum of [-1] equals 0", function () {
    assert.equal(getMaxSubSum([-1]), 0);
  });
  it("maximal subsum of [-1, -2] equals 0", function () {
    assert.equal(getMaxSubSum([-1, -2]), 0);
  });
  it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function () {
    assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
  });
});
describe("camelize", function () {
  it("leaves an empty line as is", function () {
    assert.equal(camelize(""), "");
  });
  it("turns background-color into backgroundColor", function () {
    assert.equal(camelize("background-color"), "backgroundColor");
  });
  it("turns list-style-image into listStyleImage", function () {
    assert.equal(camelize("list-style-image"), "listStyleImage");
  });
  it("turns -webkit-transition into WebkitTransition", function () {
    assert.equal(camelize("-webkit-transition"), "WebkitTransition");
  });
});
// describe("ucFirst", function() {
//   it('Uppercases the first symbol', function() {
//     assert.strictEqual(ucFirst("john"), "John");
//   });
//   it("Doesn't die on an empty string", function() {
//     assert.strictEqual(ucFirst(""), "");
//   });
// });
// describe("checkSpam", function() {
//   it('finds spam in "buy ViAgRA now"', function() {
//     assert.strictEqual(checkSpam('buy ViAgRA now'), true);
//   });
//   it('finds spam in "free xxxxx"', function() {
//     assert.strictEqual(checkSpam('free xxxxx'), true);
//   });
//   it('no spam in "innocent rabbit"', function() {
//     assert.strictEqual(checkSpam('innocent rabbit'), false);
//   });
// });
// describe("truncate", function() {
//   it("truncate the long string to the given length (including the ellipsis)", function() {
//     assert.equal(
//       truncate("What I'd like to tell on this topic is:", 20),
//       "What I'd like to te…"
//     );
//   });
//   it("doesn't change short strings", function() {
//     assert.equal(
//       truncate("Hi everyone!", 20),
//       "Hi everyone!"
//     );
//   });
// });
// describe("extractCurrencyValue", function() {
//   it("for the string $120 returns the number 120", function() {
//     assert.strictEqual(extractCurrencyValue('$120'), 120);
//   });
// });
// describe("getMaxSubSum", function() {
//     it("maximal subsum of [1, 2, 3] equals 6", function() {
//       assert.equal(getMaxSubSum([1, 2, 3]), 6);
//     });
//     it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
//       assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
//     });
//     it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
//       assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
//     });
//     it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
//       assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
//     });
//     it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
//       assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
//     });
//     it("maximal subsum of [] equals 0", function() {
//       assert.equal(getMaxSubSum([]), 0);
//     });
//     it("maximal subsum of [-1] equals 0", function() {
//       assert.equal(getMaxSubSum([-1]), 0);
//     });
//     it("maximal subsum of [-1, -2] equals 0", function() {
//       assert.equal(getMaxSubSum([-1, -2]), 0);
//     });
//     it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
//       assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
//     });
//   });
// describe("camelize", function() {
//     it("leaves an empty line as is", function() {
//       assert.equal(camelize(""), "");
//     });
//     it("turns background-color into backgroundColor", function() {
//       assert.equal(camelize("background-color"), "backgroundColor");
//     });
//     it("turns list-style-image into listStyleImage", function() {
//       assert.equal(camelize("list-style-image"), "listStyleImage");
//     });
//     it("turns -webkit-transition into WebkitTransition", function() {
//       assert.equal(camelize("-webkit-transition"), "WebkitTransition");
//     });
//   });
