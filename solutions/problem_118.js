/**
 * Square elements and given output
 * @param  {number[]} nums
 * @return {number[]}      [description]
 */
function orderedSquare(nums) {
  return nums.map(e => e * e).sort((a, b) => a - b);
}

// console.log(orderedSquare([-9, -2, 0, 2, 3])); // [ 0, 4, 4, 9, 81 ]
