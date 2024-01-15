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

function sortList(head: ListNode | null): ListNode | null {
    let tempAr : number[] = [];
    let cur: ListNode | null = head;
    while(cur !== null){
        tempAr.push(cur.val);
        cur = cur.next;
    }

    tempAr.sort((a: number, b: number) => {
        if(a < b) return -1;
        else if(a > b) return 1;
        else return 0;
    });

    cur = head;
    for(let num of tempAr){
        cur.val = num;
        cur = cur.next;
    }

    return head;
};