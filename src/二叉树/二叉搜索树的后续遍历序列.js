// 思路： 二叉搜索树的特点 左子树的节点均小于根节点，右子树的节点均大于根节点

// 后序遍历顺序为 左 -》右 -》根

var verifyPostorder = function(postorder) {

    let len = postorder.length;

    if(len < 2) return true;

    let root = postorder[len -1];

    let i =0;

    for (;i < len -1 ; i++) {
        if(postorder[i] > root) break;
    }

    let result = postorder.slice(i, len - 1).every((item) => {
        return item > root;
    })

    if(result) {
        return verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, len -1));
    } else {
        return false;
    }
};