// https://leetcode.com/problems/jump-game/
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

/**
 * Determine whether you can reach last index
 * @param  {number[]} input
 * @return {boolean}
 */
function countHops(input) {
  // Base check
  if (input.length === 0 || input === null) return false;
  return recurseCheck(0, input[0], input);
}

/**
 * Recursive helper function
 * @param  {number} currIdx
 * @param  {number} currHops
 * @param  {number[]} input
 * @return {boolean}
 */
function recurseCheck(currIdx, currHops, input) {
  // Base Checks
  if (currIdx === input.length - 1) return true;
  if (currHops > input.length - 1) return false;
  if (currHops === 0 && currIdx < input.length - 1) return false;

  let newIdx = currIdx + currHops;
  let newHops = input[newIdx];
  return recurseCheck(newIdx, newHops, input);
}

console.log(countHops([2, 0, 1, 0])); // true
console.log(countHops([1, 1, 0, 1])); // false
console.log(countHops([100, 1, 0, 1])); // false
console.log(countHops([1, 0])); // true
