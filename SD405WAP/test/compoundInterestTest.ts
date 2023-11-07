import { assert } from "chai";

import {compoundInterest} from "../src/compoundInterest";

describe("calculate Compound Interest", function () {

it("tests $100 for 1 year at 10% monthly compound", function(){
    const exact = compoundInterest(100, 10, 1);
    assert.strictEqual(+exact.toFixed(2), 110.47 );
    });

    it("tests $200 for 2 year at 10% monthly compound", function(){
        const exact = compoundInterest(200, 0.25, 2);
        assert.strictEqual(+exact.toFixed(2), 300.47 );
        });
});