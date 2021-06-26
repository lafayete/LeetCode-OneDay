var addTwoNumbers = function(l1, l2) {


    let dummy = new ListNode(-1);

    let p = dummy;

    let add = 0;

    let val;

    while(l1!==null || l2!=null || add !==0) {

        val = ( l1 === null ? 0 : l1.val ) + (l2 ===null ? 0: l2.val) + add;

        add = Math.floor(val / 10);

        let curVal = val % 10;

        p.next = new ListNode(curVal);

        l1 = l1 === null ? null : l1.next;

        l2 = l2 === null ? null : l2.next;

        p = p.next;

    }


    return dummy.next;

};