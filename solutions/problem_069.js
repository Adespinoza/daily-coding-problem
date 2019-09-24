// https://leetcode.com/problems/maximum-product-of-three-numbers/
// Algorithmic Paradigm: Math?
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

/**
* Largest product that can by made by multiplying 3 integers
* @param {number[]} numbers
* @return {number}
*/
function getLargestProduct(nums) {
  // Sort array
  nums.sort((a, b) => a - b);

  let maxProd = 1;
  let len = nums.length;

  // Max Product can be found by:
  // 1. Multiply the three largest numbers
  // 2. 2. The two smallest numbers multiplied with the largest number.
  // (Assuming the two smallest are negative numbers)
  for (let i = 0; i < len; i++) {
    maxProd =  Math.max(
      nums[0] * nums[1] * nums[len - 1],
      nums[len - 3] * nums[len - 2] * nums[len - 1]
    );
  }

  return maxProd;
}

console.log(getLargestProduct([-10, -10, 5, 2])); // 500
console.log(getLargestProduct([1, 1, 10])); // 10
console.log(getLargestProduct([-1, 0, 10, 100, 8])); // 8000
