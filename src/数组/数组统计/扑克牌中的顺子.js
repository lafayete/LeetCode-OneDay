// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

// 输入: [1,2,3,4,5]
// 输出: True


// 输入: [0,0,1,2,5]
// 输出: True

var isStraight = function(nums) {

    nums.sort((a, b) => {
        return a - b;
    })

    let jokerNum = 0;

    for (let i = 0; i< nums.length; i++) {

        if (nums[i] === 0) {


            joker++;

            continue;

        }


    if (nums[i] === nums[i + 1]) return false;


        if(nums[i] + 1 === nums[i + 1]) {

            continue;

        } else {

            jokerNum -= nums[i + 1] - nums[i] - 1;

            if(jokerNum < 0) {
                return false
            }

        }

    }

};