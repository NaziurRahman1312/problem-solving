# Using binary convertion

1. Convert the number into binary representation
2. Count the 1's into it

Time Complexity: O(log(n))

Space Complexity: O(1)

# Using bit manipulation

1. iterate until the number is 0
   1. On each iteartion, check last significant bit and add it to the result
   2. Right shift 1 bit for the given number

Time Complexity: O(log(n))

Space Complexity: O(1)
