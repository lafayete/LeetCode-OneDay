var permute = function(nums) {

    let result = [];

    recur([]);

    function recur(path) {

        if(path.length === nums.length) {

            result.push([...path]);

            return;
        }

        for(let i= 0; i< nums.length; i++) {

                if(path.includes(nums[i])) {
                    continue;
                }

                path.push(nums[i]);

                recur(path);

                path.pop();

        }

    }

    return result;

};

permute([1,2,3]);