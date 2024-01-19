class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        lastPos = 0
        for i in range(1, len(nums), 1):
            if nums[i] != nums[lastPos] :
                lastPos += 1
                nums[lastPos] = nums[i]
        return lastPos + 1
        