var cuttingRope = function(n) {

    if(n < 2) {

        return 0;
    }

    if(n ==2) {

        return 1;
    }


    if(n == 3) {

        return 2;
    }


    let dp =  new Array(n + 1).fill(0);

    dp[1] = 1;

    dp[2] = 2;

    dp[3] = 3;

    if(n > 3) {


        for(let i=4; i<=n; i++) {

            let res = 0;

            for(let j=1; j<= i/2; j++) {

                res = Math.max(dp[j] * dp[i -j], res);
    
                dp[i] = res;

            }

        }


    }
    

    return dp[n];

};