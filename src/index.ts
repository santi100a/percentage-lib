import assertPositive = require('@santi100a/assertion-lib/cjs/positive');
import assertTypeOf = require('@santi100a/assertion-lib/cjs/type-of');
import assertFinite = require('@santi100a/assertion-lib/cjs/finite');
import assertValidNumber = require('@santi100a/assertion-lib/cjs/valid-number');

/**
 * Calculates the percentage of a given number.
 * 
 * @param num The number for which the percentage needs to be calculated.
 * @param percentage The percentage value to calculate. Must be positive.
 * @returns The calculated percentage value.
 * 
 * @throws A `TypeError` If `num` is not a number or `percentage` is not a number.
 * @throws A `TypeError` If `percentage` is not positive.
 * 
 * @example
 * const result = percentage(50, 20);
 * console.log(result); // Output: 10
*/
function percentage(num: number, percentage: number): number;

function percentage(num: number, percentage: number) {
    assertFinite(num, 'num');
    assertValidNumber(num, 'num');
    assertTypeOf(num, 'number', 'num');
    assertTypeOf(percentage, 'number', 'percentage');
    assertPositive(percentage, 'percentage');

    return 0.01 * num * percentage;
}

export = percentage;
