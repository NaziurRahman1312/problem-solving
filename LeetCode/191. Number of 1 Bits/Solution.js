/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var count = 0;

  while (n !== 0) {
    count += n & 1;

    n >>>= 1;
  }

  return count;
};
