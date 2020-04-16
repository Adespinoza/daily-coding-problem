/**
 * Find the smallest window to sort an array
 * @param {number[]} nums
 * @return {number[]}
 */
function findSmallestWindow(nums) {
  const window = nums
    .slice()
    .sort((a, b) => a - b)
    .reduce((acc, curr, index) => {
      if (curr !== nums[index]) acc.push(index);
      return acc;
    }, []);
  return [window[0], window[window.length - 1]];
}

console.log(findSmallestWindow([3, 7, 5, 6, 9])); // [1, 3]
console.log(findSmallestWindow([2, 6, 4, 8, 10, 9, 15])); // [1, 5]
