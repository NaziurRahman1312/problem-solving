public class Solution
{
    public string SimplifyPath(string path)
    {
        var result = new StringBuilder();

        var dirs = path.Split("/");

        var stack = new Stack<string>();

        foreach (var dir in dirs)
            if (!String.IsNullOrWhiteSpace(dir) && dir != ".")
            {
                if (dir == "..")
                {
                    if (stack.Count() != 0)
                        stack.Pop();
                }
                else stack.Push(dir);
            }

        if (stack.Count() == 0) result.Append("/");
        while (stack.Count() != 0) result.Insert(0, "/" + stack.Pop());

        return result.ToString();
    }
}