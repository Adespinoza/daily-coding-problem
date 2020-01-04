/**
 * Find the the time with the most people in the building.
 * @param  {object[]} timestamps
 * @return {number[]}
 */
function findBusiestPeriod(timestamps) {
  // base case
  if (timestamps.length === 0) return null;

  let max = Number.MIN_VALUE;
  let currCount = 0;
  let start = timestamps[0].timestamp;
  let end = -1;

  for (let i = 0; i < timestamps.length; i++) {
    // check if entering or exiting
    if (timestamps[i].type === 'enter') currCount += timestamps[i].count;
    if (timestamps[i].type === 'exit') currCount -= timestamps[i].count;

    // chec if count is larger than max
    if (currCount > max) {
      max = currCount;
      start = timestamps[i].timestamp;
      end = timestamps[i + 1].timestamp;
    } else if (currCount === max) {
      end = timestamps[i + 1].timestamp;
    }
  }

  return [start, end];
}

const timestamps = [
  { timestamp: 1526579928, count: 3, type: 'enter' }, // 3
  { timestamp: 1526580382, count: 2, type: 'exit' }, // 1
  { timestamp: 1526579938, count: 6, type: 'enter' }, // 7
  { timestamp: 1526579943, count: 1, type: 'enter' }, // 8
  { timestamp: 1526579944, count: 0, type: 'enter' }, // 8
  { timestamp: 1526580345, count: 5, type: 'exit' }, // 3
  { timestamp: 1526580351, count: 3, type: 'exit' } // 0
];

console.log(findBusiestPeriod(timestamps)); // [ 1526579943, 1526580345 ]
