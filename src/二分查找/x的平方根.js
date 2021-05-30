var mySqrt = function(x) {

    if(x === 0 || x === 1) {

        return x;
    }

    let left = 0;

    let right = x;

    let middle;

    let result;

    while(left <= right) {


        middle = Math.floor( ( left + right ) / 2 );


        if( middle * middle > x) {

            right = middle - 1;

        } else if (middle * middle < x ) {

            left = middle + 1;

        } else {


            result = middle;

            return result;
        }


    }


    result = right;


    return result;


};


console.log(mySqrt(9));