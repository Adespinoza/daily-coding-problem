/**
 * Returns a fixed point if it exists, otherwise returns false
 * Tim Complexity: O(n)
 * @param {number[]} arr
 * @return {number[] | boolean}
 */
function hasFixedPoint(arr) {
  const fixedPoint = arr.filter((num, index) => num === index);
  return fixedPoint.length ? fixedPoint[0] : false;
}

console.log(hasFixedPoint([])); // false
console.log(hasFixedPoint([-6, 0, 2, 40])); // 2
console.log(hasFixedPoint([1, 5, 7, 8])); // false
console.log(hasFixedPoint([0, 4, 3, 2, 1, 6])); // 0
