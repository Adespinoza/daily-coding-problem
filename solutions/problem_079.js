// https://leetcode.com/problems/non-decreasing-array/
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

/**
* Determins if array could be non-decreasing
* @param {number[]} arr
* @return {boolean}
*/
function isNonDecreasing(arr) {
  let count = 0;
  for (let i = 1; i < arr.length && count; i++) {
    count++;
    if (i - 2 < 0 || arr[i - 2] <= arr[i]) arr[i - 1] = arr[i];
    else arr[i] = arr[i - 1];
  }

  return count <= 1;
}
