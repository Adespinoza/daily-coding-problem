/**
 * Creates permutations and finds value
 * @param {number} n number of throws
 * @param {number} k number of faces
 * @param {number} total target value
 * @param {number[][]} dp dynamic programming board
 */
const permutation = (n, k, total, dp) => {
  if (n === 0) return total === 0;
  if (total < 0 || k * n < total || n > total) return 0;
  if (dp[n][total] === 0) {
    for (let i = 1; i <= total; i++) {
      dp[n][total] += permutation(n - 1, k, total - i, dp);
    }
  }

  return dp[n][total];
};

/**
 * Calculates combinations to reach a specific total
 * Time Complexity: O(n * faces * total)
 * Auxiliary Space: O(n * total)
 * @param {number} N number of throws
 * @param {number} faces number of faces
 * @param {number} total target number
 */
function throwDice(N, faces, total) {
  const dp = new Array(N + 1).fill(0).map(x => new Array(total + 1).fill(0));
  return permutation(N, faces, total, dp);
}

console.log(throwDice(3, 6, 7)); // 15
