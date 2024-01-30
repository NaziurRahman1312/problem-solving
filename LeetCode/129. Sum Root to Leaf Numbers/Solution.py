# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode], num: int = 0) -> int:
        if not root: return 0
        num = num * 10 + root.val
        if not root.left and not root.right: return num
        return self.sumNumbers(root.left, num) + self.sumNumbers(root.right, num)
        