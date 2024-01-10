/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode ReverseBetween(ListNode head, int left, int right)
    {
        if (right - left + 1 == 1) return head;
        var current = new ListNode();
        current.next = head;
        head = current;

        for (int i = 1; i < left; i++) current = current.next;

        var prev = current;
        current = current.next;
        for (int i = 0; i < right - left; i++)
        {
            var next = current.next;

            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return head.next;
    }
}