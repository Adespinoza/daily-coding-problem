/**
 * Find nearst k points from the central point
 * @param  {number[][]} points
 * @param  {number[]} cp
 * @param  {number} k
 * @return {number[]}
 */
function listPoints(points, cp, k) {
  // base case
  if (k === 0) return [];

  const [x1, y1] = cp;
  const distArr = [];
  const sortArr = [];
  const map = new Map();

  // calculate distances for each point from cp
  points.forEach(point => {
    const [x2, y2] = point;

    // distance formula
    const xDist = Math.abs(x1 - x2) ** 2;
    const yDist = Math.abs(y1 - y2) ** 2;
    const d = Math.sqrt(xDist + yDist);

    // save indicies as distances and map
    distArr.push(d);

    if (map.has(d)) {
      map.set(d, [...map.get(d), ...point]);
    } else {
      map.set(d, point);
    }
  });

  distArr.sort((a, b) => a - b);

  // iterate through dist arr and track
  for (let i = 0; i < distArr.length; i++) {
    const p = map.get(distArr[i]);

    if (k !== 0) {
      const tempX = p.shift();
      const tempY = p.shift();

      sortArr.push([tempX, tempY]);
      k -= 1;
    }
  }

  return sortArr;
}

console.log(listPoints([[0, 0], [5, 4], [3, 1]], [1, 2], 2)); // [ [ 0, 0 ], [ 3, 1 ] ]
console.log(listPoints([[0, 0], [1, 0], [5, 4], [3, 1]], [1, 2], 2)); // [ [ 1, 0 ], [ 0, 0 ] ]
console.log(listPoints([[0, 0], [1, 0], [5, 4], [3, 1]], [1, 2], 3)); // [ [ 1, 0 ], [ 0, 0 ], [ 3, 1 ] ]
console.log(listPoints([[0, 0], [1, 0], [5, 4], [3, 1]], [1, 2], 9)); // [ [ 1, 0 ], [ 0, 0 ], [ 3, 1 ], [ 5, 4 ] ]
console.log(listPoints([[0, 0], [1, 0], [5, 4], [3, 1]], [1, 2], 0)); // []
console.log(listPoints([[0, 0], [1, 0], [5, 4], [3, 1]], [1, 2], 1)); // [ [1, 0] ]
