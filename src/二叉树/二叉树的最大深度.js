
// 递归法
var maxDepth = function(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};

// 广度优先遍历法

var maxDepth2 = function(root) {


    if(!root) return 0;


    let quene = [];
    
    let res = 0;

    quene.push(root);

    while(quene.length) {


        let tmp = [];

        for (let i= 0; i< quene.length; i++) {

            if (quene[i].left) {

                tmp.push(quene[i].left);

            }

            if(quene[i].right) {

                tmp.push(quene[i].right);
            }

        }

        quene = tmp;


        res++;

    }


    return res;


}