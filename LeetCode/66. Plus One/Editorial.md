# Using iteration

Maintain a 'carry' and set it to 1. iterate through the array from last index to 0 (reverse). For each digit, sum it with carry. If the new value is equal to 10 then set the digit as 0 and set carry as 1, otherwise set the digit as the summation and set the carry as 1. After the iteration, if the carry is still 1 then append 1 with the given digits array, otherwise return the digits array

Time Complexity: O(n), n is the length of array
Space Complexity: O(1)
