var rotate = function(matrix) {

    let n = matrix.length;

    // for(let i=0; i< Math.floor(n / 2); i++) {

    //     for(let j=0; j< n - 1 - i;j++ ) {

    //         let temp = matrix[i][j];

    //         matrix[i][j] = matrix[n - j - 1][i];
    //         matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
    //         matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
    //         matrix[j][n - i - 1] = temp;

    //     }

    // }


    for(let i=0; i< n; i++) {

        for(let j =0; j< i; j++) {

            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            
        }
    }


    let start = 0;

    let end = n-1;

    while(start < end) {

        for(let i=0; i< n; i++) {

            [matrix[i][start],matrix[i][end]] = [matrix[i][end],matrix[i][start]];

        }

        start++;

        end--;


    }

    return matrix;

};


let matrix = [[1,2,3],[4,5,6],[7,8,9]];

let result = rotate(matrix);

console.log(matrix);
