// prettier-ignore

/**
 * Find all pairs of unique indices such that they are palindromes
 * Time Complexity: O(n^2)
 * Auxiliary Space: O(n)
 * @param  {string[]} list
 * @return {number[]}
 */
function uniquePalindromes(list) {
  // base case
  if (list.length <= 1) return [];

  const indicies = [];
  const regex = /[\W_]/g; // regex

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i !== j) {
        // check combined ordering
        const combined = list[i] + list[j];
        const left = combined.toLowerCase().replace(regex, '');
        const right = left.split('').reverse().join('');

        // check if forward and backward spelling are same
        if (left === right) indicies.push([i, j]);
      }
    }
  }

  return indicies;
}

console.log(uniquePalindromes(['code', 'edoc', 'da', 'd'])); // [ [ 0, 1 ], [ 1, 0 ], [ 2, 3 ] ]
console.log(uniquePalindromes(['race', 'car', 'pa', 'ap'])); // [ [ 0, 1 ], [ 2, 3 ], [ 3, 2 ] ]
