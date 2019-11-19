/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

/**
 * Finds two nodes that equal k
 * @param  {TreeNode} root
 * @param  {number} k
 * @return {TreeNode[]}
 */
function binaryTreeSum(root, k) {
  const map = new Map();
  return findPair(root, k, map);
}

/**
 *
 * @param  {TreeNode} root
 * @param  {number} k
 * @param  {Map<number,TreeNode>} map
 * @return {TreeNode[]}
 */
function findPair(root, k, map) {
  if (root === null) return [];

  // Retrieve companion node
  if (map.has(k - root.val)) {
    return [map.get(root.val), map.get(k - root.val)];
  }

  // Ignoring duplicate value nodes
  map.set(root.val, root);
  findPair(root.left, k, map); // 5
  findPair(root.right, k, map); // 15

  return [];
}
