/**
 * Finds the smallest number of squared integers
 * @param  {number} n
 * @return {number}
 */
function smallestSquareSum(n) {
  // base case - out of range
  if (n < 3) return 0;

  const dp = Array(n + 1);

  // getMinSquares table for base case entries
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    // assign the worst case
    // which would be as 1^1 + 1^1 + ... until n
    dp[i] = i;

    // check square cases smaller than current value
    for (let x = 1; x <= Math.ceil(i ** 2); x++) {
      const square = x ** 2;
      if (square > i) break;
      dp[i] = Math.min(dp[i], 1 + dp[i - square]);
    }
  }
  return dp[n];
}

console.log(smallestSquareSum(6)); // 3
console.log(smallestSquareSum(7)); // 4
console.log(smallestSquareSum(8)); // 2
console.log(smallestSquareSum(9)); // 1
console.log(smallestSquareSum(10)); // 2
