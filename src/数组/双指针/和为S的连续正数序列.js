//输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

//序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。


var findContinuousSequence = function(target) {

    let left = 1;

    let right = 2;

    let list = [];

    let sum = left + right;

    while(left < target / 2) {

        if (sum < target) {

            right ++;

            sum += right

        } else if (sum > target) {

            sum -=left;

            left++;

        } else {

            let arr = [];

            for (let i =left; i<= right; i++) {
                arr.push(i)
            }


            list.push(arr);

            sum -=left;

            left++;

        }

    }

    return list;

};

findContinuousSequence(9);