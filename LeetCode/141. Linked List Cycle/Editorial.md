# Using pointers

1. Create 2 pointers : fast, slow
2. At start, the points will point to head
3. Do iteration until the end of the linked list
   1. At each iteration, slow pointer will point to the next node of the current pointed node
   2. And the fast pointer will point to the next of the next of the current pointed node
   3. At any moment, if slow and fast pointer point to the same node, then that means there is a cycle in the list

Time Complexity: O(n/2) n the length of the list

Space Complexity: O(1)
