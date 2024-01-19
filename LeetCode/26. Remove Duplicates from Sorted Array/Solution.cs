public class Solution
{
    public int RemoveDuplicates(int[] nums)
    {
        var lastPos = 0;
        var len = nums.Length;

        for (var i = 1; i < len; i++)
            if (nums[i] != nums[lastPos]) nums[++lastPos] = nums[i];
        return lastPos + 1;
    }
}