
// 哈希表法
var majorityElement = function(nums) {

    if(nums.length === 1) {
        return nums[0];
    }

    let map = new Map();


    for(let i=0; i< nums.length; i++) {

        if(map.has(nums[i])) {


            let count = map.get(nums[i]);

            count++;

            if(count > nums.length / 2) {
                return nums[i]
            }

            map.set(nums[i], count);



        } else {

            map.set(nums[i], 1);

        }

    }

    return 0;

 };


// 摩尔投票法

// var majorityElement = function(nums) {

//     let votes = 0;

//     let x;

//     for (let i=0; i< nums.length; i++) {

//         if (votes === 0) {

//             x= nums[i];

//         } 

//         votes += nums[i] === x ? 1: -1  

//     }

//     return x

// }