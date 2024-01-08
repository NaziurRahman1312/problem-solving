# Using Iteration

As the array is already sorted

1. Loop through the array
2. For each element, set it starting point [a, ?] for the range
3. Now run a second iteration from the current position to end of array as long as the next value is equal to (current value + 1)
4. When the second iteration completes, you will get your ending point for the range [a, b]5.
5. Move the iteration cursor to the next position of ending point

Time Complexity: O(n) : n is the length of array

Space Complexity: O(1)
