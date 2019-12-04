/* eslint guard-for-in: ["error", true] */

/**
 * Given array of integers, find two elements that appear once
 * Time/Space complexity: O(N); Constant space requires XOR knowledge
 * @param  {number[]} arr
 * @return {number}
 */
function findIndividualElements(arr) {
  const hash = {};
  const ret = [];

  arr.forEach(element => {
    if (!hash[element]) {
      hash[element] = 1;
    } else {
      hash[element] += 1;
    }
  });

  for (const k in hash) {
    if (hash[k] === 1) {
      ret.push(k);
    }
  }

  return ret;
}

// findIndividualElements([2, 4, 6, 8, 10, 2, 6, 10]); // ['4', '8']
