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
    this.edges[node1].push({ node: node2, weight: weight });
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

  /**
   * Topological Sort helper function
   * @param {(string | number)} node
   * @param {Set} explored
   * @param {(string[] | number[])} s
   */
  topologicalSortHelper(node, explored, s) {
    explored.add(node);
    this.edges[node].forEach(n => {
      if (!explored.has(n)) {
        this.topologicalSortHelper(n, explored, s);
      }
    });
    s.push(node);
  }

  /**
   * Topological sort function
   */
  topologicalSort() {
    // Create a Stack and add our initial node in it
    const s = new Array(this.nodes.length);
    const explored = new Set();
    this.nodes.forEach(node => {
      if (!explored.has(node)) {
        this.topologicalSortHelper(node, explored, s);
      }
    });
    while (s.length !== 0) {
      console.log(s.pop());
    }
  }

  /**
   * Finds final parent of a node
   * @param {(string | number)} a
   */
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  /**
   * Checks connectivity of 2 nodes
   * @param {(string | number)} a node a
   * @param {(string | number)} b node b
   */
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

export default Graph;
