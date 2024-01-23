public class Solution
{
    public int[] PlusOne(int[] digits)
    {
        var carry = 1;
        var len = digits.Length;
        for (var i = len - 1; i >= 0; i--)
        {
            carry += digits[i];
            digits[i] = carry % 10;
            carry = carry / 10;
        }

        if (carry == 1)
        {
            var result = new int[len + 1];
            result[0] = 1;

            return result;
        }
        else return digits;
    }
}