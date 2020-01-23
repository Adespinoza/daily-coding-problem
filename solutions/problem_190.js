const allPositives = arr => arr.every(n => n > 0);
const allNegatives = arr => arr.every(n => n < 0);
const sum = arr => arr.reduce((currMax, maxSoFar) => currMax + maxSoFar, 0);

/**
 * Compute max of subarray sum
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 * @param  {number[]} arr
 * @return {number}
 */
function maxSubSum(arr) {
  // base case
  if (arr.length === 0 || allNegatives(arr)) return 0;
  if (allPositives(arr)) return sum(arr);

  let currMax = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(0, currMax + arr[i]);
    maxSoFar = Math.max(currMax, maxSoFar);
  }
  return maxSoFar;
}

console.log(maxSubSum([8, -1, 3, 4])); // 14
console.log(maxSubSum([-4, 5, 1, 0])); // 6
