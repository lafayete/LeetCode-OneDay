
// 二叉搜索树：左子树节点均小于根节点，右子树的节点都大于根节点
// 思路： 中序遍历后，可以得到一组从小到大排序的数组

var kthLargest = function(root, k) {

    let result = [];

    let stack = [];

    while(root!==null || stack.length > 0) {


        if(root !==null) {
            
            stack.push(root);

            root = root.left;

        } else {

            const node = stack.pop();

            result.push(node.val);

            root = node.right;

        }

    }


    if (k > 0 && k <= result.length) {
        return result[ result.length - k];
    } else {
        return null
    }


};