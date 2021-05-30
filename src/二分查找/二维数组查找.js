// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


var findNumberIn2DArray = function(matrix, target) {

    if(matrix.length === 0 || matrix[0].length === 0) {

        return false;
    }
    

    let row = 0 ;

    let coloum = matrix[0].length - 1;

    let result = false;

    while(row < matrix.length && coloum >= 0) {

        if (target < matrix[row][coloum]) {


            coloum--;
    
        } else if (target > matrix[row][coloum]){
    
    
            row++;


        } else {

            result = true;

            break;
        }    

    }

    return result;

};


console.log(findNumberIn2DArray([  [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 9))



console.log(findNumberIn2DArray([[-5]
], -10))
