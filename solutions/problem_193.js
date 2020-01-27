/**
 * Calculates max profit you can obtain
 * Time Complexity: O(n)
 * @param  {number[]} prices
 * @param  {number} fees
 * @return {number}
 */
function maxProfit(prices, fees) {
  // set initial state
  let cash = 0;
  let hold = -prices[0];

  // interate, calculating hold vs cash
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fees);
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
}

console.log(maxProfit([1, 3, 2, 8, 4, 10], 2)); // 13 - 4 = 9
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
