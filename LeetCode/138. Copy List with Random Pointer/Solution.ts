/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    if(head === null) return null;

    let cur : Node | null = head;

    while(cur != null){
        var newNode = new Node(cur.val);
        newNode.next = cur.next;
        cur.next = newNode;
        cur = newNode.next;
    }

    cur = head;

    while(cur != null){
        if(cur.random != null){
            cur.next.random = cur.random.next;
        }

        cur = cur.next.next;
    }

    var newHead = head.next;

    cur = head;
    var curNew = newHead;

    while(cur != null){
        cur.next = curNew.next;
        curNew.next = cur.next != null ? cur.next.next : null;

        cur = cur.next;
        curNew = curNew.next;
    }

    return newHead;
};