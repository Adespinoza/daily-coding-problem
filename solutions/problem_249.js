/**
 * Find the maximum XOR of any two elements.
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {number[]} arr
 */
function maxXOR(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[i] ^ arr[j]);
    }
  }

  return max;
}

console.log(maxXOR([25, 10, 2, 8, 5, 3]));
console.log(maxXOR([1, 2, 3, 4, 5, 6, 7]));
