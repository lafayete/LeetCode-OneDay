
// 递归实现

// const postOrderTraversal = function (root) {

//     const result = [];

//     function postorder(root) {
//         if(root === null) return;
//         postorder(root.left);
//         postorder(root.right);
//         result.push(root.val);
//     }
//     postorder(root);
//     return result;

// }


// 栈实现

const postOrderTraversal = function (root) {

    const result = [];

    const stack = [];

    while(stack.length || root !==null) {

        if(root !== null) {

            result.push(root.val);

            stack.push(root);
    
            root = root.right;

        }  else {


            let cur = stack.pop();
        
            root = cur.left;

        }
    
    }

    result = result.reverse();

    return result;
}