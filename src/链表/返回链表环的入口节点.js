var detectCycle = function(head) {
    
    let slow = head;

    let fast = head;

    while(fast) {

        if(fast.next === null) {
            return null
        }

        slow = slow.next;

        fast = fast.next.next;

        if(slow === fast) {

            let node = head;

            while(true) {

                if(slow === node) {

                    return node;
                }

                slow = slow.next;

                node = node.next;

            }

        }

    }
    return null;

};

  
