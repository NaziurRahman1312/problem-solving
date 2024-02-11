public class Solution
{
    private int[] dirs = new int[] { -1, 0, 1 };

    public int CherryPickup(int[][] grid)
    {
        var row = grid.Length;
        var col = grid[0].Length;

        var dp = new int[2, col, col];

        var u = 0;

        for (var r = row - 1; r >= 0; r--)
        {
            for (var c1 = 0; c1 < col; c1++)
                for (var c2 = c1; c2 < col; c2++)
                {
                    if (r == row - 1) dp[1 - u, c1, c2] = c1 != c2 ? (grid[r][c1] + grid[r][c2]) : grid[r][c1];
                    else
                    {
                        var cherry = c1 != c2 ? (grid[r][c1] + grid[r][c2]) : grid[r][c1];

                        dp[1 - u, c1, c2] = cherry;

                        foreach (var dir1 in dirs)
                            foreach (var dir2 in dirs)
                            {
                                var nextc1 = c1 + dir1;
                                var nextc2 = c2 + dir2;
                                if (nextc1 < 0 || nextc1 == col) continue;
                                if (nextc2 < 0 || nextc2 == col) continue;
                                if (nextc1 <= nextc2)
                                {
                                    dp[1 - u, c1, c2] = Math.Max(dp[1 - u, c1, c2], cherry + dp[u, nextc1, nextc2]);
                                }
                            }
                    }
                }

            u = 1 - u;
        }

        return dp[u, 0, col - 1];
    }
}