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

function hasCycle(head: ListNode | null): boolean {
    if(head == null) return false;
    let slowPointer = head;
    let fastPointer = head;
    while(fastPointer !== null && fastPointer.next !== null){
        slowPointer= slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(slowPointer === fastPointer) return true;
    }
    return false;
};