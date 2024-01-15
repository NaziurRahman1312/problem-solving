/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let tempAr = [];
  let cur = head;
  while (cur !== null) {
    tempAr.push(cur.val);
    cur = cur.next;
  }

  tempAr.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });

  cur = head;
  for (let i = 0; i < tempAr.length; i++) {
    cur.val = tempAr[i];
    cur = cur.next;
  }

  return head;
};
