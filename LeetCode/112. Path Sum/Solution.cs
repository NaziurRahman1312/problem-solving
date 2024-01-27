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
public class Solution
{
    public bool HasPathSum(TreeNode root, int targetSum)
    {
        if (root == null) return false;

        var stack = new Stack<(TreeNode, int)>();
        stack.Push((root, 0));

        while (stack.Count() != 0)
        {
            var (node, sum) = stack.Pop();
            sum += node.val;

            if (node.left == null && node.right == null)
            {
                if (targetSum == sum) return true;
                continue;
            }

            if (node.left != null) stack.Push((node.left, sum));
            if (node.right != null) stack.Push((node.right, sum));
        }

        return false;
    }
}