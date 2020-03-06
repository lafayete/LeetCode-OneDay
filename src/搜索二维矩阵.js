//编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

//每行中的整数从左到右按升序排列。
//每行的第一个整数大于前一行的最后一个整数。

//示例1: 
//输入:
// matrix = [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ]
//   target = 3
//   输出: true

//示例2
// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// 输出: false
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    //二分查找
    let left = 0;
    let right = m * n -1;
    let pivotIdx, pivotElment;
    while(left <= right) {
        pivotIdx = Math.floor((left + right) / 2);
        let row = Math.floor(pivotIdx / n);
        let col = pivotIdx % n;
        pivotElment = matrix[row][col];
        if(target === pivotElment) {
            return true;
        }else if (target > pivotElment) {
            left = pivotIdx + 1;
        } else {
            right = pivotIdx -1 ;
        }
    }
    return false;
};

console.log(searchMatrix([
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ], 3))

console.log(searchMatrix([
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ], 4));

