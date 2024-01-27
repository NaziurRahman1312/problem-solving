# Using Recursion (DFS)

1. For each state
   1. Check if the root is null to return false as there is no path from root to leaf
   2. Substitute the root's value from targetSum
   3. If root has no child check if the targetSum is 0 to return result accordingly
   4. Otherwise, check targetSum can be achieved from root's left or right child

Time Complexity: O(n), n is the number of nodes
Space Complexity: O(1)

# Using Stack (DFS)

Time Complexity: O(n), n is the number of nodes
Space Complexity: O(n)
