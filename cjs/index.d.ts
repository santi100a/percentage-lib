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
declare function percentage(num: number, percentage: number): number;
export = percentage;
