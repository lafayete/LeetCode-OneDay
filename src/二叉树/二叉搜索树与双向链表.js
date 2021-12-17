// 方法一： 中序遍历 + 保存节点
// var treeToDoublyList = function(root) {

//     let result = [];

//     inOrder(root);

//     function inOrder(root) {

//         if(root === null) return;

//         inOrder(root.left);

//         result.push(root);

//         inOrder(root.right);
        
//     }

//     for(let i=0; i< result.length; i++) {

//         let cur = result[i]

//         cur.left = i == 0 ? result[result.length - 1]: result[i-1];

//         cur.right =  i == result.length - 1 ? result[0]: result[i+1]

//     }

//     return result[0];
// };

// 方法二 不保存节点
var treeToDoublyList = function(root) {
    
    if(!root) return null
    let head = null;  
    let pre = null;  // 前一个节点

    function dfs(node){
        if(!node) return;
        dfs(node.left);
        if(!pre) { 
            head = node;
        }else{
            pre.right = node;
            node.left = pre;
        }
        pre = node;
        
        dfs(node.right);
    }
    dfs(root)
    head.left = pre;
    pre.right = head;
    return head;

};