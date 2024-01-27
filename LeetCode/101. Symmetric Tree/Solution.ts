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

function isSymmetric(root: TreeNode | null): boolean {
    const stackL : (TreeNode | null) [] = [];
    const stackR : (TreeNode | null) [] = [];

    stackL.push(root.left);
    stackR.push(root.right);

    while(stackL.length != 0){
        const l : TreeNode | null = stackL.pop();
        const r : TreeNode | null = stackR.pop();

        if(l === null && r === null) continue;
        if(l === null) return false;
        if(r === null) return false;

        if(l.val !== r.val) return false;

        stackL.push(l.left);
        stackL.push(l.right);

        stackR.push(r.right);
        stackR.push(r.left);
    }

    return true;
};