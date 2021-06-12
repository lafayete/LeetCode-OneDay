var exist = function(board, word) {

    let list = word.split("");

    for(let i=0; i< board.length; i++) {

        for(let j=0; j< board[0].length; j++) {

            if(dfs(board, list, i, j, 0)) return true;
            
        }

    }

    return false;


    function dfs(board, list, i ,j ,index) {

       if(i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] != list[index]) return false;

       if(index === list.length - 1) return true;

       board[i][j] = '\0';

       res = dfs(board, list , i -1 ,j , index + 1) || dfs(board, list , i + 1 ,j , index + 1) || dfs(board, list , i ,j - 1 , index + 1) || dfs(board, list , i ,j + 1 , index + 1)

       board[i][j] = list[index];

       return res;


    }
    

};
