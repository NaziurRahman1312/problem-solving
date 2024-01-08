/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    a = i + 1;
    while (a < len && nums[a] == nums[a - 1] + 1) a++;
    a--;

    if (a == i) result.push(String(nums[i]));
    else result.push(String(nums[i]) + "->" + String(nums[a]));

    i = a;
  }

  return result;
};
