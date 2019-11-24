/**
 * Given array of stock prices, returns max profit
 * @param  {number[]} stocks
 * @param  {number} k
 * @return {number}
 */
function buySellStocks(stocks, k) {
  // Base case
  if (k <= 0) return 0;

  return calculateProfit(stocks, stocks.length, k);
}

/**
 * Bottom-up DP approach
 * @param  {number} stocks
 * @param  {number} n
 * @param  {number} k
 * @return {number}
 */
function calculateProfit(stocks, n, k) {
  const profit = [...Array(k + 1)].map(() => Array(n + 1).fill(0));

  // Calculate DP using bottom-up approach
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j < n; j++) {
      let currMax = 0;
      for (let m = 0; m < j; m++) {
        // Calculate current previous difference
        currMax = Math.max(currMax, stocks[j] - stocks[m] + profit[i - 1][m]);
        // Calculate profit at time m
        profit[i][j] = Math.max(profit[i][j - 1], currMax);
      }
    }
  }

  return profit[k][n - 1];
}

// console.assert(buySellStocks([5, 2, 4, 0, 1], 2) === 3);
// console.assert(buySellStocks([10, 22, 5, 75, 65, 80], 2) === 87);
