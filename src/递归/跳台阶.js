var numWays = function(n) {

    if(n == 1 || n== 2) {

        return n;
    } 


    let prev = 1;

    let current = 2;

    let i = 3;

    let result;

    while(i <=n) {


        result = prev + current;

        prev = current;

        current = result;

        i++;
    }

    return result;

};