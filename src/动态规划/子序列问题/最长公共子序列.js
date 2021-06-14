var longestCommonSubsequence = function(text1, text2) {

    let n1 = text1.length;

    let n2 = text2.length;

    let dp = Array.from(new Array(n1 + 1), () => {
        return new Array(n2 + 1).fill(0);
    })
    

    for(let i = 1; i <=n1; i++) {


        for(let j= 1; j <=n2; j++) {


            if(text1[i-1] === text2[j-1]) {

                dp[i][j] = dp[i-1][j-1] + 1;

            } else {

                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);

            }
        }

    }

    return dp[n1][n2];

};
