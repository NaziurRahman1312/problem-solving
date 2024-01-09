function coinChange(coins: number[], amount: number): number {
    if(amount == 0) return 0;

    const len = coins.length;
    const dp: number[] = new Array(amount + 1);
    dp.fill(0);

    coins.sort(compareFn);

    for(let i = 1; i <= amount; i++){
        let result = 10001;
        for(let j = 0; j < len && coins[j] <= i; j++){
            if(i-coins[j] == 0 || dp[i-coins[j]] > 0) result = Math.min(result, 1 + dp[i-coins[j]]);
        }

        dp[i] = result == 10001 ? 0 : result;
    }

    return dp[amount] == 0 ? -1 : dp[amount];
};

function compareFn(a: number, b: number) {
if (a < b) {
return -1;
} else if (a > b) {
return 1;
}
return 0;
}