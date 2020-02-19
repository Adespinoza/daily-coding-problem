/**
 * Determines if a num's binary representation is sparse
 * Time Complexity: O(N log N)
 * @param  {number}  num
 * @return {boolean}
 */
function isBinarySparse(num) {
  //
  if ((num & (num >> 1)) >= 1) return false;

  return true;
}

console.log(isBinarySparse(21)); // true
console.log(isBinarySparse(22)); // false
console.log(isBinarySparse(72)); // true
console.log(isBinarySparse(13)); // false
