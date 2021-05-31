var guessNumber = function(n) {
    
    let left = 1;

    let right = n;

    let result;

    while(left <= right) {


        let middle = Math.floor((right + left) / 2 );

        let guessResult = guess(middle);

        if(guessResult === 0) {

            result = middle;

            break;


        } else if (guessResult === -1) {

            right = middle - 1

        } else {

            left = middle + 1;

        }

    }


    return result;


};