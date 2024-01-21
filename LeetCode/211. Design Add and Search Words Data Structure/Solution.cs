public class WordDictionary
{

    class Node
    {
        public Node left;
        public Node right;
        public Node middle;
        public char value;
        public bool end;

        public Node(char val)
        {
            value = val;
        }
    }

    private Node root;

    public WordDictionary()
    {
    }

    public void AddWord(string word)
    {
        root = WordDictionary.Insert(root, word, 0, word.Length);
    }

    private static Node Insert(Node nod, string word, int pos, int len)
    {
        var value = word[pos];
        if (nod == null)
            nod = new Node(value);

        if (value < nod.value) nod.left = Insert(nod.left, word, pos, len);
        else if (value > nod.value) nod.right = Insert(nod.right, word, pos, len);
        else
        {
            if (pos + 1 < len) nod.middle = Insert(nod.middle, word, pos + 1, len);
            else nod.end = true;
        }

        return nod;
    }

    public bool Search(string word)
    {
        return WordDictionary.Search(root, word, 0, word.Length);
    }

    private static bool Search(Node nod, string word, int pos, int len)
    {
        if (nod == null) return false;
        var value = word[pos];

        if (value == '.')
        {
            if (Search(nod.left, word, pos, len)) return true;
            else if (Search(nod.right, word, pos, len)) return true;
            else if (pos + 1 < len) return Search(nod.middle, word, pos + 1, len);

            else return nod.end;
        }

        if (value < nod.value) return Search(nod.left, word, pos, len);
        else if (value > nod.value) return Search(nod.right, word, pos, len);
        else if (pos + 1 < len) return Search(nod.middle, word, pos + 1, len);
        else return nod.end;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.AddWord(word);
 * bool param_2 = obj.Search(word);
 */