

// 思路： 镜像二叉树， （1）根节点相同 （2）左子树的左节点 === 右子数的右节点 （3） 左子树的右节点 === 右子树的左节点

 var isSymmetric = function(root) {


    if(!root) return true;


    function isSymmetricTree(left, right) {

        if(!left && !right) return true;

        if(!left || !right) return false;

        if (left.val !== right.val) {
            return false
        }

        return isSymmetricTree(left.left,right.right) && isSymmetricTree(left.right, right.left);

    }

    return isSymmetricTree(root.left, root.right);

};