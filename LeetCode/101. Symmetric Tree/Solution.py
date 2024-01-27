# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        stackL = []
        stackR = []

        stackL.append(root.left)
        stackR.append(root.right)
        
        while stackL:
            l = stackL.pop()
            r = stackR.pop()

            if not l and not r: continue
            if not l: return False
            if not r: return False

            if l.val != r.val: return False

            stackL.append(l.left)
            stackL.append(l.right)

            stackR.append(r.right)
            stackR.append(r.left)

        return True