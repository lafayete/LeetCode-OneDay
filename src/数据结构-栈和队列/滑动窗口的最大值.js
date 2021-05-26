var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) {
        return []
    }


    const queue = [];

    for (let i=0;i < k; i++) {

        while(queue && queue[queue.length - 1] < nums[i]) {


            queue.pop();

        }

        queue.push(nums[i]);

    }


    const res = [];

    res.push(queue[0]);


    for(let i = k; i< nums.length; i++) {

        if(queue[0] === nums[i-k]) queue.shift()

        while(queue && queue[queue.length - 1] < nums[i]) {

            queue.pop();
        }

        queue.push(nums[i]);

        res.push(queue[0]);



    }


    return res;



};