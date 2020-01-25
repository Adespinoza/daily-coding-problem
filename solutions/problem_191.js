/**
 * Find min number of overlap intervals to remove
 * Time Complexity: Θ(n log(n)) - .sort(...) method
 * @param  {number[][]} intervals
 * @return {number}
 */
function minIntervalOverlap(intervals) {
  // base case
  if (intervals.length === 0) return 0;

  // sort interval using starting indicies
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let pre = intervals[0];

  // start at index 1 instead of 0 (otherwise it's counted twice)
  intervals.slice(1).forEach(item => {
    if (pre[1] > item[0]) {
      count += 1;
    } else {
      pre = item;
    }
  });

  return count;
}

console.log(minIntervalOverlap([[7, 9], [2, 4], [5, 8]])); // 1
console.log(minIntervalOverlap([[0, 1], [1, 2]])); // 0
