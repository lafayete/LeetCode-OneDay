function LastRemaining_Solution(n, m) {
    if( n < 1 || m < 1) {

        return -1;
    }
    let head = {
        val: 0
    }

    let current = head;
    
    for(let i=1; i < n;i++) {
        current.next = {
            val: i
        };
        current = current.next;
    }

    current.next = head;

    while (current.next !==current) {

        for(let i =0; i< m; i++) {

            current = current.next;

        }

        current.next = current.next.next;


    }

    return current.val;


}