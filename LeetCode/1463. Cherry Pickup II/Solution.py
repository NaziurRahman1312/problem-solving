class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        row = len(grid)
        col = len(grid[0])

        dp = [[ [0 for col2 in range(col)] for col1 in range(col)] for row in range(2)]

        dirs = [-1, 0, 1]

        u = 0

        for r in range(row - 1, -1, -1):
            for c1 in range(0, col, 1):
                for c2 in range(c1, col, 1):
                    cherry = grid[r][c1]
                    if c1 != c2: cherry += grid[r][c2]

                    dp[1 - u][c1][c2] = cherry

                    if r != row - 1:
                        for dir1 in dirs:
                            for dir2 in dirs:
                                nextC1 = c1 + dir1
                                nextC2 = c2 + dir2

                                if nextC1 < 0 or nextC1 == col: continue
                                if nextC2 < 0 or nextC2 == col: continue

                                if(nextC1 <= nextC2):
                                    dp[1-u][c1][c2] = max(dp[1-u][c1][c2], cherry + dp[u][nextC1][nextC2])
            u = 1 - u
        
        return dp[u][0][col - 1]


        