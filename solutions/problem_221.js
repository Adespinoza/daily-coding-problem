/**
 * Finds the nth sevenish number
 * Time Complexity: O(n)
 * @param {number} n
 */
function sevenish(n) {
  // base case
  if (n < 1) return 0;

  let lastIndex = 0;
  let powIndex = 0;
  const arr = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (powIndex === lastIndex) {
      powIndex = 0;
      arr[i] = arr[lastIndex] * 7;
      lastIndex = i;
    } else {
      arr[i] = arr[lastIndex] + arr[powIndex];
      powIndex += 1;
    }
  }

  return arr[arr.length - 1];
}

console.log(sevenish(1)); // 7^0 = 1
console.log(sevenish(2)); // 7^1 = 7
console.log(sevenish(3)); // 7^0 + 7^1 = 8
console.log(sevenish(4)); // 7^2 = 49
console.log(sevenish(5)); // 7^2 + 7^0 = 50
