//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

var spiralOrder = function(matrix) {

    if(!matrix.length) return [];

    let l = 0;

    let t = 0;

    let r = matrix[0].length - 1;

    let b = matrix.length - 1;

    let result = [];

    while(true) {

        for (let i = l; i < r + 1; i++  ) {

            result.push(matrix[t][i]);
        }

        t++;

        if(t > b) break;


        for(let i = t; i < b + 1; i++) {

            result.push(matrix[i][r]);
        }

        r--;


        if(l > r) break;


        for(let i = r; i >= l; i--) {

            result.push(matrix[b][i]);
        }

        b--;

        if(t > b) break;


        for(let i = b; i >=t; i--) {
            result.push(matrix[i][l]);
        }

        l++;

        if(l > r) break;

    }

    return result

};
