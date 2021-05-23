var firstUniqChar = function(s) {

    let map = new Map();

    let arr = s.split("");

    for(let i = 0; i< arr.length; i++) {

        if(!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {

            let count = map.get(arr[i]);

            count++;

            map.set(arr[i], count)
        }
        
    }

    let str;

    console.log(map);

    for(let [key, value] of map.entries()) {

        if (value === 1) {
            str = key;
            break;
        }

    }


    return str;

}
