var reverseBetween = function(head, left, right) {
    
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

   // 2
   let pre = dummy_node;
   for (let i = 0; i < left - 1; ++i) {
       pre = pre.next;
   }
   //  3
   let cur = pre.next;
   for (let i = 0; i < right - left; ++i) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;


};