/**
 * Finds whether you can make work palindrom
 * @param  {string}  str
 * @param  {number}  k
 * @return {Boolean}
 */
function isKPalindrome(str, k) {
  const revStr = str
    .split('')
    .reverse()
    .join('');

  const len = str.length;

  return isKPalDP(str, revStr, len, len) <= k * 2;
}

/**
 * Dynamic programming solution
 * @param  {string}  str
 * @param  {string}  revStr
 * @param  {number}  m
 * @param  {number}  n
 * @return {number}
 */
function isKPalDP(str, revStr, m, n) {
  // Create a table to store subproblems
  const dp = [...Array(n + 1)].map(() => Array(m + 1).fill(0));

  // Fill dp[][] in bottom up manner
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (str.charAt(i - 1) === revStr.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(isKPalindrome('waterrfetawx', 2)); // true
console.log(isKPalindrome('waterrfetawx', 1)); // false
