/**
* Find the length of the longest increasing subsequence in the array.
* @param {number[]}
* @return {number}
*/
function lengthOfList(arr) {
  var finalList = [];
  for (var i = 0; i < arr.length; i++) {
    finalList.push(1);
    for (var j = 0; j < i; j++) {
      if (arr[j] < arr[i]) finalList[i] = Math.max(finalList[i], finalList[j] + 1);
    }
  }

  return arr.length ? Math.max.apply(null, finalList) : 0;
}

console.log(lengthOfList([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));	// 6
