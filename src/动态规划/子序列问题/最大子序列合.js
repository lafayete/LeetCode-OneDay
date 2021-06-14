// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例：

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 解答

var maxSubArray = function(nums) {

    let dp = new Array(nums.length).fill(nums[0]);

    let res = dp[0];

    for (let i=1; i< nums.length; i++) {
  
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

      res = Math.max(res, dp[i]);

    }

    return res;
};
