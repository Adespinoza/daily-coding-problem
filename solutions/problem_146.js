// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/**
 * Subtrees contianing all 0s are removed
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function pruneTree(root) {
  if (!root) return null;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (!root.left && !root.right && root.val === 0) return null;
  return root;
}

// const a = new TreeNode(0);
// const b = new TreeNode(1);
// const c = new TreeNode(0);
// const d = new TreeNode(1);
// const e = new TreeNode(0);
// const f = new TreeNode(0);
// const g = new TreeNode(0);
//
// a.left = b;
// a.right = c;
//
// c.left = d;
// c.right = e;
//
// d.left = f;
// d.right = g;
// console.log(a);
// pruneTree(a);
// console.log(a);
