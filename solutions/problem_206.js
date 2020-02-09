/**
 * Apply a permuatation to an array
 * @param  {string[]} arr
 * @param  {number[]} perm
 * @return {string[]}
 */
function permutate(arr, perm) {
  const newArr = [];

  perm.forEach(el => {
    newArr.push(arr[el]);
  });

  return newArr;
}

console.log(permutate(['a', 'b', 'c'], [2, 1, 0])); // [ 'c', 'b', 'a' ]
