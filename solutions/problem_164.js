/**
 * Finds duplicates in an array
 * @param  {number[]} arr
 * @return {number}
 */
function findDuplicate(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) return arr[i];
    map.set(arr[i], arr[i]);
  }

  return null;
}

console.log(findDuplicate([69, 1, 69, 6, 100, 4])); // 69
console.log(findDuplicate([1, 2, 3, 3, 4, 5])); // 3
