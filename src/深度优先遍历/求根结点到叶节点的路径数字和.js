var sumNumbers = function(root) {

    if(!root) return 0;

    return dfs(root, 0);


    function dfs(root, prevNum) {

        if(!root) {
            return 0;
        }

        let sum = prevNum * 10 + root.val;

        if(!root.left && !root.right) {

            return sum;
        }

        return dfs(root.left, sum) + dfs(root.right, sum);
        
    }
    

};