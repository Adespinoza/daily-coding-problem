/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Checks if the nodes are same structure
 * @param  {TreeNode}  s
 * @param  {TreeNode}  t
 * @return {Boolean}
 */
function isEqual(s, t) {
  if (!s && !t) return true;
  if (s && t && s.val === t.val)
    return isEqual(s.left, t.left) && isEqual(s.right, t.right);
  return false;
}

/**
 * Checks if t is subtree of s
 * @param  {TreeNode}  s
 * @param  {TreeNode}  t
 * @return {Boolean}
 */
function isSubtree(s, t) {
  if (!s && !t) return true;
  if (isEqual(s, t)) return true;
  if (s) return isSubtree(s.left, t) || isSubtree(s.right, t);
  return false;
}
