# Using Pointers

1. Create a new node for each original node and place them next to the original node. For example, a->b->c is the original list. After creating the new node and placing them in the list, the list will look like this: a->A->b->B->c->C
2. Traverse the new list to update random pointer for new Node. For each new node, new random pointer will be the next node of orginial random pointer. For example, random pointer of 'a' was 'c', then for 'A' it will be next node of 'c' which is 'C'
3. At the final phase, just remove the new node from the original list to create a new list using 2 pointers. 1 pointer will point to the original head and 2nd pointer will point the new Node of original head

Time Complexity: O(n), n is the length of linked list
Space Complexity: O(1)
