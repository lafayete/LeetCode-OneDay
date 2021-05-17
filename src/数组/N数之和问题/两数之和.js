
var twoSum = function(nums, target) {

   let map = new Map();

    for (let i = 0; i< nums.length; i++) {

        let current = nums[i];

        let targetNum = target - current;


        if(map.has(targetNum)) {
            return [i, map.get(targetNum)];
        } else {
            map.set(current, i)
        }

    }

};