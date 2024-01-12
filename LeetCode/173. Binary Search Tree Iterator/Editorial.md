# Using stack

1. Traverse from the root to its left most child and we doing so insert the node into stack.
2. for Next(): The result will be the top node value of the stack. Pop the node, and follow step (1) making the right child of the poped node as new root.
3. for HasNext(): As long as the stack is not empty there is avalue for Next()

Time Complexity:

- next() -> O(h) , h is hegth of the tree
- hasnext() -> O(1)

Space Complexity:

- next() -> O(h) , h is hegth of the tree
- hasnext() -> O(1)
