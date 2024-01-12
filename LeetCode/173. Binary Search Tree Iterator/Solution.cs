
//Definition for a binary tree node.
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class BSTIterator
{
    private Stack<TreeNode> stack;

    public BSTIterator(TreeNode root)
    {
        stack = new Stack<TreeNode>();
        AddNodeToStack(root);
    }

    private void AddNodeToStack(TreeNode node)
    {
        while (node != null)
        {
            stack.Push(node);
            node = node.left;
        }
    }

    private TreeNode RemoveTopFromStack()
    {
        var removed = stack.Pop();

        AddNodeToStack(removed.right);

        return removed;
    }

    public int Next()
    {
        return RemoveTopFromStack().val;
    }

    public bool HasNext()
    {
        return stack.Count() != 0;
    }
}