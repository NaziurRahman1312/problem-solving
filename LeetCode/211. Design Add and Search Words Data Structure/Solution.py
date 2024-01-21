class WordDictionary:

    def __init__(self):
        self.root = {}
        

    def addWord(self, word: str) -> None:
        cur = self.root
        for char in word:
            if char not in cur : cur[char] = {}
            cur = cur[char]
        cur['end'] = True
    
    def find(self, word: str, node: dict, pos: int, ln: int) -> bool:
        if node is None : return false
        if pos == ln : 
            if 'end' in node:
                return True
            else :
                return False
        
        if word[pos] == '.' :
            for key in node:
                if key != 'end' and self.find(word, node[key], pos + 1, ln):
                    return True
            return False
        
        if word[pos] in node:
            return self.find(word, node[word[pos]], pos + 1, ln)
        else:
            return False
            

    def search(self, word: str) -> bool:
        return self.find(word, self.root, 0, len(word))


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)