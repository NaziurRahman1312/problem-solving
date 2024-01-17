public class Solution
{
    public int[] TwoSum(int[] numbers, int target)
    {
        int l = 0;
        int r = numbers.Length - 1;
        int sum;

        while (l < r)
        {
            sum = numbers[l] + numbers[r];

            if (sum == target) return new int[] { l + 1, r + 1 };
            if (sum > target) r--;
            else l++;
        }

        return new int[] { l, r };
    }
}