/**
 * Partitions a list into three parts
 * @param  {number[]} list
 * @param  {number} x
 * @return {number[]}
 */
function partitionList(list, x) {
  const hi = [];
  const eq = [];
  const lo = [];

  // iterate through list
  for (let i = 0; i < list.length; i++) {
    if (list[i] === x) {
      eq.push(list[i]);
    } else if (list[i] < x) {
      lo.push(list[i]);
    } else {
      hi.push(list[i]);
    }
  }

  const partition = [...lo, ...eq, ...hi];
  return partition;
}

console.log(partitionList([9, 12, 3, 5, 14, 10, 10], 10));
console.log(partitionList([9, 12, 3, 5, 14, 10, 10], 14));
