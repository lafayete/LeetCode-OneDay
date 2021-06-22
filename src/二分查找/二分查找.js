var search = function(nums, target) {

    let left = 0;

    let right = nums.length - 1;

    let result = -1;

    while(left <=right) {


        let pivot = Math.floor(right - left / 2 );


        if (nums[pivot] === target) {

            result = pivot;

            break;


        } else if(nums[pivot] > target) {


            right = pivot - 1;

        } else {


            left = pivot + 1;
        }


    }


    return result;

};