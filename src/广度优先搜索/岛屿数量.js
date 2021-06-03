var numIslands = function(grid) {


    let count = 0;

    for(let i=0; i< grid.length; i++) {

        for(let j=0; j< grid[0].length; j++) {

            if(grid[i][j] == "1") {

                bfs(grid, i,j);

                count++;

            }


        }

    }

    return count;

};

function bfs(grid, i, j) {

    let queue = [];

    queue.push([i,j]);

    while(queue.length) {


        let cur = queue.shift();

        let i = cur[0];

        let j = cur[1];

        if(0 <= i && i < grid.length && 0 <= j && j < grid[0].length && grid[i][j] == '1') {

            grid[i][j] = '0';

            queue.push([ i + 1, j]);

            queue.push([ i , j + 1]);

            queue.push([ i - 1, j]);

            queue.push([ i , j - 1])

        }

    }


}