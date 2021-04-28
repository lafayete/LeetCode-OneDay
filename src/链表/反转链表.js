
var reverseList = function(head) {

    let prev = null, cur = head ;

    while(cur !==null) {

        let nextNode = cur.next;

        cur.next = prev;

        prev = cur;

        cur = nextNode;

    }
    
    return prev;

};