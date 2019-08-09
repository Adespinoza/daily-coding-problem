/**
 * Returns the minimum number of steps required to reach the end coordinate from the start
 * If there is no path, return null. Assume both start and end are not walls
 * @param {number[][]} matrix
 * @param {number[]} start
 * @param {number[]} end
 * @return {number}
 * Switched cases to False = 0 , True = 1 for easier math
 */
const findMinPath = (matrix, start, end) => {
  // Base case -> Start & End points are same
  if (start[0] === end[0] && start[1] === end[1]) return 0;

  const queue = [];
  const [startX, startY] = start;
  queue.push([startX + 1, startY, 1]);
  queue.push([startX - 1, startY, 1]);
  queue.push([startX, startY - 1, 1]);
  queue.push([startX, startY + 1, 1]);

  const [endX, endY] = end;

  while (queue.length !== 0) {
    const newCordinate = queue.shift();
    const [x, y, distance] = newCordinate;

    // Check if currX & currY are at goal point
    if (endX === x && endY === y) return distance;
    // Check if out of bounds
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length) continue;
    // Check if wall
    if (matrix[x][y] === 1) continue;

    matrix[x][y] = 1; // mark new wall

    queue.push([x - 1, y, distance + 1]);
    queue.push([x + 1, y, distance + 1]);
    queue.push([x, y - 1, distance + 1]);
    queue.push([x, y + 1, distance + 1]);
  }
  return -1;
}


const matrix = [[0, 0, 0, 0],
                [1, 1, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]];
const start = [3,0];
const end = [0,0];

console.log(findMinPath(matrix, start, end));	// 7
