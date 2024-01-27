/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const stackL = [];
  const stackR = [];

  stackL.push(root.left);
  stackR.push(root.right);

  while (stackL.length != 0) {
    const l = stackL.pop();
    const r = stackR.pop();

    if (l === null && r === null) continue;
    if (l === null) return false;
    if (r === null) return false;

    if (l.val !== r.val) return false;

    stackL.push(l.left);
    stackL.push(l.right);

    stackR.push(r.right);
    stackR.push(r.left);
  }

  return true;
};
