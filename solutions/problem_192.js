/**
 * Determine whether you can reach end of array
 * Time Complexity: O(n)
 * @param  {number[]} nums
 * @return {boolean}
 */
function canReachEnd(nums) {
  // base case
  if (nums.length <= 1) return true;
  if (nums[0] === 0) return false;

  let max = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    max = Math.max(max - 1, nums[i]);
    if (max === 0) return false;
  }

  return true;
}

console.log(canReachEnd([1, 3, 1, 2, 0, 1])); // true
console.log(canReachEnd([1, 2, 1, 0, 0])); // false
console.log(canReachEnd([2, 3, 1, 1, 4])); // true
console.log(canReachEnd([3, 2, 1, 0, 4])); // false
