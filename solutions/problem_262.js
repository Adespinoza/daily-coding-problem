import Graph from './data-structures/Graph';

/**
 * Find all the bridges in a graph.
 * @param {Graph} graph data structure for graph
 * @return {number[][]}
 */
function tarjanAlgorithm(graph) {
  const nodes = graph.nodes.length;
  let id = 0;
  const ids = new Array(nodes).fill(0);
  const lows = new Array(nodes).fill(0);
  const visited = new Array(nodes).fill(false);
  const bridges = [];

  const modifiedDFS = (at, prev) => {
    visited[at] = true;
    id += 1;
    lows[at] = id;
    ids[at] = id;

    // eslint-disable-next-line no-restricted-syntax
    for (const to of graph.nodes) {
      if (to === prev) continue;
      if (!visited[to]) {
        modifiedDFS(to, at);

        lows[at] = Math.min(lows[at], lows[to]);

        if (ids[at] < lows[to]) bridges.push([at, to]);
      } else {
        lows[at] = Math.min(lows[at], ids[to]);
      }
    }
  };

  modifiedDFS(0, -1);
  return bridges;
}

const graph = new Graph();
graph.addNode('0');
graph.addNode('1');
graph.addNode('2');
graph.addNode('3');

graph.addEdge('1', '0');
graph.addEdge('1', '2');
graph.addEdge('1', '3');
graph.addEdge('2', '0');

//  0 -- 2
//  |  /
//  | /
//  1 --- 3
// Bridge: (1, 3)

console.log(tarjanAlgorithm(graph)); // [[1, 3]]
