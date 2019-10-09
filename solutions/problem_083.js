// https://leetcode.com/problems/invert-binary-tree/
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of nodes in thre tree

/**
 * Inverts a binary tree
 * @param {TreeNode} root
 */
function invertTree(root) {
  return invertTreeHelper(root);
}

/**
 * Recursive invert binary tree
 * @param {TreeNode} root
 */
function invertTreeHelper(root) {
  if (root !== null) {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
  }
}
