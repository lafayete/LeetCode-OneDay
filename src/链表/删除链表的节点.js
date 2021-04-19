var deleteNode = function(head, val) {

    if (head.val === val) return head.next

    let prev = head, node = prev.next

    while (node) {
        if (node.val === val) {
            prev.next = node.next
        }
        // 遍历 不断迭代 prev 与 node
        prev = node
        node = node.next
    }

    return head

};