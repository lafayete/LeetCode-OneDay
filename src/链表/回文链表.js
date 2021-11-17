var isPalindrome = function(head) {

    let result = [];

    while(head !== null) {

        result.push(head.val);

        head = head.next;

    }

    let start = 0;

    let end = result.length - 1;

    while(start < end) {

        if(result[start] === result[end]) {

            start++;

            end--;

        } else {

            return false;
        }

    }

    return true;

};
