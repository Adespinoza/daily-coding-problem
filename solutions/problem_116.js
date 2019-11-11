/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Generates a finite, arbitrary binary tree
 * @return {TreeNode}
 */
function generate() {
  const root = new TreeNode(0);

  if (Math.random() < 0.5) root.left = generate();
  if (Math.random() < 0.5) root.right = generate();

  return root;
}
