/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = nums[0];
  let count = 1;
  let len = nums.length;

  for (let i = 1; i < len; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (candidate === nums[i]) count++;
    else count--;
    if (count > len / 2) return candidate;
  }

  return candidate;
};
