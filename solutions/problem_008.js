class Node {
  constructor(value, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

const univalTree = (root) => {
  var univalCount = 0;

  const processSubtrees = (node, value) => {
    if(node.right || node.left) {
      // Check right subtree
      if(node.right) {
        if(node.right.value === value) {
          if(processSubtrees(node.right, value)) {
              univalCount++;
          }
        } else {
          // Recurse right subtree
          return 1 + processSubtrees(node.right, value);
        }
      }
      // Check left subtree
      if(node.left) {
        if(node.left.value === value) {
          if(processSubtrees(node.left, value)) {
              univalCount++;
          }
        } else {
          // Recurse left subtree
          return 1 + processSubtrees(node.left, value);
        }
      }
    } else {
      univalCount++;
      return true;
    }
  }

  processSubtrees(root, root.value);
  return univalCount;
}

// Creates tree example
node_a = new Node(0);
node_b = new Node(1);
node_c = new Node(0);
node_d = new Node(1);
node_e = new Node(0);
node_f = new Node(1);
node_g = new Node(1);
node_a.left = node_b;
node_a.right = node_c;
node_c.left = node_d;
node_c.right = node_e;
node_d.left = node_f;
node_d.right = node_g;

console.log(univalTree(node_a));	// 5
console.log(univalTree(node_b));	// 1
console.log(univalTree(node_c));	// 3
console.log(univalTree(node_g));	// 1
console.log(univalTree(node_d));	// 4
