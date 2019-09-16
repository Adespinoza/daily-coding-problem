/**
 * Checks if two subsets are possible and finds does the subset calculations
 * @param {number[]} nums
 * @return {boolean}
 */
function getSubsetSum(mainSet) {
	// Get mainSet total sum
	let total = 0;
	for(let i = 0; i < mainSet.length; i++) {
		total += mainSet[i];
	}

	// Catch even case sets
	if (total % 2 === 1) return false;

	// Find subset equal half of total
	total = Math.floor(total / 2);

	return calcSubetSum(mainSet, total);
}

/**
*	Returns T/F whether it can be partitioned into two subsets whose sums are the same
*	@param {number[]} mainSet
*	@param {number} total
*	@return {boolean}
*/
function calcSubetSum(mainSet, target) {
	const dp = Array(target + 1).fill(false);
   
   dp[0] = true;

	if (mainSet[0] === target) return true;
	if (mainSet[0] <= target) dp[mainSet[0]] = true;

	for(let i = 1; i < mainSet.length; i++) {
		const num = mainSet[i];

		if (num === target) return true;

		// Go backwards from target
		for(let j = target; j > 0; j--) {
			if (j - num >= 0) dp[j] = dp[j] || dp[j - num];
			else continue;
		}
	}
	return dp[target];
}

console.log(getSubsetSum([15, 5, 20, 10, 35, 15, 10]));	// true
console.log(getSubsetSum([15, 5, 20, 10, 35]));	// false