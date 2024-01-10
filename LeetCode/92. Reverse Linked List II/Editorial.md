# Using pointers

1. Add a dummy head for simplicity
2. Traverse the linked list to get the start node from where you need to reverse the list
3. Use prev , current & next pointer to reverse the list respective to the current node
4. Do step 3 for next node iteratively up to the range for right to left
5. Finally return the next of dummy head

Time Complexity: O(n) : n is length of linked list

Space Complexity: O(1)

left = 2
right = 4

step 1: 2 is current node
1 -> 2 -> 3 -> 4 -> 5

step 2: 4 is current node
1 -> 3 -> 2 -> 4 -> 5

Final list:
1 -> 4 -> 3 -> 2 -> 5
