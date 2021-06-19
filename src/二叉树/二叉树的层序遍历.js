var levelOrder = function(root) {

    let queue = [];

    let result = [];

    if(root) {

        queue.push(root);

        while(queue.length) {

            let arr = [];

            let size = queue.length;

            for(let i=0; i< size; i++) {

                let node = queue.shift();

                arr.push(node.val);

                if(node.left) {
                    queue.push(node.left);
                }
        
                if(node.right) {
                    queue.push(node.right);
                }

            }
        
            result.push(arr);
    
        }

    }

    return result;

};