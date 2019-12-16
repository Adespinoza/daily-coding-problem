/**
 * Replaces color of given pixel and all adjacent colors
 * @param  {string[][]} matrix
 * @param  {number[]} point
 * @param  {string} color
 * @return {string[][]}
 */
function replaceColors(matrix, point, color) {
  const rLength = matrix.length;
  const cLength = matrix[0].length;
  const oldColor = matrix[point[0]][point[1]];

  const recurse = p => {
    const [row, col] = p;

    // stopping cases
    if (row >= rLength || col >= cLength || row < 0 || col < 0) return;
    if (matrix[row][col] !== oldColor || matrix[row][col] === color) return;

    // change specific point
    if (row < rLength && col < cLength) matrix[row][col] = color;

    // recurse all around
    recurse([row - 1, col]);
    recurse([row + 1, col]);
    recurse([row, col - 1]);
    recurse([row, col + 1]);
  };

  // call recursion
  recurse(point);

  return matrix;
}

const picture1 = [
  ['B', 'B', 'W'],
  ['W', 'W', 'W'],
  ['W', 'W', 'W'],
  ['B', 'B', 'B']
];

const picture2 = [
  ['B', 'B', 'W'],
  ['W', 'B', 'W'],
  ['W', 'B', 'W'],
  ['B', 'B', 'B']
];
console.log(replaceColors(picture1, [2, 2], 'G'));
// [ [ 'B', 'B', 'G' ],
//   [ 'G', 'G', 'G' ],
//   [ 'G', 'G', 'G' ],
//   [ 'B', 'B', 'B' ] ]

console.log(replaceColors(picture2, [0, 0], 'C'));
// [ [ 'C', 'C', 'W' ],
//   [ 'W', 'C', 'W' ],
//   [ 'W', 'C', 'W' ],
//   [ 'C', 'C', 'C' ] ]
