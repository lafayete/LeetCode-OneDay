// 动态规划求解

var fib = function(n) {

    if(n < 1) {
        return 1
    }



    if( n == 0 || n==1 ) {

        return n;
    }



    let prev = 0;

    let current = 1;

    let result;

    let i = 2;


    while(i<=n) {


        result = ( prev + current ) % 1000000007;

        prev = current;

        current = result;
        
        i++;

    }


    return result ;

};



