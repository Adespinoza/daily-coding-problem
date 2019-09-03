/**
*	Calculates the maximum profit from buying and selling stocks
*	@param {number[]} prices
*	@return {number}
*/
function getMaxProfit(prices) {
	if(prices.length === 0) return 0;

	let currMin = prices[0];
	let profit = 0;
	// Compare max profits
	for (let i = 0; i < prices.length; i++) {
		let currPrice = prices[i];
		profit = Math.max(profit, currPrice - currMin);
		currMin = Math.min(currMin, currPrice);
	}

	return profit;
}

console.log(getMaxProfit([9, 11, 8, 5, 7, 10]));	// 5
console.log(getMaxProfit([9, 11, 8, 5, 7, 0]));	// 2
console.log(getMaxProfit([9, 11]));	// 2
console.log(getMaxProfit([]));	// 0