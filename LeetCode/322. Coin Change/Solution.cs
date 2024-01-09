public class Solution {
    public int CoinChange(int[] coins, int amount) {
        if(amount == 0) return 0;

        var len = coins.Length;
        var dp = new int[amount + 1];

        Array.Sort(coins);

        for(var i = 1; i <= amount; i++){
            var result = 10001;
            for(var j = 0; j < len && coins[j] <= i; j++){
                if(i-coins[j] == 0 || dp[i-coins[j]] > 0) result = Math.Min(result, 1 + dp[i-coins[j]]);
            }

            dp[i] = result == 10001 ? 0 : result;
        }

        return dp[amount] == 0 ? -1 : dp[amount];
    }
}