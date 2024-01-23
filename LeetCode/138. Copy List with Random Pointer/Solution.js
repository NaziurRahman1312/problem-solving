/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;

  var cur = head;

  while (cur != null) {
    var newNode = new Node(cur.val);
    newNode.next = cur.next;
    cur.next = newNode;
    cur = newNode.next;
  }

  cur = head;

  while (cur != null) {
    if (cur.random != null) {
      cur.next.random = cur.random.next;
    }

    cur = cur.next.next;
  }

  var newHead = head.next;

  cur = head;
  var curNew = newHead;

  while (cur != null) {
    cur.next = curNew.next;
    curNew.next = cur.next != null ? cur.next.next : null;

    cur = cur.next;
    curNew = curNew.next;
  }

  return newHead;
};
