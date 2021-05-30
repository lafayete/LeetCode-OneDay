var mergeSort = function(array) {

    function merge(arr1, arr2) {

        let temp = [];

        while(arr1.length && arr2.length) {

            if(arr1[0] < arr2[0]) {

                temp.push(arr1.shift());
            } else {

                temp.push(arr2.shift());
            }

        }

        while(arr1.length) {

            temp.push(arr1.shift());
        }

        while(arr2.length) {
            temp.push(arr2.shift());
        }

        return temp;

    }

    if(array.length < 2) {

        return array;
    }

    var middle = Math.floor(array.length / 2);

    var front = array.slice(0, middle);

    var end = array.slice(middle);

    return merge(mergeSort(front), mergeSort(end));

}
