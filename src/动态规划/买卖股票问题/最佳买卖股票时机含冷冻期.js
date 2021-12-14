var maxProfit = function(prices) {

    let n = prices.length;

    let dp = Array.from(new Array(n), () => {

        return new Array(3).fill(0);

    });

    
    dp[0][0] = -prices[0];  // 手上持有股票

    dp[0][1] = 0; // 手上没有股票，并且处于冷冻期

    dp[0][2] = 0; // 手上没有股票，并且不处于冷冻期

    for(let i=1; i< n; i++) {

        dp[i][0] =  Math.max(dp[i-1][0], dp[i-1][2]-prices[i]);

        dp[i][1] = dp[i-1][0] + prices[i];

        dp[i][2] = Math.max(dp[i-1][1], dp[i-1][2]);

    }
        
    return Math.max(dp[n-1][1], dp[n-1][2]);
};