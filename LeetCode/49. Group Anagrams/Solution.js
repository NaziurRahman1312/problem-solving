public class Solution {
  public IList<IList<string>> GroupAnagrams(string[] strs) {
      var dict = new Dictionary<string, IList<string>>();
      var len = strs.Length;

      for(var i = 0 ; i < len; i++){
          var sortedStr = SortString(strs[i]);
          if(dict.ContainsKey(sortedStr)) dict[sortedStr].Add(strs[i]);
          else{
              dict[sortedStr] = new List<string>{strs[i]};
          }
      }

      var result = new List<IList<string>>();
      result.AddRange(dict.Values);

      return result;
  }

  private string SortString(string input){
      char[] characters = input.ToArray();
      Array.Sort(characters);
      return new string(characters);
  }
}