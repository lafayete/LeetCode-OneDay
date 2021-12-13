// 递归

var mergeTwoLists = function(l1,l2) {

    if(l1 == null) {

        return l2;

    } else if( l2 == null) {

        return l1;

    } else {

        if(l1.val < l2.val) {

            l1.next = mergeTwoLists(l1.next, l2);

            return l1;

        } else {

            l2.next = mergeTwoLists(l2.next, l1);

            // return l2;/
        }

    }

}

// 迭代法
var mergeTwoLists = function(l1, l2) {

    const prevhead = new ListNode(-1);

    let prev = prevhead;

    while(l1!==null || l2!=null) {

        if(l1.val<=l2.val) {

            prev.next = l1;

            l1 = l1.next;

        } else {

            prev.next = l2;

            l2 = l2.next;
        }

        prev = prev.next;

    }

    prev.next = l1 !== null? l1 : l2;

    return prevhead.next;

};