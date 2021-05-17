//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

//注意：答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// 使用双指针方法

var threeSum = function(nums) {

    nums.sort((a,b) => {
        return a -b;
    });


    let result = [];

    let size = nums.length;

    for( let i = 0; i < size; i++) {

        let left = i + 1;

        let right =  size - 1;
        

        while(left < right) {

            
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0) {

                result.push([nums[i], nums[left], nums[right]]);

                left++;

                right--;

                while(nums[left] === nums[left -1]) {
                    left ++;
                }

                while(nums[i] === nums[right + 1]) {
                    right --;
                }
    
            } else if( sum > 0) {

                right--;
    
            } else {

                left++;

            }
            
        }

    }


    return result;



}