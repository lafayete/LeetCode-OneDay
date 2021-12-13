var coinChange = function(coins, amount) {

    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for(let i=1; i<=amount; i++) {

        for(let coin of coins) {


            if(i -coin >= 0) {

                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }

        }

    }

    return dp[amount] === Infinity ? -1 : dp[amount];

    //dfs 多试几个例子后 超时了

    // let result = [];

    // let res = Infinity;

    // coins.sort((a, b) => {
    //     return b - a;
    // })

    // dfs([], amount);
    
    // function dfs(cur, sum) {

    //     if(sum === 0) {

    //         result.push([...cur]);

    //         res = Math.min([...cur].length, res);

    //         return;

    //     }

    //     if(sum < 0) {

    //         return;

    //     }

    //     for(let i=0; i< coins.length; i++) {

    //         cur.push(coins[i]);

    //         dfs(cur, sum - coins[i]);

    //         cur.pop();

    //     }
        
    // }


    // if(result.length === 0) {

    //     return -1;
    // }

    // return res;
    
};


let result = coinChange([1,2,5], 100);

console.log(result);
