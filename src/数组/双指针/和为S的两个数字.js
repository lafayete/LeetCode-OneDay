// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

var twoSum = function(nums, target) {

    let left = 0;

    let right = nums.length - 1 ;


    while(left < right) {

        let sum = nums[left] + nums[right];

        if (s > target) {
            
            right--;

        } else if (s < target) {

            left++;
        } else {

            return [nums[left], nums[right]];
        }


    }

};