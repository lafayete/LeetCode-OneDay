var change = function(amount, coins) {

    let dp = new Array(amount + 1).fill(0);

    dp[0] = 1;


    for(let coin of coins) {

        for(let i=1; i<=amount; i++) {

            if(i <coin) {

                continue;
            }
            dp[i] = dp[i] + dp[i-coin];
        }

    }

    return dp[amount] ;

};


let result = change(5, [1,2,5]);

console.log(result);
