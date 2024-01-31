public class Solution {
    public bool IsIsomorphic(string s, string t) {
        var dict = new Dictionary<char, char>();
        var dict2 = new Dictionary<char, char>();
        var l = s.Length;

        for(var i = 0; i < l; i++){
            if(!dict.ContainsKey(s[i]) && !dict2.ContainsKey(t[i])){
                dict[s[i]] = t[i];
                dict2[t[i]] = s[i];
            }else if(dict.ContainsKey(s[i]) && dict2.ContainsKey(t[i])){
                if(dict[s[i]] != t[i] || dict2[t[i]] != s[i]) return false;
            }
            else return false;
        }
        return true;
    }
}