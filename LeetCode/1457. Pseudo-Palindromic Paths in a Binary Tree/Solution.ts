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

function pseudoPalindromicPaths (root: TreeNode | null): number {
    let ans : number = 0;

    const stack : [[TreeNode | null, number]] = [[root, 0]];

    while(stack.length > 0){
        let [node, path] = stack.pop();

        if(node !== null){
            path ^= 1 << node.val;

            if(node.left === null && node.right === null){
                ans += ((path & (path - 1)) === 0) ? 1 : 0;
            }else{
                stack.push([node.left, path]);
                stack.push([node.right, path]);
            }
        }
    }

    return ans;
};