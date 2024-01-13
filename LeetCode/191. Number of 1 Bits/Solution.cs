public class Solution
{
    public int HammingWeight(uint n)
    {
        var result = Convert.ToString(n, 2);

        //for(var i = 0 ; i < 32; i++) result+= (n & (1 << i)) != 0 ? 1 : 0;

        return result.Count(bit => bit == '1');
    }
}