var isValidBST = function(root) {

    // 中序遍历 + 严格递增判断

    let result = [];

    function inOrder(root) {

        if(root === null) {

            return;
        }

        inOrder(root.left);

        result.push(root.val);

        inOrder(root.right);

    }

    inOrder(root);


    for(let i=1; i<result.length;i++) {

        if(result[i] <= result[i - 1]) {

            return false;
        }


    }

    return true;

};
