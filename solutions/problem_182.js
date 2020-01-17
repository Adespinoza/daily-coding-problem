import Graph from './data-structures/Graph';

/**
 * Check if an undirected graph is minimally connected
 * i.e - removal of one edge make it disconnected
 * Time Complexity: O(|V| + |E|)
 * @param  {Graph}  graph
 * @return {boolean}
 */
function isMinimallyConnected(graph) {
  // base case
  if (graph.nodes.length <= 0) return false;

  const queue = [];
  const explored = [];

  queue.push(graph.nodes[0]);
  explored.push(graph.nodes[0]);

  // run BFS from starting node
  while (queue.length !== 0) {
    const temp = queue.shift();

    // check that any node doesn't have a single path
    if (graph.edges[temp].length <= 1) return false;

    // check unexmplored nodes
    graph.edges[temp]
      .filter(n => !explored.includes(n.node))
      .forEach(n => {
        explored.push(n.node);
        queue.push(n.node);
      });
  }

  return true;
}

const graph = new Graph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('d', 'b');
graph.addEdge('d', 'c');
graph.addEdge('d', 'e');

/**
 * a ------ b
 * |        |
 * |        |
 * |        |
 * c ------ d --- e
 */

console.log(isMinimallyConnected(graph)); // false

graph.addEdge('e', 'b');

/**
 * a ------- b
 * |        |  \
 * |        |   \
 * |        |    \
 * c ------ d --- e
 */

console.log(isMinimallyConnected(graph)); // true
