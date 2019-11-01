/**
 * Prints nodes in binary tree (root->left->right)
 * @param  {TreeNode} root
 * @return {number[]}
 */
function printBinaryTree(root) {
  if (root === null) return;

  const list = [];
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    const node = queue.shift();
    list.push(node.value);

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return list;
}
