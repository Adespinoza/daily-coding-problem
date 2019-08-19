/**
 * Determines if there is a possible arbitrage
 * @param {number[][]} graph
 * @return {boolean}
 */
function doesArbitrageExist(graph) {
  // Transform each edge in graph
  const transformedGraph = [];
  for (let r = 0; r < graph.length; r++) {
    transformedGraph[r] = [];
    for (let c = 0; c < graph[r].length; c++) {
      const amount = graph[r][c];
      transformedGraph[r][c] = -Math.log10(amount);
    }
  }

  // use bellman ford algorithm to find any negative cycles
  return runBellmanFord(transformedGraph, 0);
}

/**
 * Determines if there is a negative cycle in graph
 * @param {number[][]} graph
 * @param {number} source
 * @param {boolean}
 */
function runBellmanFord(graph, source) {
  const minDist = Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
  minDist[source] = 0;

  // Relax each edge V - 1 times
  for (let times = 1; times < graph.length; times++) {
    let haveUpdate = false;

    // iterate through each edge in graph, go through the graph (matrix)
    for (let node = 0; node < node.length; node++) {
      for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
        if (
          minDist[node] !== Number.MAX_SAFE_INTEGER &&
          minDist[neighbor] > minDist[node] + graph[node][neighbor]
        ) {
          haveUpdate = true;
          minDist[neighbor] = minDist[node] + graph[node][neighbor];
        }
      }

      // No cycles or no negative cycles
      if (!haveUpdate) return false;
    }
  }

  // Checking for negative cycles
  for (let node = 0; node < graph.length; node++) {
    for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
      if (
        minDist[node] === Number.MAX_SAFE_INTEGER &&
        minDist[node] > minDist[node] + graph[node][neighbor]
      ) {
        return true;
      }
    }
  }

  return false;
}