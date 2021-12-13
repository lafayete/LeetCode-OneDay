var sortColors = function(nums) {

    let start = 0;

    let end = nums.length - 1;

    let cur = 0;

    while(cur <= end) {

        if(nums[cur] === 0) {

            [nums[cur], nums[start]] = [nums[start], nums[cur]];

            start++;

            cur++;

        } else if(nums[cur] === 1) {

            cur++;

        } else {


            [nums[cur], nums[end]] = [nums[end], nums[cur]];

            end--;

        }


    }

    return nums;

};


let nums = [2,0,2,1,1,0];

let result = sortColors(nums);

console.log(result);
