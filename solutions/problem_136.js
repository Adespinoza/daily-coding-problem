/**
 * Finds the largest rectangle containing only 1's
 * @param  {number[][]} matrix
 * @return {number}
 */
function findMaxArea(matrix) {
  if (matrix.length === 0) return 0;

  const heights = new Array(matrix[0].length + 1).fill(0);
  let max = 0;

  matrix.forEach(row => {
    row.forEach((flag, i) => {
      heights[i] = flag === '1' ? heights[i] + 1 : 0;
    });

    const stack = [[0, -1]];
    let top = 0;

    heights.forEach((height, index) => {
      let memoIndex = index;
      while (stack[top][0] > height) {
        const [h, i] = stack.pop();
        max = Math.max(max, (index - i) * height);
        memoIndex = i;
        top--;
      }
      if (stack[top][0] < height) {
        stack.push([height, memoIndex]);
        top++;
      }
    });
  });
  return max;
}
