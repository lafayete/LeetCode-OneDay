// 统计一个数字在排序数组中出现的次数。

// var search = function(nums, target) {

//     let count = 0;

//     let left = 0;

//     let right = nums.length - 1;


//     while(left <= right) {


//         let middle = Math.floor((left + right) / 2);


//         if(nums[middle] > target) {


//             right = middle - 1;


//         } else if (nums[middle] < target) {

//             left = middle + 1;

//         } else {

//             count++;

//             let leftMore = rightMore  = middle;

//             while(nums[--leftMore] === target) {

//                 count++;
//             }

//             while(nums[++rightMore] === target) {

//                 count++

//             }


//             break;

//         }

//     }
//     return count;
// };


// 更优的算法


var searchFirst = function(nums, target) {

    let left = 0;

    let right = nums.length - 1;

    let middle;

    let first = -1;


    while(left <= right) {


         middle = Math.floor((left + right) / 2);


        if(nums[middle] > target) {


            right = middle - 1;


        } else if (nums[middle] < target) {

            left = middle + 1;

        } else {


            if( (middle > 0 && nums[middle - 1] !== target) || middle === 0) {

                first = middle;

                return first

            } else {

                right = middle - 1;

            }


        }

    }


    console.log(first);

    return first;

};


var searchLast = function(nums, target) {

    let left = 0;

    let right = nums.length - 1;

    let middle;

    let last = -1;


    while(left <= right) {


         middle = Math.floor((left + right) / 2);


        if(nums[middle] > target) {


            right = middle - 1;


        } else if (nums[middle] < target) {

            left = middle + 1;

        } else {


            if( (middle < nums.length && nums[middle + 1] !== target) || middle === nums.length) {

                last = middle;

                return last

            } else {

                left = middle + 1;

            }


        }

    }

    return last;

};


function search(nums, target) {

    let first = searchFirst(nums, target);

    let last = searchLast(nums, target);


    if(first > -1 && last > -1) {

        return last - first + 1
    }


    return  0;

}



console.log(search([5,7,7,8,8,10], 8))

