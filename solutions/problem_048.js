class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 function buildTree(preorder, inorder) {
   if (preorder.length === 0 && inorder.length === 0) {
     return null;
   }

   if (preorder.length === 1 && inorder.length === 1) {
     return new TreeNode(preorder[0]);
   }

   const root = preorder[0];
   const root_i = inorder.indexOf(root);
   const node = new TreeNode(root);

   // Recursive call
   node.left = buildTree(preorder.slice(1, root_i + 1), inorder.slice(0, root_i));

   node.right = buildTree(preorder.slice(root_i + 1), inorder.slice(root_i + 1));

   return node;
 }
