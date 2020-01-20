/**
 * Compute wheter or not a set of rectangles overlap
 * Time Complexity: O(n^2)
 * @param  {Object} rectanges
 * @return {boolean}
 */
function rectanglesOverlap(rectangles) {
  for (let i = 0; i < rectangles.length; i++) {
    const [x1, y1] = rectangles[i].top_left;
    const [width, height] = rectangles[i].dimensions;
    const x2 = x1 + width;
    const y2 = y1 + height;

    for (let j = 0; j < rectangles.length; j++) {
      if (j !== i) {
        const [x3, y3] = rectangles[j].top_left;
        const [width2, height2] = rectangles[j].dimensions;
        const x4 = x3 + width2;
        const y4 = y3 + height2;

        if (isOverlap([x1, y1, x2, y2], [x3, y3, x4, y4])) return true;
      }
    }
  }

  return false;
}

/**
 * Determines if 2 rectangles overlap
 * @param  {number[]}  rec1 - [x1, y1, x2, y2]
 * @param  {number[]}  rec2 - [x3, y3, x4, y4]
 * @return {boolean}
 */
function isOverlap(rec1, rec2) {
  return (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && // width > 0
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]) // height > 0
  );
}

const rectangles = [
  {
    top_left: [1, 4],
    dimensions: [3, 3]
  },
  {
    top_left: [-1, 3],
    dimensions: [2, 1]
  },
  {
    top_left: [0, 5],
    dimensions: [4, 3]
  }
];

console.log(rectanglesOverlap(rectangles));
