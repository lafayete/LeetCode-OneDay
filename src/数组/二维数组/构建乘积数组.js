var constructArr = function(a) {

    var result = [];

        let left = 1;


        for(let i=0; i < a.length; i++) {

            result[i] = left;

            left *= a[i];
        }


        let right = 1;

        for(let i = a.length - 1; i>= 0; i-- ) {

            result[i] *= right;

            right *= a[i];

        }


    return result;

};

console.log(constructArr([1,2,3,4,5]))