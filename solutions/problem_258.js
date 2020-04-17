/**
 * Definition for a binary tree node.
 *
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Finds the boustrophedon order given a tree node
 * @param {TreeNode} root
 * @return {number[]}
 */
function boustrophedonOrder(root) {
  const result = [];

  const traverse = (node, depth) => {
    if (node) {
      if (!result[depth]) {
        result[depth] = [];
      }
      if (depth % 2 === 0) {
        result[depth].push(node.val);
      } else {
        result[depth].unshift(node.val);
      }
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };

  traverse(root, 0);
  return result.flat();
}

const root = new TreeNode(1);
const a = new TreeNode(2);
const b = new TreeNode(3);
const c = new TreeNode(4);
const d = new TreeNode(5);
const e = new TreeNode(6);
const f = new TreeNode(7);

root.left = a;
root.right = b;
a.left = c;
a.right = d;
b.left = e;
b.right = f;

console.log(boustrophedonOrder(root)); // [1, 3, 2, 4, 5, 6, 7]
