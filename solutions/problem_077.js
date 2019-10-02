// https://leetcode.com/problems/merge-intervals/
//
// O(N Log N) Time complexity
// O(1) Space complexity

/**
 * Returns a new list of intervals where all overlapping intervals have been merged
 * @param {number[][]} arr
 * @return {number[][]}
 */
function mergearr(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  // Sort arr by their start
  arr.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const [currStart, currEnd] = curr;
    const [arrtart, arrEnd] = arr[i];

    if (arrtart <= currEnd) {
      // merge and make curr
      curr = [currStart, Math.max(currEnd, arrEnd)];
    } else {
      merged.push([currStart, currEnd]);
      curr = intervals[i];
    }
  }

  merged.push(curr);

  return merged;
}
