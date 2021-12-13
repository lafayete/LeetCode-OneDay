//给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

//解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

var subsets = function(nums) {

    let result = [];

    dfs([], 0);

    function dfs(cur, index) {

        if(cur.length < nums.length + 1) {

            result.push([...cur]);

        } 


        if(cur.length === nums.length) {

            return;
            
        }

        for(let i=index; i < nums.length; i++) {

            if(cur.indexOf(nums[i]) == -1) {

                cur.push(nums[i]);

                dfs(cur, i + 1);

                cur.pop();

            }

        }

    }

    return result;

}


let nums = [1,2,3];

let result = subsets(nums);

console.log(result);