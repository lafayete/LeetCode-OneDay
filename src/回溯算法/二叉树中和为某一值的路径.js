var pathSum = function(root, target) {

    let res = [];

    let stack = [];

    function recur(node, sum) {

        if(node == null) return;

        sum -=node.val;

        stack.push(node.val);


        if (sum === 0 && node.left === null && node.right === null) {
            res.push([...stack]);
        }

        recur(node.left, sum);

        recur(node.right, sum);

        stack.pop();

    }

    recur(root, target);

    return res;

};

pathSum();