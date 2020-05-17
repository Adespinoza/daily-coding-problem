/**
 * Calculate smallest positive bonus amount
 * @param {number} arr
 * @return {number}
 */
function calculateBonus(arr) {
  if (!arr) return [];
  if (arr.length === 1) return [1];

  const segmentation = getSegments(arr);
  const bonuses = [];

  for (let i = 0; i < segmentation.length; i++) {
    const [isAscending, length] = segmentation[i];

    const segmentBonus = [...Array(length).keys()];

    if (!isAscending) segmentBonus.reverse();

    bonuses.push(...segmentBonus);
  }

  return bonuses.map(num => num + 1);
}

/**
 * Segements array by ascending
 * @param {number} arr
 * @return {number}
 */
function getSegments(arr) {
  let isAscending = arr[1] > arr[0];
  let prev = arr[0];
  let start = 0;
  const segments = [];

  for (let i = 0; i < arr.length; i++) {
    if ((isAscending && arr[i] < prev) || (!isAscending && arr[i] > prev)) {
      segments.push([isAscending, i - start]);
      start = i + 1;
      isAscending = !isAscending;
    }
    prev = arr[i];
  }

  segments.push([isAscending, arr.length + 1 - start]);
  return segments;
}

console.log(calculateBonus([10, 40, 200, 1000, 60, 30])); // [1, 2, 3, 4, 2, 1]
console.log(calculateBonus([10, 40, 200, 1000, 900, 800, 30])); // [1, 2, 3, 4 3, 2, 1 ]
