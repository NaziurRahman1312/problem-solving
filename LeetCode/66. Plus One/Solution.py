class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1

        for i in range(len(digits) - 1, -1, -1):
            if carry == 0 : return digits
            if carry + digits[i] == 10:
                carry = 1
                digits[i] = 0
            else:
                digits[i] += 1
                carry = 0
        if carry == 1:
            return [1] + digits
        else: return digits
