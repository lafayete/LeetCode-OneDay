var uniquePaths = function(m, n) {

    let dp = createArray(m,n);

    for(let i=0; i < m ; i++) {

        for(let j = 0; j< n; j++) {


            if( i == 0 || j ==0) {

                dp[i][j] = 1;
            } else {

                dp[i][j] = dp[i][j-1] + dp[i-1][j];

            }

        }

    }

    console.log(dp[m-1][n-1]);

    return dp[m-1][n-1];
};


function createArray(m,n) {

    let result = new Array(m) || [];
    
    for(let i =0; i< m; i++ ) {
        let arr = new Array(n);

        for(let j=0; j< n; j++) {
            arr[j] = 0;
        }

        result[i] = arr;
    }

    return result;
}


uniquePaths(3, 2)


