
// 递归实现

// const inOrderTraversal = function (root) {

//     const result = [];

//     function inorder(root) {
//         if(root === null) return;
//         inorder(root.left);
//         result.push(root.val);
//         inorder(root.right);
//     }
//     inorder(root);
//     return result;

// }

// 栈实现

const inOrderTraversal = function (root) {

    const result = [];

    const stack = [];

    while(stack.length || root !==null) {

        if(root !== null) {

            stack.push(root);
    
            root = root.left;

        } else {

            let cur = stack.pop();

            result.push(cur.val);
        
            root = cur.right;

        }

    }

    return result;
}