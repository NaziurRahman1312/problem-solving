# Using two pointers

1. 1st poiner will point first index of the array and 2nd pointer will point last index of the array
2. Run a while loop until the 1st pointer is less than 2nd pointer and for each iteration
   1. Get the summation of array values pointed by 2 pointers
   2. If the sum is greater than target, decrease 2nd pointer by 1
   3. If the sum is less than target, increase 1st pointer by 1
   4. If the sum is equal to target, return pointers as result

Time Complexity: O(n), n is length of array

Space Complexity: O(1)
