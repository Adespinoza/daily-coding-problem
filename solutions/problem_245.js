/**
 * Min number of jumps to get to the en of an array
 * given only max jumps
 * Time Complexity: O(n)
 * @param {number[]} arr
 * @return {number}
 */
function maxJump(arr) {
  let newMax = 0;
  let jump = 0;
  let oldMax = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    newMax = Math.max(newMax, i + arr[i]);

    if (i === oldMax) {
      jump += 1;
      oldMax = newMax;
    }
  }
  return jump;
}

console.log(maxJump([6, 2, 4, 0, 5, 1, 1, 4, 2, 9])); // 2
console.log(maxJump([2, 3, 1, 1, 4])); // 2
console.log(maxJump([2, 1, 1, 1, 4])); // 3
