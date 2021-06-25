var zigzagLevelOrder = function(root) {

    let queue = [];

    let res = [];

    let isLeft =  true; 

    if(root) {

        queue.push(root);

        while(queue.length) {

            let arr = [];

            let size = queue.length;

            for(let i =0 ; i< size; i++) {


                let curNode = queue.shift();

                if(!isLeft) {

                    arr.push(curNode.val);

                } else {

                    arr.unshift(curNode.val);
                }

                if(curNode.right) {

                    queue.push(curNode.right);
                }

                if(curNode.left) {
                    queue.push(curNode.left);
                }

            }

            res.push(arr);

            isLeft = !isLeft;
        }

    }

    return res;

};