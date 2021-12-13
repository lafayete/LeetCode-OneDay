var longestConsecutive = function(nums) {


    let set =  new Set();

    for(let num of nums) {

        set.add(num);

    }


    let maxLen = 0;

    for(let num of set) {

        if(!set.has(num-1)) {

            let curLen = 1;

            let curNum = num;

            while(set.has(curNum + 1)) {

                curLen++;

                curNum++;

            }

            maxLen = Math.max(maxLen, curLen);

        }

    }

    return maxLen;

};


longestConsecutive([0,3,7,2,5,8,4,6,0,1]);