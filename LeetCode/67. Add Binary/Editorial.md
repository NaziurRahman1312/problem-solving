# Using Iteration

1. Maintian a 'carry' and iterate thorugh each character of both string at the same time
   1. foir each poistion, convert the character into number and sum it to the carry
   2. Prepend 'carry % 2' to to result
   3. Set the new 'carry' to 1 if the previous carry is greater than 1, otherwise set it to 0
2. Prepend '1' to to result if 'carry' is 1
3. Return the result

Time Complexity: O(n), n is max length of 2 input string

Space Complexity: O(n)
