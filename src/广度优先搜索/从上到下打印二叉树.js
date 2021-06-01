var levelOrder = function(root) {

    let queue = [];

    let result = [];

    if (root) {

        queue.push(root);

        while(queue.length) {

            let node = queue.shift();    
    
            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }

            result.push(node.val);

        }


    }

    return result;

};