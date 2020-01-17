/* eslint object-shorthand: [2, "consistent"] */

class Graph {
  /**
   * Graph constructor
   * @constructor
   */
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  /**
   * Adds nodes to graph
   * @param {(string|number)} node
   */
  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  /**
   * Adds connecting edges (undirected)
   * @param {(string|number)} node1
   * @param {(string|number)} node2
   * @param {number}          [weight=1]
   */
  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  /**
   * Adds connecting edges (directed)
   * @param {(string|number)} node1
   * @param {(string|number)} node2
   * @param {number}          [weight=1]
   */
  addDirectEdge(node1, node2, weight = 1) {
    this.edge[node1].push({ node: node2, weight: weight });
  }

  /**
   * Displays connected graph nodes
   */
  display() {
    let graph = '';
    this.nodes.forEach(node => {
      graph += `${node} -> ${this.edges[node].map(n => n.node).join(', ')} \n`;
    });
    console.log(graph);
  }
}

export default Graph;
