# Using DFS (Through Stack)

1. Maintain 2 stacks for left & right childs of root
2. Now for left child, we will traverse the tree from left to right, and for right child we will do the opposite
3. For each iteration, wehn we pop nodes from stacks, just check if they are the same

Time Complexity: O(n), n is the number of nodes
Space Complexity: O(n)
