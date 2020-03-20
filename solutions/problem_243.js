/**
 * Maximum sum of any partition in an array is minimized
 * @param  {number[]} arr
 * @param  {number} k
 * @return {number}
 */
function maxPartitionSum(arr, k) {
  const num = arr.length;
  const dp = new Array(num + 1).fill(0).map(() => new Array(k + 1).fill(0));
  dp[0][0] = 0;

  for (let i = 1; i < k + 1; i++) {
    for (let j = i; j < num + 1; j++) {
      let lastMin = arr[j - 1];
      for (let h = j; h > 0; h--) {
        lastMin = Math.min(lastMin, arr[h - 1]);
        dp[j][i] = Math.max(dp[j][i], dp[h - 1][i - 1] + lastMin);
      }
    }
  }

  return dp[num][k];
}

console.log(maxPartitionSum([5, 1, 2, 7, 3, 4], 3));
