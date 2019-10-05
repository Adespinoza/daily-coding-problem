// O(N) Time complexity
// O(N) Space complexity
// N is the number of nodes in the tree

/**
* Finds deepest node in a tree
* @param {Node} root
* @return {Node}
*/
function findDeepestNode(root) {
  // Base case
  if (root === null) return null;

  const queue = [];
  queue.push(root);
  let prev = null;
  while (queue.length !== 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      prev = node;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return prev;
}
