/* eslint max-classes-per-file: ["error", 2] */

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.edges = [];
  }

  addEdge(node, weight) {
    this.edges.push(new Edge(node, weight));
    node.edges.push(new Edge(this, weight));
  }
}

/**
 * Compute the length of the longest path in the tree.
 * @param  {Graph} graph
 * @return {number}
 */
function longestTreePath(root) {
  let maxWeight = 0;
  let maxPath = '';
  let endNode = null;
  let visited = {};

  // modified DFS
  const dfs = (node, currentPath = '', currentWeight = 0) => {
    if (node.edges.length <= 1 && visited[node.val]) {
      if (currentWeight > maxWeight) {
        maxPath = currentPath + node.val;
        maxWeight = currentWeight;
        endNode = node;
      }
      return { maxPath, maxWeight, endNode };
    }

    node.edges.forEach(edge => {
      if (!visited[edge.node.val]) {
        visited[edge.node.val] = true;
        dfs(
          edge.node,
          `${currentPath + node.val  }->`,
          currentWeight + edge.weight
        );
      }
    });

    return { maxPath, maxWeight, endNode };
  };

  // run dfs on root node
  dfs(root);

  visited = {};

  // run dfs on end node
  dfs(endNode);

  return { maxPath, maxWeight };
}

const A = new Node('a');
const B = new Node('b');
const C = new Node('c');
const D = new Node('d');
const E = new Node('e');
const F = new Node('f');
const G = new Node('g');
const H = new Node('h');

A.addEdge(B, 3);
A.addEdge(C, 5);
A.addEdge(D, 8);

D.addEdge(E, 2);
D.addEdge(F, 4);

E.addEdge(G, 1);
E.addEdge(H, 1);

console.log(longestTreePath(A));
