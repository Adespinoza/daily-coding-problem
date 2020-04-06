/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Given a full binary tree, remove nodes with only one child
 * @param {TreeNode} root
 */
function pruneBinaryTree(root) {
  if (!root) return null;

  // recurse the left subtree and right subtree
  root.left = pruneBinaryTree(root.left);
  root.right = pruneBinaryTree(root.right);

  // current node has two children or is a leaf node, do nothing
  if ((root.left && root.right) || isLeafNode(root)) {
    return root;
  }

  // if current node has exactly one child, the replace the node
  // with the child node of a lower index
  const childNode = root.left !== null ? root.left : root.right;
  return childNode;
}

/**
 * Helper function to check for leaf nodes
 * @param {TreeNode} node
 */
function isLeafNode(node) {
  return !node.left && !node.right;
}

function printTree(root) {
  if (!root) return null;

  printTree(root.left);
  console.log(`${root.val} `);
  printTree(root.right);
}

const root = new TreeNode(0);
const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
const g = new TreeNode(7);

root.left = a;
root.right = b;
a.left = c;
b.right = d;
c.right = e;
d.left = f;
d.right = g;

// printTree(root);
pruneBinaryTree(root);
printTree(root);
