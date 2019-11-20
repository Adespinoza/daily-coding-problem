/**
 * Rotate a list by k elements
 * @param  {numbers[]} nums
 * @param  {number} k
 * @return {numbers[]}
 */
function rotateArray(nums, k) {
  // Base case
  if (k > nums.length || k < 0) return nums;

  // Unshift digits up until k to array length
  nums.unshift(...nums.splice(k));

  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // [3, 4, 5, 6, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5, 6], 0)); // [1, 2, 3, 4, 5, 6]
