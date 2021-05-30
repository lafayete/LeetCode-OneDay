
function swap(array, i, j) {

    let temp = array[i];

    array[i] = array[j];

    array[j] = temp;

    return array;

}

function selectSort(array) {

    let minIndex;

    for(let i=0; i< array.length; i++) {

        minIndex = i;

        for(let j=i+1; j< array.length; j++) {

            if(array[j] < array[minIndex]) {

                swap(array, i, j);

            }

        }

    }


    return array;

}
