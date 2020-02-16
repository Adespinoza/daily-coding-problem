/**
 * Find longest run of 1s in an integer's binary representation
 * Time Complexity: O(n)
 * n - number of binary digits
 * @param  {number} num
 * @return {number}
 */
function longestConsecutiveRun(num) {
  const binary = num.toString(2);
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') currCount += 1;
    else {
      maxCount = currCount > maxCount ? currCount : maxCount;
      currCount = 0;
    }
  }

  return maxCount > currCount ? maxCount : currCount;
}

console.log(longestConsecutiveRun(1)); // 1
console.log(longestConsecutiveRun(0)); // 0
console.log(longestConsecutiveRun(156)); // 3
console.log(longestConsecutiveRun(1560)); // 2
