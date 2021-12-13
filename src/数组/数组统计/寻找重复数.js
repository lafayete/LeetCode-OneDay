var findDuplicate = function(nums) {

    for(let i=0; i< nums.length; i++) {

        if(nums[i] === i + 1) {

            continue;

        } else {

            console.log(i, nums[i], nums[nums[i] - 1]);

            // [nums[i], nums[nums[i]-1]] = [nums[nums[i]-1], nums[i]];

            let temp = nums[i];

            nums[i] = nums[nums[i]-1];

            nums[nums[i] - 1] = temp;

            console.log(nums);

        }

    }


};

let result = findDuplicate([1,3,2,4,2]);



