var maxProduct = function(nums) {

    let n = nums.length;

    if(n === 0) {

        return 0
    }


    if(n === 1) {

        return nums[0];
    }

    let maxF = minF = res = nums[0];

    for(let i= 1; i < n; i++) {

        let mx = maxF, mn = minF;


        maxF = Math.max(mx * nums[i], mn * nums[i], nums[i]);


        minF = Math.min(mn* nums[i], nums[i], mx*nums[i]);

        res = Math.max(maxF, res);

    }
    return res;

};
