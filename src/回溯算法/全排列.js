var permute = function(nums) {

    let result = [];

    recur(0);

    function recur(begin) {

        if(begin === nums.length) {

            result.push([...nums]);

            return

        } else {

            for(let i=begin; i < nums.length; i++) {

                swap(nums, i, begin);

                recur(begin + 1);

                swap(nums, i, begin);

            }


        }

    }

    return result;

    function swap(arr, i, j) {

        let temp = arr[i];

        arr[i] = arr[j];

        arr[j] = temp;

    }


};

permute([1,2,3]);