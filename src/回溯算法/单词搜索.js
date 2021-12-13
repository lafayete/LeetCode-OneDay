var exist = function(board, word) {
    
    let list = word.split('');

    let m = board.length;

    let n = board[0].length;

    for(let i=0; i< m; i++) {

        for(let j=0; j< n; j++) {

            if(dfs(board, i, j, 0, list)) {

                return true;

            };

        }

    }

    return false;

    function dfs(board, i, j, index, list) {

        if( i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] !== list[index]) {

            return false;
        
        }

        if(index === list.length - 1) {
            return true;
        }

        board[i][j] = '/0';

        let res = dfs(board, i + 1, j, index + 1, list) || dfs(board, i - 1, j, index + 1, list) || dfs(board, i , j - 1, index + 1, list) || dfs(board, i , j + 1, index + 1, list);

        if(!res) {

            board[i][j] = list[index];
        }
        
        return res;

    }

}


let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];

let word = "ABCCED";

let result = exist(board, word);

console.log(result);
