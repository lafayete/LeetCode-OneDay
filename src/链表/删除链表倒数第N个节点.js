var removeNthFromEnd = function(head, n) {

    let newNode = new ListNode(-1, head);

    let fast = newNode;

    let slow = newNode;
    
    while (n--) {
        fast = fast.next;
    }
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next =slow.next.next;

    return newNode.next;
    

};