/**
 * Reverses list from i to j
 * @param  {number[]} list
 * @param  {number} i
 * @param  {number} j
 * @return {number[]}
 */
function reverse(list, i, j) {
  // base case
  if (i < 0 || j < 0 || j <= i) return list;

  // obtain copy of reverse array splice
  const reverseList = [...list].splice(i, j - i + 1).reverse();

  // insert splice at index
  list.splice(i, j - i + 1, reverseList);

  // returned flattened array
  return list.flat();
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 8)); // [ 1, 2, 3, 4, 5, 9, 8, 7, 6, 10 ]
console.log(reverse([1, 2, 3, 4], 1, 2)); // [ 1, 3, 2, 4 ]
console.log(reverse([1, 2, 3, 4], 0, 4)); // [ 4, 3, 2, 1 ]
console.log(reverse([3, 8, 2, 1], 10, 4)); // [ 3, 8, 2, 1 ]
console.log(reverse([], 1, 5)); // []
