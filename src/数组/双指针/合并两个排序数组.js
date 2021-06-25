// 双指针
// var merge = function(nums1, m, nums2, n) {

//     let arr = new Array(m + n).fill(0);

//     let p1 = 0;

//     let p2 = 0;


//     while(p1 < m || p2 <n) {

//         if(p1 === m) {

//             cur = nums2[p2++];

//         } else if (p2 === n) {

//             cur = nums1[p1++];

//         } else if (nums1[p1] < nums2[p2]) {

//             cur = nums1[p1++];

//         } else {

//             cur = nums2[p2++];

//         }

//         console.log(p1, p2, cur);

//         arr[p1 + p2 - 1] = cur;

//     }

//     for(let i=0; i< m + n; i++) {

//         nums1[i] = arr[i];

//     }

// };

// 改进

var merge = function(nums1, m, nums2, n) {

    let p1 = m - 1;

    let p2 = n - 1;

    let tail = m + n -1;

    let cur;


    while(p1 >= 0 || p2 >=0) {

        if(p1 === -1) {

            cur = nums2[p2--];

        } else if (p2 === -1) {

            cur = nums1[p1--];

        } else if (nums1[p1] < nums2[p2]) {

            cur = nums2[p2--];

        } else {

            cur = nums1[p1--];

        }

        nums1[tail--] = cur;

    }


};

