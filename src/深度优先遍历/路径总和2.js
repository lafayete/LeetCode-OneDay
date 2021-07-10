var pathSum = function(root, targetSum) {

    let result = [];

    if(!root) {
        return result;
    }

    dfs(root, root.val, [root.val]);

    return result;


    function dfs(root, curSum, arr) {

        if(!root.left && !root.right) {

            if(curSum === targetSum) {
                result.push(arr);
            }

            return;

        } else {

            if(root.left) {

                dfs(root.left, curSum + root.left.val, [...arr, root.left.val]);
            }


            if(root.right) {

                dfs(root.right, curSum + root.right.val, [...arr, root.right.val]);

            }
        }
        

    }

};