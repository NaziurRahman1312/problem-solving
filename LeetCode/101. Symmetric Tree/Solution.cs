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
    public bool IsSymmetric(TreeNode root)
    {
        var stackL = new Stack<TreeNode>();
        var stackR = new Stack<TreeNode>();

        stackL.Push(root.left);
        stackR.Push(root.right);

        while (stackL.Count() != 0)
        {
            var l = stackL.Pop();
            var r = stackR.Pop();

            if (l == null && r == null) continue;
            if (l == null) return false;
            if (r == null) return false;

            if (l.val != r.val) return false;

            stackL.Push(l.left);
            stackL.Push(l.right);

            stackR.Push(r.right);
            stackR.Push(r.left);
        }

        return true;
    }
}