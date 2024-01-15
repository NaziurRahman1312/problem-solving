# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def merge(self, head1: Optional[ListNode], head2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        while(head1 is not None or head2 is not None):
            if(head1 is not None and head2 is not None):
                if(head1.val <= head2.val):
                    cur.next = head1
                    head1 = head1.next
                else:
                    cur.next = head2
                    head2 = head2.next
            elif head1 is not None:
                cur.next = head1
                head1 = head1.next 
            else:
                cur.next = head2
                head2 = head2.next
            cur = cur.next
        return dummy.next

    def divide(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast = head
        slow = head
        prev = head
        while(fast is not None and fast.next is not None):
            prev = slow
            slow = slow.next
            fast = fast.next.next
        if(slow == head): return head
        prev.next = None
        return self.merge(self.divide(head), self.divide(slow))

    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.divide(head)
