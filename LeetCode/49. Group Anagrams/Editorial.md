# Using HashMap/Dictionary

1. Iterate thorugh the array, and for each word:
   1. Generatre key by sorting the charackter in the word
   2. Use the key to add the word into a dictionary list listed word
2. Iterate though the dictionary and add all the value to th result

Time Complexity: O(n \* mlog(m)), n is the length of input array, m is the average length of each word of the unput array

Space Complexity: O(n \* m)
