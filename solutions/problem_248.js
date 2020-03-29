/**
 * Find the maximum between two numbers without using
 * any if-else statements branching, or direct comparisons.
 * Time Complexity: O(1)
 * @param {number} x
 * @param {number} y
 */
function max(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

console.log(max(1, 10)); // 10
console.log(max(10, 100)); // 100
