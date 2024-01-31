class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        d = {}
        d2 = {}

        for i in range(0, len(s), 1):
            if s[i] not in d and t[i] not in d2:
                d[s[i]] = t[i]
                d2[t[i]] = s[i]
            elif s[i] in d and t[i] in d2:
                if d[s[i]] != t[i] or d2[t[i]] != s[i]: return False
            else: return False
        return True

        