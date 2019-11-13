/**
 * Find smallest set of numbers covering all intervals
 * @param  {number[]} numSet
 * @return {number[]}
 */
function minIntervalSet(numSet) {
  let i = 0;
  let min = numSet[i][0];
  let max = min;

  while (++i < numSet.length) {
    const [x, y] = numSet[i];
    const lowIdx = x < y ? x : y;
    const highIdx = x > y ? x : y;
    max = Math.max(lowIdx, max);
    min = Math.min(highIdx, min);
  }
  return [min, max];
}

// console.log(minIntervalSet([[0, 3], [2, 6], [3, 4], [6, 9]]));
