/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (right === left) return head;
  let current = new ListNode();
  current.next = head;
  head = current;

  for (let i = 1; i < left; i++) current = current.next;

  var prev = current;
  current = current.next;
  for (let i = 0; i < right - left; i++) {
    let next = current.next;

    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return head.next;
};
