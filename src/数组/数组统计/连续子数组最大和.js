
// 观察数组
var maxSubArray = function(nums) {

    let max = sum = nums[0];

    for (let i = 1; i< nums.length; i++) {

        if(sum <= 0) {

            sum = nums[i]

        } else {


            sum += nums[i];
        }


        if(sum > max) {


            max = sum;
        }



    }

    return max;

};

// 动态规划

// var maxSubArray = function(nums) {

//     let dp = [];
//     dp[0] = nums[0];
//     let max = dp[0];

//     for (let i=1; i< nums.length; i++) {

//             dp[i] = Math.max(dp[i - 1], 0) + nums[i];

//             max = Math.max(dp[i],max);



//     }


//     return max;

// }


