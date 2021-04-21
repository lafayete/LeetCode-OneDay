var removeDuplicateNodes = function(head) {

    if (head ==null) return head;

    let prev = head, node = prev.next

    let cache = new Set();

    cache.add(head.val);

    while(node !== null) {

        if (!cache.has(node.val)) {
            cache.add(node.val);
            prev = prev.next;
            node = node.next;
        
        } else {
            prev.next = node.next;
            node = node.next;
        }
    }


    return head;

};