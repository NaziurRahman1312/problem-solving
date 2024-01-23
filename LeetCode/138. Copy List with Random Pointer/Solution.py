"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head is None: return None

        cur = head

        while cur is not None :
            newNode = Node(cur.val)
            newNode.next = cur.next
            cur.next = newNode
            cur = newNode.next

        cur = head

        while cur is not None:
            if cur.random is not None:
                cur.next.random = cur.random.next

            cur = cur.next.next

        newHead = head.next

        cur = head
        curNew = newHead

        while cur is not None:
            cur.next = curNew.next
            if cur.next is not None:
                curNew.next = cur.next.next
            else:
                curNew.next = None

            cur = cur.next
            curNew = curNew.next

        return newHead