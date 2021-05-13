

// 自顶向下
var isBalanced = function(root) {

    if(!root) return true;

    const depth = (node) => {

        if(!node)  return 0;

        return Math.max(depth(node.left), depth(node.right)) + 1;

    }


    const left = depth(root.left), right = depth(root.right);

    return Math.abs(left - right) < 2 && isBalanced(root.left) && isBalanced(root.right)


};

// 自下向上

var isBalanced2 = function(root) {

    const recur = node => {
        if (!node) return 0

        const left = recur(node.left), right = recur(node.right)

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
        
        return Math.max(left, right) + 1
    }

    return recur(root) !== -1;

}