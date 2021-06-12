var movingCount = function(m, n, k) {

    let matrix = createArray(m,n);

    let count = 0;

    count = dfs(0, 0, m, n ,k ,matrix);

    return count;

    function dfs(i, j, m, n , k ,matrix) {

        if (i < 0 || j < 0 || i >= m || j >= n || matrix[i][j] || bitsum(i) + bitsum(j) > k) {

            return 0;
        }

        matrix[i][j] = true;

        return 1 + dfs(i, j+ 1,m, n, k ,matrix) + dfs(i + 1, j,m, n, k ,matrix)  + dfs(i - 1, j,m, n, k ,matrix) + dfs(i, j - 1,m, n, k ,matrix);

    }

    function bitsum(n) {

        let sum = 0;
    
        while(n > 0) {
            sum += n % 10;
            n = Math.floor( n / 10);
        }
    
        return sum;
    }
    
    function createArray(m,n) {
    
        let result = new Array(m) || [];
    
        for(let i =0; i< m; i++ ) {
            let arr = new Array(n);
    
            for(let j=0; j< n; j++) {
                arr[j] =false;
            }
    
            result[i] = arr;
        }
    
        return result;
    }
};
