/**
 * Return weight of maximum path
 * Time Complexity: O(n^2)
 * @param  {number[][]} triangle
 * @return {number[]}
 */
function maxPath(triangle) {
  const weights = [];
  for (let i = 0; i < triangle.length; i++) {
    weights.push(Math.max(...triangle[i]));
  }
  return weights.join('-> ');
}

console.log(maxPath([[1], [2, 3], [1, 5, 1]]));
console.log(maxPath([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
