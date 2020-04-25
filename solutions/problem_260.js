/**
 * Helper function to count symbols
 * @param {string[]} arr
 * @param {string} sym
 */
const plusCount = (arr, sym) =>
  arr.reduce((acc, curr) => {
    return curr === sym ? acc + 1 : 0;
  }, 0);

/**
 * Order an array given an operator representation
 * Time Complexity: O(n)
 * @param {string[]} arr
 * @return {number[]}
 */
function sortJumbled(arr) {
  // Base case
  if (arr.length < 0) return [];

  const first = arr.length - plusCount(arr, '+') - 1;
  const nums = [first];
  let large = first + 1;
  let small = first - 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === '+') {
      nums.push(large);
      large += 1;
    } else {
      nums.push(small);
      small -= 1;
    }
  }

  return nums;
}

console.log(sortJumbled([null, '+'])); // [0, 1]
console.log(sortJumbled([null, '-'])); // [1, 0]
console.log(sortJumbled([null, '+', '+'])); // [0, 1, 2]
console.log(sortJumbled([null, '+', '-'])); // [2, 3, 1]
console.log(sortJumbled([null, '+', '+', '-', '+'])); // [ 3, 4, 5, 2, 6 ]
