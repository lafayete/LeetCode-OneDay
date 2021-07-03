var findNumberIn2DArray = function(matrix, target) {

    if(!matrix.length) {
        return false;
    }

    let n = matrix.length;

    let m = matrix[0].length;

    let row = 0;

    let column = m - 1;

    while(row < n && column>=0) {

        if(matrix[row][column] === target) {

            return true;

        } else if(matrix[row][column] < target) {

            row++;

        } else {

            column--;
        
        }

    }

    return false;

};