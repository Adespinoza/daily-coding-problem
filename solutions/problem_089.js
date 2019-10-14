/**
* Validates Binary Search Tree Iterative approach
* @param {TreeNode} root
* @return {boolean}
*/
function validateBST(root) {
  if (root === null) return null;
  const stack = [];
  let prev = null;

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    const currNode = stack.pop();
    if (prev !== null && prev >= currNode) return false;

    prev = currNode.val;
    if (node.right !== null) root = node.right;
  }

  return true;
}
