/**
 * Count number of nodes in a complete binary tree
 * Time Complexity: O(n)
 * @param  {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
  if (root === null) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
}
