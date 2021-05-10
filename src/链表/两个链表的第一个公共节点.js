
var getIntersectionNode = function(headA, headB) {

    if(!headA || !headB) {

        return null;
    }


    let aLength = getLength(headA);

    let bLength = getLength(headB);


    let long, short, interval;

    if(aLength > bLength) {

        long = headA;

        short = headB;

        interval = aLength - bLength;

    } else {

        long = headB;

        short = headA;

        interval = bLength - aLength;

    }


    while(interval --) {

        long = long.next;
    }

    

    while (long && short) {

        if (long === short) {

            return long;

        } 

        long = long.next;
        short = short.next;
    }
   
    return null



};


function getLength(head) {


    let current = head;

    let len = 0;

    while(current) {

        len++;

        current = current.next;

    }

    return len;

}