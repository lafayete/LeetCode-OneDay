var sumNums = function(n) {

    n>1 && (n+=sumNums(n-1));

    return n;

};