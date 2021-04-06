// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {

    if(!preorder.length || !inorder.length) return null;

    const value = preorder[0];

    const index = inorder.indexOf(value);

    const inleft = inorder.slice(0, index);

    const inright = inorder.slice(index + 1);

    const preleft = preorder.slice(1, index + 1);

    const preright = preorder.slice(index + 1);

    const node = new TreeNode(value);

    node.left = buildTree(preleft, inleft);

    node.right = buildTree(preright, inright);

    return node;

};