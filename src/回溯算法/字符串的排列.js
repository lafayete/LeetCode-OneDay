var permutation = function(s) {

    let result = [];

    let list = s.split(""); // [a, b, c]

    recur(0);

    function recur(begin) {

        if(begin === list.length - 1) {

            result.push(list.join(''));

        } else {

            let set = new Set();

            for(let i = begin; i< list.length; i++) {

                if(set.has(list[i])) {
                    continue;
                }
                
                set.add(list[i]);

                swap(list, i, begin);

                recur(begin + 1);

                swap(i, begin);

            }

        }

    }


    function swap(result, a, b) {

        let temp = result[a];

        result[a] = result[b];

        result[b] = temp;

    }

    return result;

};