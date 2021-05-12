
// 遍历了两次
// var getKthFromEnd = function(head, k) {


//     var getLength = function(head) {

//         let result = 0;
    
    
//         let current = head;
    
    
//         while(current) {
    
//             result++;
            
//             current = current.next
    
//         }
    
//         return result;
    
//     }

//     let len = getLength(head);

//     let node = head;

//     for (let i=0; i< k - len ; i++) {

//         node = node.next;

//     }

//     return node;

// };

var getKthFromEnd = function(head, k) {

    if( !head || !k ) return null;

    let front = head;

    let behind = head;


    let index = 1;

    while(front.next) {

        
        index++;

        front = front.next;

       if(index > k) {

            behind = behind.next;
        }


    }

    return (k <= index) && behind;



}