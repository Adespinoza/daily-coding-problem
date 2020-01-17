/**
 * Find the greatest common denominator between n numbers
 * Time Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
function GCD(nums) {
  // iterate through array of numbers
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // calculate each GCD
    result = GCDHelper(nums[i], result);

    if (result === 1) return 1;
  }

  return result;
}

/**
 * GCD helper function
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function GCDHelper(a, b) {
  if (a === 0) return b;

  return GCDHelper(b % a, a);
}

console.log(GCD([42, 56, 14])); // 14
