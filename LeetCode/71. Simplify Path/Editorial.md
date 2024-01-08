# Using Stack

1. Split the path using "/"
2. Loop through the new array of words
   1. Check if the word is non empty or not equal to ".", otherwise continue to next word
   2. Check if word is equal to "..", then pop on element from stack
   3. Otherwise, push the word to stack
3. Return result joining the stack using "/" and appending "/"

Time Complexity: O(n) : n is the length of string

Space Complexity: O(n) : n is the length of string
