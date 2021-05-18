

var fourSum = function(nums, target) {

    nums.sort((a,b) => {
        return a- b;
    })


    let size = nums.length;

    let result = [];

    for (let i = 0; i< size - 3; i++ ) {

        if(i > 0 && nums[i] === nums[i-1]) continue;


        for (let j = i + 1; j< size -2; j++) {


            if(j> i+ 1 && nums[j] === nums[j-1]) continue;


            let left = j + 1;

            let right = size - 1;

            while(left < right) {

                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if ( sum === target) {
                        
                    result.push([nums[i], nums[j], nums[left++], nums[right--]]);

                    while(nums[left] == nums[left -1]) left++;

                    while(nums[right] == nums[right+ 1]) right--;
                        

                } else if(sum < target) {

                    left++;

                } else {

                    right--;
                }

            }
            
        }

    }

    return result;

};