var lowestCommonAncestor = function(root, p, q) {

    if(root === null || root === p || root === q ) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);

    let right = lowestCommonAncestor(root.right, p, q);


    if(left === null) {

        return right;

    }

    if(right === null) {

        return left;
    }


    return root;
    
};

// var lowestCommonAncestor = function(root, p, q) {


//     let map = new Map();

//     let visit = new Map();

//     dfs(root);
    
//     function dfs(root) {

//         while(root.left !==null) {

//             map.set(root.left.val, root);

//             dfs(root.left);

//         }


//         while(root.right !==null) {

//             map.set(root.right.val, root);

//             dfs(root.right);

//         }

//     }


//     while(p !== null) {

//         visit.set(p.val, true);

//         p = map.get(p.val);

//     }


//     while(q !==null) {

//         if(visit.get(q.val)) {

//             return q;
//         }

//         q = map.get(q.val);

//     }

//     return null;

// }
