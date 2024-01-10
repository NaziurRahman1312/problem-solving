/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(right === left)  return head;
    let current : ListNode = new ListNode();
    current.next = head;
    head = current;

    for(let i : number = 1 ; i < left; i++) current = current.next;

    var prev = current;
    current = current.next;
    for(let i : number = 0; i < right - left; i++){
        let next : ListNode = current.next;
        
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return head.next; 
};