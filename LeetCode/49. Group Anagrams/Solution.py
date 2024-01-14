class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        for val in strs:
            key = ''.join(sorted(val))
            if(key in dic): dic[key].append(val)
            else: dic[key] = [val]
        result = []
        for key in dic:
            result.append(dic[key])
        return result