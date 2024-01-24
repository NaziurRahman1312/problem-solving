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
    public int PseudoPalindromicPaths (TreeNode root) {
        if(root == null) return 0;

        var st = new Stack<(TreeNode, int)>();
        st.Push((root, 1 << root.val));
        int ans = 0;

        while(st.Count() != 0){
            var cur = st.Pop();

            bool noChild = true;
            if(cur.Item1.left != null) {
                noChild = false;
                st.Push((cur.Item1.left, cur.Item2 ^ (1 << cur.Item1.left.val)));
            }

            if(cur.Item1.right != null) {
                noChild = false;
                st.Push((cur.Item1.right, cur.Item2 ^ (1 << cur.Item1.right.val)));
            }

            if(noChild && (cur.Item2 & (cur.Item2 - 1)) == 0){
                ans++;
            }
        }

        return ans;
    }
}