/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let lastPos = 0;
  let len = nums.length;
  for (let i = 1; i < len; i++)
    if (nums[i] != nums[lastPos]) nums[++lastPos] = nums[i];
  return lastPos + 1;
};
