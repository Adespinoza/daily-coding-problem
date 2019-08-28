/**
* Finds subset of an array that equals to k
* @param {number[]} array
* @param {number} k
* @return {number[]}
* O(nLogn) Time Complexity
* O(n) Space Complexity
*/
function getSubsetSum(array, k) {
  //Base cases
  if(array.length === 0) return null;

  const sortedArr = array.sort((a,b) => b - a);
  const subset = [];
  let remainingSum = k;

  // Iterate through array until sum reached
  for (let i = 0; i < sortedArr.length; i++) {
    if(sortedArr[i] <= remainingSum) {
      subset.push(sortedArr[i]);
      remainingSum -= sortedArr[i];
    }
  }

  if(remainingSum === 0) return subset;
  return null;
}

console.log(getSubsetSum([12, 1, 61, 5, 9, 2], 24));	// [12, 9, 2, 1]
console.log(getSubsetSum([12, 1], 24));		// null
console.log(getSubsetSum([12, 12], 24));	// [12, 12]
console.log(getSubsetSum([], 24));	// null
console.log(getSubsetSum([24], 24));	// [24]
