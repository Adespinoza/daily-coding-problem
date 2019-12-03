/**
 * Minimum number of coins required to make n cents
 * @param  {number[]} coins
 * @param  {number} n
 * @return {number}
 */
function maxCoins(coins, n) {
  const dp = [...Array(n + 1)].fill(n + 1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        // min{𝐹[i−𝑐1],𝐹[i−𝑐2],𝐹[i−𝑐3], 𝐹[i−𝑐4]} + 1
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[n] > n ? -1 : dp[n];
}

console.log(maxCoins([1, 5, 10, 25], 16)); // 3
