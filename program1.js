const getTotalIsles = function(grid) {

    if (!grid || grid.length === 0) return 0;

    const rc = grid.length;
    const cc = grid[0].length;
    let count = 0;
    const fun = function(x, y) {
        if (x < 0 || x >= rc || y < 0 || y >= cc || grid[x][y] === 'W') {
            return;
        }
        grid[x][y] = 'W';
        fun(x + 1, y);
        fun(x - 1, y);
        fun(x, y + 1);
        fun(x, y - 1);
    };
    for (let i = 0; i < rc; i++) {
        for (let j = 0; j < cc; j++) {
            if (grid[i][j] === 'L') {
                count++;
                fun(i, j);
            }
        }
    }

    return count;
};

module.exports = getTotalIsles;