var sortList = function(head) {


    function merge(left, right) {

        let prevHead = new ListNode(-1);

        let prev = prevHead;

        while(left  && right ) {

            if(left.val >=right.val) {

                prev.next = right;

                right = right.next;

            } else {

                prev.next = left;

                left = left.next;
            }

            prev = prev.next;

        }

        prev.next = left ? left: right;

        return prevHead.next;
    }


    function toSortList(head) {

        if(!head || !head.next) {
            return head;
        }

        let slow = head; 

        let fast = head;

        let preSlow = null;

        while(fast && fast.next) {

            preSlow = slow;

            slow = slow.next;

            fast = fast.next.next;

        }

        preSlow.next = null;

        return merge(toSortList(head), toSortList(slow));

    }



};