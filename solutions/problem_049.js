// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
// Algorithmic Paradigm: Dynamic Programming

/**
* Finds the maximum sum of any contiguous subarray
* @param {number[]} arr
* @return {number}
*/
function maxSubArray(arr) {
  if(arr.length === 0) return 0;

  let maxSoFar = arr[0];
  let currMax = arr[0];

  // Finding max sum so far
  for(let i = 1; i < arr.length; i++) {
    currMax = Math.max(arr[i], currMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }

  // Prevent -1 from being returned
  maxSoFar = maxSoFar < 0 ? 0 : maxSoFar;
  return maxSoFar;
}

console.log(maxSubArray([34, -50, 42, 14, -5, 86]));  // 137
console.log(maxSubArray([-5, -1, -8, -9])); // 0
console.log(maxSubArray([-1])); // 0
console.log(maxSubArray([])); // 0
