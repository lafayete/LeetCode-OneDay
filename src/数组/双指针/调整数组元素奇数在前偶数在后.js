
// 双指针法
var exchange = function(nums) {

    let start = 0;

    let end = nums.length - 1;

    while(start < end) {

        while(nums[start] % 2 === 1) {

            start++;
        }

        while(nums[end] % 2 === 0) {

            end--;
        }

        if (start < end ) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
        }

    }
    
    return nums;

};