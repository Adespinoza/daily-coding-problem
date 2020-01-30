/**
 * Rotate array to right k elements
 * @param  {number[]} arr
 * @param  {number} k
 * @return {number[]}
 */
function rotateRight(arr, k) {
  if (arr.length === 0 || k < 0) return [];
  if (k > arr.length) return arr;

  while (k > 0) {
    arr.unshift(arr.pop());
    k -= 1;
  }
  return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5], 0)); // [ 1, 2, 3, 4, 5 ]
console.log(rotateRight([1, 2, 3, 4, 5], 1)); // [ 5, 1, 2, 3, 4 ]
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [ 4, 5, 1, 2, 3 ]
console.log(rotateRight([1, 2, 3, 4, 5], 3)); // [ 3, 4, 5, 1, 2 ]
console.log(rotateRight([1, 2, 3, 4, 5], 10)); // [ 1, 2, 3, 4, 5 ]
