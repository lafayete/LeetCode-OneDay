var deleteDuplicates = function(head) {

    if(head === null) {
        return head;
    }

    let prev = head, node = head.next;

    while(node !== null) {

        if(prev.val === node.val) {

            prev.next = node.next;

            node = node.next;

        } else {

            prev = prev.next;

            node = node.next;
        }


    }

    return head;

};