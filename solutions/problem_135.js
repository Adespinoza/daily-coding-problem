/* eslint no-else-return: ["error", {allowElseIf: true}] */

// TreeNode class
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Find minimum path from root to leaf
 * @param  {TreeNode} root
 * @return {number[]}
 */
function minTreePath(root) {
  const result = Number.MAX_VALUE;
  return recurseTree(root, result);
}

/**
 * Recursive calls to find result
 * @param  {TreeNode} root
 * @param  {number} result
 * @return {number}
 */
function recurseTree(root, result) {
  if (root === null) return 0;
  if (root.left == null && root.right == null) return root.val;

  // Recurse left
  const left = recurseTree(root.left, result);
  // Recurse right
  const right = recurseTree(root.right, result);

  if (root.left !== null && root.right !== null) {
    // Update result if needed
    result = Math.min(result, left + right + root.val);

    // Return minimum possible value for root being on one side
    return Math.min(left + root.val, right + root.val);
  }

  if (root.left === null) {
    return right + root.val;
  } else if (root.right === null) {
    return left + root.val;
  }
  return result;
}

// const a = new TreeNode(10);
// const b = new TreeNode(5);
// const c = new TreeNode(2);
// const d = new TreeNode(5);
// const e = new TreeNode(1);
// const f = new TreeNode(-1);
//
// a.left = b;
// a.right = d;
// b.right = c;
// d.right = e;
// e.left = f;
//
// console.log(minTreePath(a)); // 15
