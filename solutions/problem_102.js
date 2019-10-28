/**
 * Return which elements in list sum to k
 * @param  {number[]} nums
 * @param  {number} k
 * @return {number[]}
 */
function kArraySum(nums, k) {
  if (nums.length === 0 || nums === null || k === null) return [];

  let currSum = 0;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    const difference = currSum - k;

    // total sum met
    if (difference === 0) {
      return nums.slice(0, i + 1);
    }

    if (map.has(difference)) {
      const startIndex = map.get(difference);
      return nums.slice(startIndex + 1, i + 1);
    }

    map.set(currSum, i);
  }

  return [];
}

console.log(kArraySum([1, 2, 3, 4, 5], 9)); // [2, 3, 4]
