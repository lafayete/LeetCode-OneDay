var reverseWords = function(s) {

    let left = 0;

    let right = s.length -  1;

    let queue = [];

    let word = '';

    while(s.charAt(left) === ' ') left++;

    while(s.charAt(right) === ' ') right--;

    while(left <= right) {

        let char = s.charAt(left);

        if(char !== ' ') {

            word +=char;

        } else {

            if(word) {
                queue.unshift(word);
            }

            word = '';

        }

        left++;

    }

    queue.unshift(word);

    return queue.join(' ');

};


reverseWords('a good  example');