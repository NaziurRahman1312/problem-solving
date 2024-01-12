function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];

  this.AddNodeToStack = function AddNodeToStack(node) {
    while (node != null) {
      this.stack.push(node);
      node = node.left;
    }
  };

  this.RemoveTopFromStack = function RemoveTopFromStack() {
    let removed = this.stack.pop();

    this.AddNodeToStack(removed.right);

    return removed;
  };

  this.AddNodeToStack(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.RemoveTopFromStack().val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length != 0;
};
