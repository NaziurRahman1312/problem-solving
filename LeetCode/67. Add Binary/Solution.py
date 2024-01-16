class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = []
        carry = 0
        alen = len(a) - 1
        blen = len(b) - 1

        while alen >= 0 or blen >= 0 or carry:
            if alen >= 0: carry += int(a[alen]);alen = alen - 1
            if blen >= 0: carry += int(b[blen]);blen = blen - 1
            result.append(str(carry % 2))
            carry //= 2
        return ''.join(reversed(result))
        