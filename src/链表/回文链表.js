var isPalindrome = function(head) {


    if(head === null) {
        return false;
    }

    let stack = [];

    while(head !==null) {

        stack.push(head.val);

        head = head.next;

    }



    let left = 0;

    let right = stack.length - 1;

    while(left <= right) {


        if(stack[left] === stack[right]) {

            left++;

            right--;

        } else {

            return false;
        }

    }

    return true;

};
