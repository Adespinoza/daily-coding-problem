/* eslint object-shorthand: [2, "consistent"] */

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  addDirectEdge(node1, node2, weight = 1) {
    this.edge[node1].push({ node: node2, weight: weight });
  }

  display() {
    let graph = '';
    this.nodes.forEach(node => {
      graph += `${node} -> ${this.edges[node].map(n => n.node).join(', ')} \n`;
    });
    console.log(graph);
  }
}

export default Graph;
