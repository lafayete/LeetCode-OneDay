// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

var minArray = function(numbers) {


    let start = 0;

    let end = numbers.length -1;


    while(start < end) {


        let middle = Math.floor((start + end) / 2);


        if(numbers[middle] > numbers[end]) {

            start = middle + 1;


        } else if (numbers[middle] < numbers[end]) {

            end = middle;

        } else {

            end--;

        }


    }

    return numbers[start];

};