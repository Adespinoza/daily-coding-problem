/**
 * Find min/max using 2 * (N - 2) comparisons
 * @param  {number[]} arr
 * @return {Object}
 */
function findMinMax(arr) {
  const res = {};
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (i < min) {
      min = i;
      continue;
    } else if (i > max) {
      max = i;
    }
  }

  return { min, max };
}

console.log(findMinMax([4, 3, 1, 2, 5])); // { min: 1, max: 5 }
