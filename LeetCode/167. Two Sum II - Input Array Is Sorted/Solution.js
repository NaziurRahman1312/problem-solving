/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  let sum = 0;

  while (l < r) {
    sum = numbers[l] + numbers[r];
    if (sum > target) r--;
    else if (sum < target) l++;
    else break;
  }

  return [l + 1, r + 1];
};
