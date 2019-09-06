import isNumber from 'is-number';

/**
 * Evaluates the expression tree, given root. Postorder traversal
 * @param {TreeNode} tree
 * @return {number}
 */
function evaluateExpressTree(root) {
  if (isNumber(root.val)) return root.val;

  // Recurse downward
  const valLeft = evalExpressionTree(root.left);
  const valRight = evalExpressionTree(root.right);

  switch (root.val) {
    case '+':
      return valLeft + valRight;
    case '-':
      return valLeft - valRight;
    case '*':
      return valLeft * valRight;
    default:
      return valLeft / valRight;
  }
}
