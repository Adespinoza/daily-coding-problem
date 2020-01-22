/**
 * Find lenght of longest sub array
 * @param  {number[]} arr
 * @return {number}
 */
function longestSubArray(arr) {
  if (arr.length === 0) return 0;

  const set = new Set();
  let maxCount = Number.MIN_VALUE;
  let count = 0;

  // iterate and check if set has current index
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      count += 1;
    } else {
      // check if new max value
      maxCount = maxCount < count ? count : maxCount;

      // clear set of previous unique indicies
      set.clear();

      // add current index value
      set.add(arr[i]);
      count = 1;
    }
  }

  // check if new max value
  maxCount = maxCount < count ? count : maxCount;

  return maxCount;
}

console.log(longestSubArray([5])); // 1
console.log(longestSubArray([])); // 0
console.log(longestSubArray([1, 2, 3, 4, 5])); // 5
console.log(longestSubArray([5, 1, 3, 5, 2, 3, 4, 1])); // 5
console.log(longestSubArray([5, 1, 5, 5, 2, 5, 4, 1])); // 3
