
var mirrorTree = function(root) {


    if(!root) return root;

    const temp = root.left;

    root.left = root.right;

    root.right = temp;

    mirrorTree(root.left);

    mirrorTree(root.right);

    return  root;


};