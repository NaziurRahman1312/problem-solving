/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  const dp = initializeNDArray(0, 2, col, col);
  const dirs = [-1, 0, 1];

  let u = 0;
  for (let r = row - 1; r >= 0; r--) {
    for (let c1 = 0; c1 < col; c1++)
      for (let c2 = c1; c2 < col; c2++) {
        const cherry = c1 != c2 ? grid[r][c1] + grid[r][c2] : grid[r][c1];

        dp[1 - u][c1][c2] = cherry;

        if (r != row - 1) {
          for (let dir1 of dirs)
            for (let dir2 of dirs) {
              const nextc1 = c1 + dir1;
              const nextc2 = c2 + dir2;

              if (nextc1 < 0 || nextc1 == col) continue;
              if (nextc2 < 0 || nextc2 == col) continue;

              if (nextc1 <= nextc2) {
                dp[1 - u][c1][c2] = Math.max(
                  dp[1 - u][c1][c2],
                  cherry + dp[u][nextc1][nextc2]
                );
              }
            }
        }
      }

    u = 1 - u;
  }

  return dp[u][0][col - 1];
};

const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() =>
        initializeNDArray(val, ...args.slice(1))
      );
