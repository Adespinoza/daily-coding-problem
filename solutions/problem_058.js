/**
* Find the index of the element in the array in faster than linear time
* @param {number[]} input
* @param {number} target
* @return {number}
*/
function unsortedSearch(input, target) {
  if (input === null || input.length === 0) return null;

  let start = 0;
  let end = input.length - 1;

  while (start < end) {
    let mid = parseInt((start + end) / 2);

    const descendingCondition = target >= input[mid] || target <= input[end];
    const ascendingCondition = target >= input[mid] && target <= input[end];
    const isRight = input[end] - input[mid] >= 0 ? ascendingCondition : descendingCondition;

    if (input[mid] === target) {
      return mid;
    } else if (isRight) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
}

console.log(unsortedSearch([13, 18, 25, 2, 8, 10], 8));	// 4
console.log(unsortedSearch([13, 18, 25, 2, 8, 10], 13));	// 0
console.log(unsortedSearch([13, 18, 25, 2, 8, 10], 99));	// null
console.log(unsortedSearch([], 1));	// null
