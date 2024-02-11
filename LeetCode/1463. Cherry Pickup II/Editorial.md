# Using DP (Iterative + Memory Optimized)

For ach row (bottom to top), calculate the max pick ups considering all the possible position for 2 robots, which is column \* column and all the postion they can go in the next row which is 3 \* 3

For memory optimization, instead of storing value for all the row, if you check the DP state, it only needs the value for the previous row only.

Time Complexity: O(row \* column \* column)

Space Complexity: O(column \* column)
