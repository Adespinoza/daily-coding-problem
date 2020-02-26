/**
 * Find the smallest integer that is not the sum of a subet
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums sorted array of numbers
 */
function smallestSubsetSum(nums) {
  let res = 1;

  // Traverse nums and increment if nums[i] <= res
  for (let i = 0; i < nums.length && nums[i] <= res; i++) {
    res += nums[i];
  }

  return res;
}

console.log(smallestSubsetSum([1, 3, 4, 5])); // 2
console.log(smallestSubsetSum([1, 2, 3, 10])); // 7
console.log(smallestSubsetSum([1, 2, 6, 10, 11, 15])); // 4
console.log(smallestSubsetSum([1, 1, 1, 1])); // 5
console.log(smallestSubsetSum([1, 1, 3, 4])); // 10
