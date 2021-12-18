var getLeastNumbers = function(arr, k) {


    if(k >= arr.length) {

        return arr;
    } 

    return quickSort(arr, k, 0, arr.length - 1);

    function quickSort(arr, k, left, right) {

        let i = left;

        let j = right;

        while( i < j ) {

            while( i < j && arr[j] >=arr[left]) {

                j--;

            }

            while( i < j && arr[i] <=arr[left]) {

                i++;
            }

            swap(arr, i ,j);
        }

        swap(arr, i, left);

        if( k< i) {

            return quickSort(arr, k, left, i-1)

        } else if( k > i) {

            return quickSort(arr, k, i+1 ,right);

        } else {

            return [...arr.splice(0, k)];
        }

        

    }


    function swap(arr, i, j) {

        let temp = arr[i];

        arr[i] = arr[j];

        arr[j] = temp;

    }

};