/**
 * Find the largest divisible subset
 * Time Complexity: O(n^2)
 * @param {number[]} nums
 * @return {number[]}
 */
function divisbleSubset(nums) {
  if (nums.length < 1) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const dp = new Array(nums.length).fill(0);
  const pre = new Array(nums.length).fill(-1);
  let max = 0;
  let maxIndex = 0;
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
          pre[i] = j;
          if (dp[i] > max) {
            max = dp[i];
            maxIndex = i;
          }
        }
      }
    }
  }

  const subset = [];
  let p = maxIndex;
  while (p !== -1) {
    subset.unshift(nums[p]);
    p = pre[p];
  }

  return subset;
}

console.log(divisbleSubset([3, 5, 10, 20, 21])); // [ 5, 10, 20 ]
console.log(divisbleSubset([1, 3, 6, 24])); // [ 1, 3, 6, 24 ]
