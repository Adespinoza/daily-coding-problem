/**
 * Helper function to calculate distances
 * @param {number} target target node
 * @param {Object} edgeList list of edges
 */
function calculateDist(target, edgeList) {
  if (target === 0) return 0;

  const targetDistances = edgeList[target];
  const distances = [];

  for (let i = 0; i < targetDistances.length; i++) {
    const [currTarget, currDist] = targetDistances[i];
    const dist = currDist + calculateDist(currTarget, edgeList);
    distances.push(dist);
  }

  return Math.min(...distances);
}

/**
 * Determines how long it will take for every node to receive message
 * @param {number[][]} edges list of edges (a, b, t)
 * @param {number} count
 */
function findShortestPath(edges, count) {
  const edgeList = {};
  edges.forEach(edge => {
    const [start, end, dist] = edge;
    if (!edgeList[end]) edgeList[end] = [];
    edgeList[end].push([start, dist]);
  });

  const distances = [];
  for (let i = 1; i <= count; i++) {
    const dist = calculateDist(i, edgeList);
    distances.push(dist);
  }

  return Math.max(...distances);
}

const edges = [
  [0, 1, 5],
  [0, 2, 3],
  [0, 5, 4],
  [1, 3, 8],
  [2, 3, 1],
  [3, 5, 10],
  [3, 4, 5]
];

console.log(findShortestPath(edges, 5)); // 9
