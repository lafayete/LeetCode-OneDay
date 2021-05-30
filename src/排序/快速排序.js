function quickSort(array) {

    if (array.length <= 1) {
        return array;
      }

    let left = [];

    let right = [];

    let targetIndex = 0;

    let target = array[targetIndex];

    for(let i=1; i<array.length; i++) {

        if(array[i] > target) {

            right.push(array[i]);

        } else {

            left.push(array[i]);
        }

    }
    return quickSort(left).concat(target,quickSort(right));
}
