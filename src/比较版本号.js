
// 分割
// var compareVersion = function(version1, version2) {

//     let v1 = version1.split('.');

//     let v2 = version2.split('.');

//     let i = 0;

//     while( i < v1.length || i < v2.length) {

//         let x = 0;

//         let y = 0;

//         if(v1[i]) {


//             x =  parseInt(v1[i]);

//         }

//        if(v2[i]) {


//         y = parseInt(v2[i]);

//        }

//         if(x < y) {

//             return -1;
//         }

//         if(x > y) {

//             return 1;
//         }

//         i++;

//     }

//     return 0;

// };


// 双指针
var compareVersion = function(version1, version2) {

    let n1 = version1.length;

    let n2 = version2.length;

    let i = 0;

    let j = 0;

    while(i < n1 || j < n2) {

        let x = 0;

        for(; i<n1  && version1[i] !== '.'; i++) {

            x = x * 10 + parseInt(version1[i]);

        }

        i++;

        let y = 0;

        for(; j<n2 && version2[j] !== '.'; j++) {

            y = y * 10 + parseInt(version2[j]);
        }

        j++;

        if( x != y) {

            return x < y ? -1 : 1;

        }

    }

    return 0;

}

let result = compareVersion("1.0.1", "1");

console.log(result);