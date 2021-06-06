


var hasPathSum = function(root, targetSum) {

    if(!root) {

        return false;
    }


    let queue_node = [];

    let queue_val = [];



    queue_node.push(root);

    queue_node.values.push(root.val);


    while(queue_node.length) {

        let node = queue_node.shift();

        let val = queue_val.shift();

        if(node.left === null && node.right === null) {

            if(val === targetSum) {
                return true;
            }
            continue;
        }


        if(node.left) {

            queue_node.push(node.left);

            queue_val.push(node.left.val + val);
        }


        if(node.right) {

            queue_node.push(node.right);

            queue_val.push(node.right.val + val);
        }


    }


    return false;

};