n is the number of node in the tree

# Using DFS

Initial Thought: A path from root to leaf will be a psudo palindrome, if at most one digit in the path has odd frequency. Otherwise, it is not possible to generate palindrome

We can calculate path by DFS. So, we will traverse the tree from root to leaf and while doing so we we will pass path that will contain the frequency of all the digits from root to current node. When we hit the leaf node, just check the path if it meets the constraint to be a psudo palindrome

For path, you can use array to store frequency. But if you look closely then all you need if the frequency is odd or even which can be done using xor operation just

Time Complexity: O(n)

Space Complexity: O(n)
