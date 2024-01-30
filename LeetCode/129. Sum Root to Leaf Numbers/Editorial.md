# Using DFS

For each node in the tree, you can generate the path number if you know the number up to it's parent node. You can do so by adding the current node value to the 10'th multiply of the parent node (Or simply to put left shift the parent's path number)

Time Complexity: O(n), n is number of node in the tree
Space Complexity: O(h), height of the tree
