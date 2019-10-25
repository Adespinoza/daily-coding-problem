/**
 * Minimum number of steps in which you can move
 * @param  {number[]} points
 * @return {number}
 */
function minSteps(points) {
  if (points.length === 0 || points === null) return 0;

  let minNum = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const [startX, startY] = points[i];
    const [endX, endY] = points[i + 1];

    let vertDist = Math.abs(startX - endX);
    let horiDist = Math.abs(startY - endY);

    minNum += Math.max(vertDist, horiDist);
  }

  return minNum;
}

console.log(minSteps([[0, 0], [1, 1], [1, 2]])); // 2
