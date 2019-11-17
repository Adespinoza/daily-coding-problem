/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: false}}] */

/**
 * Finds maximum number of coins to collect
 * @param  {number[][]} coins
 * @return {number}
 */
function maxCoinCollect(coins) {
  const m = coins.length - 1;
  const n = coins[0].length - 1;

  return calculateMinCost(coins, m, n);
}

/**
 * Creates DP matrix representation
 * @param  {number[][]} coins
 * @param  {number} m
 * @param  {number} n
 * @return {number}
 */
function calculateMinCost(coins, m, n) {
  // Create DP matrix structure
  const dp = [...Array(m + 1)].map(() => Array(n + 1).fill(0));

  dp[0][0] = coins[0][0];

  // Initialize first column of total coins
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + coins[i][0];
  }

  // Initialize first row of total coins
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + coins[0][j];
  }

  // Find rest of path
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + coins[i][j];
    }
  }

  return dp[m][n];
}

console.log(maxCoinCollect([[0, 3, 1, 1], [2, 0, 0, 4], [1, 5, 3, 1]])); // 12
