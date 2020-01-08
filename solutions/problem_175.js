class Graph {
  constructor() {
    this.edges = {};
    this.nodes = new Set();
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = [];
  }

  addDirectedEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight });
  }

  display() {
    let graph = '';
    this.nodes.forEach(node => {
      graph += `${node}->${this.edges[node].map(n => n.node).join(', ')}\n`;
    });
    console.log(graph);
  }
}

/**
 * Compute number of times each state is visited
 * Time Complexity: O(n^2)
 * n - # of nodes
 * @param  {string} start
 * @param  {number} numSteps
 * @param  {string[][]} transList
 * @return {Object}
 */
function computeMarkovChain(start, numSteps, transList) {
  // base case
  if (numSteps === 0 || transList.length === 0) return {};

  const objSteps = {};
  const graph = new Graph();

  // add nodes to graph and obj steps
  transList.forEach(i => {
    // add nodes to graph
    const [nodeStart, nodeEnd, weight] = i;
    if (!graph.nodes.has(nodeStart)) graph.addNode(nodeStart);
    if (!graph.nodes.has(nodeEnd)) graph.addNode(nodeEnd);

    // set object values to 0
    if (!objSteps[nodeStart]) objSteps[nodeStart] = 0;
    if (!objSteps[nodeEnd]) objSteps[nodeEnd] = 0;

    // add weights to graph
    graph.addDirectedEdge(nodeStart, nodeEnd, weight);
  });

  // while numSteps is positive
  while (numSteps > 0) {
    const probability = Math.random().toFixed(3);
    let sum = 0;

    // move start around
    for (const index of graph.edges[start]) {
      const { node, weight } = index;
      sum += weight;
      if (probability <= sum) {
        objSteps[node] += 1;
        start = node;
        break;
      }
    }

    numSteps -= 1;
  }

  return objSteps;
}

const transList = [
  ['a', 'a', 0.9],
  ['a', 'b', 0.075],
  ['a', 'c', 0.025],
  ['b', 'a', 0.15],
  ['b', 'b', 0.8],
  ['b', 'c', 0.05],
  ['c', 'a', 0.25],
  ['c', 'b', 0.25],
  ['c', 'c', 0.5]
];

console.log(computeMarkovChain('a', 5000, transList)); // random: { a: 3088, b: 1581, c: 331 }
