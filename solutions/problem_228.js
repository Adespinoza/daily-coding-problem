/**
 * Forms the largest possible integer in an array.
 * @param {number[]} nums list of numbers
 */
function largestNumber(nums) {
  const sorted = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return sorted === 0 ? '0' : sorted;
}

console.log(largestNumber([10, 2])); // '210'
console.log(largestNumber([3, 30, 34, 5, 9])); // '9534330'
