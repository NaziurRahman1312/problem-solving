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
    public ListNode SortList(ListNode head)
    {
        return Divide(head);
    }

    private ListNode Divide(ListNode head)
    {
        var slow = head;
        var fast = head;
        var prev = slow;
        while (fast != null && fast.next != null)
        {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if (slow == head) return head;
        prev.next = null;
        return Merge(Divide(head), Divide(slow));
    }

    private ListNode Merge(ListNode head1, ListNode head2)
    {
        var head = head1;
        if (head1.val <= head2.val)
        {
            head = head1;
            head1 = head1.next;
        }
        else
        {
            head = head2;
            head2 = head2.next;
        }

        var cur = head;

        while (head1 != null || head2 != null)
        {
            if (head1 != null && head2 != null)
            {
                if (head1.val <= head2.val)
                {
                    cur.next = head1;
                    head1 = head1.next;
                }
                else
                {
                    cur.next = head2;
                    head2 = head2.next;
                }
            }
            else if (head1 != null)
            {
                cur.next = head1;
                head1 = head1.next;
            }
            else
            {
                cur.next = head2;
                head2 = head2.next;
            }

            cur = cur.next;
        }

        return head;
    }
}