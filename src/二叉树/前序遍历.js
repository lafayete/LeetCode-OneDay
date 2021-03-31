
// 递归实现

// const preOrderTraversal = function (root) {

//     const result = [];

//     function preorder(root) {
//         if(root === null) return;
//         result.push(root.val);
//         preorder(root.left);
//         preorder(root.right);
//     }
//     preorder(root);
//     return result;

// }

// 栈实现

const preOrderTraversal = function (root) {

    const result = [];

    const stack = [];

    while(stack.length || root !==null) {

        if(root !== null) {

            result.push(root.val);

            stack.push(root);
    
            root = root.left;

        } else {

            let cur = stack.pop();
        
            root = cur.right;

        }

    }

    return result;
}