/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let alen = a.length - 1;
  let blen = b.length - 1;
  let result = "";

  while (alen >= 0 || blen >= 0) {
    if (alen >= 0 && blen >= 0) {
      carry += a[alen] - "0" + (b[blen] - "0");

      if (carry === 3) {
        result = "1".concat(result);
        carry = 1;
      } else if (carry === 2) {
        result = "0".concat(result);
        carry = 1;
      } else {
        result = (carry === 1 ? "1" : "0").concat(result);
        carry = 0;
      }
    } else {
      carry += alen >= 0 ? a[alen] - "0" : b[blen] - "0";

      if (carry === 3) {
        result = "1".concat(result);
        carry = 1;
      } else if (carry === 2) {
        result = "0".concat(result);
        carry = 1;
      } else {
        result = (carry === 1 ? "1" : "0").concat(result);
        carry = 0;
      }
    }

    alen--;
    blen--;
  }

  result = (carry === 1 ? "1" : "").concat(result);

  return result;
};
