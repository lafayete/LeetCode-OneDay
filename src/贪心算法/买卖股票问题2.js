var maxProfit = function(prices) {

    let profit = 0;

    let tmp = prices[0];

    for(let i = 1; i < prices.length; i++) {


        profit += (prices[i] - tmp > 0 ? prices[i] - tmp: 0)

        tmp = prices[i];

    }

    return profit;

};