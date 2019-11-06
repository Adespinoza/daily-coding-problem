/**
 * Definition for a binary tree node with parent pointers
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *     this.parent = null;
 * }
 */

/**
 * Finds lowest common ancestor of two nodes
 * @param  {TreeNode} v
 * @param  {TreeNode} w
 * @return {TreeNode}
 */
function leastCommonAcestor(v, w) {
  // Find root node
  let root = v;
  while (root !== null) {
    root = root.parent;
  }

  return findLCAPath(root, v, w);
}

/**
 * Recursive helper function
 * @param  {TreeNode} currNode
 * @param  {TreeNode} v
 * @param  {TreeNode} w
 * @return {TreeNode}
 */
function findLCAPath(root, v, w) {
  if (!root || root === v || root === w) return root;

  const left = findLCAPath(root.left, v, w);
  const right = findLCAPath(root.right, v, w);

  if (!left) return right; // v and w are in the right subtree
  if (!right) return left; // v and w are in the left subtree
  return root; // v is in one side and w is in the other
}
