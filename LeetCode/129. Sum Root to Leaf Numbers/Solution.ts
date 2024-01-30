/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNumbers(root: TreeNode | null, num: number = 0): number {
    if(root === null) return 0;
    num = num * 10 + root.val;
    if(root.left === null && root.right === null) return num;
    return sumNumbers(root.left, num) + sumNumbers(root.right, num);
};