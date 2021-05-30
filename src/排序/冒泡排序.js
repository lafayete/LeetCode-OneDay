function swap(array, i, j) {

    let temp = array[i];

    array[i] = array[j];

    array[j] = temp;

    return array;

}

function bubbleSort(array) {

    if (array.length <= 1) {
        return array;
      }

    for(let i=0; i< array.length; i++) {

        for(let j=0; j< array.length - 1; j++) {

            if(array[j+ 1] < array[j]) {

                swap(array, j+1, j)

            }

        }
    }

    return array;
}


