
function swap(array, i, j) {

    let temp = array[i];

    array[i] = array[j];

    array[j] = temp;

    return array;

}

function insertSort(array) {

    for (i=1;i< array.length;i++) {

        target = i;

        for( j = i-1; j>0; j--) {


            if(array[j] > array[target]) {

                swap(array, target,j);

                target = j;

            } else {

                break;
            }


        } 


    }

    return array;    
}
