"use strict";
var assertPositive = require("@santi100a/assertion-lib/cjs/positive");
var assertTypeOf = require("@santi100a/assertion-lib/cjs/type-of");
var assertFinite = require("@santi100a/assertion-lib/cjs/finite");
var assertValidNumber = require("@santi100a/assertion-lib/cjs/valid-number");
function percentage(num, percentage) {
    assertFinite(num, 'num');
    assertValidNumber(num, 'num');
    assertTypeOf(num, 'number', 'num');
    assertTypeOf(percentage, 'number', 'percentage');
    assertPositive(percentage, 'percentage');
    return 0.01 * num * percentage;
}
module.exports = percentage;
