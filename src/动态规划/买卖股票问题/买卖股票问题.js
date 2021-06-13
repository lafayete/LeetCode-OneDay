var maxProfit = function(prices) {

    let n =  prices.length;

    if(n === 0) {
        return 0;
    }

    let minPrice = prices[0];

    let dp = new Array(n).fill(0);

    for(let i=1; i< prices.length; i++) {

        minPrice = Math.min(prices[i], minPrice);

        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);

    }

    return dp[n - 1];

};
