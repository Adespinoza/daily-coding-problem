/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.children = [];
}

/**
 * Determines if a tree is symmetric
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  const checkSymmetry = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    if (t1.val === t2.val) {
      let left = 0;
      let right = t2.children.length - 1;

      while (left < t1.children.length && right >= 0) {
        if (!checkSymmetry(t1.children[left], t2.children[right])) break;
        left += 1;
        right -= 1;
      }

      if (left < t1.children.length || right >= 0) return false;
      return true;
    }
    return false;
  };

  return checkSymmetry(root, root);
}

const root = new TreeNode(4);
const a = new TreeNode(3);
const b = new TreeNode(5);
const c = new TreeNode(3);
const d = new TreeNode(9);
const e = new TreeNode(9);
root.children.push(a);
root.children.push(b);
root.children.push(c);
a.children.push(d);
c.children.push(e);

console.log(isSymmetric(root)); // true
