/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int SumNumbers(TreeNode root) {
        return SumNumbers(root, 0);
    }

    private int SumNumbers(TreeNode root, int num) {
        if(root == null) return 0;
        num *= 10;

        if(root.left == null && root.right == null) return num + root.val;
        else return SumNumbers(root.left, num + root.val) + SumNumbers(root.right, num + root.val);
    }
}