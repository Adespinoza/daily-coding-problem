/**
 * Given an unsorted array, finds the length of longestSequence
 * @param  {number} nums
 * @return {number}
 */
function longestSequence(nums) {
  if (nums.length === 0 || nums === null) return 0;

  const numSet = new Set(nums);
  let max = 0;

  numSet.forEach(num => {
    if (!numSet.has(num - 1)) {
      let currNum = num;

      while (numSet.has(currNum)) {
        currNum += 1;
      }

      max = Math.max(max, currNum - num);
    }
  });

  return max;
}

console.log(longestSequence([100, 4, 200, 1, 3, 2])); // 4
console.log(longestSequence([0, 100, 200, 300, 400, 500])); // 1
