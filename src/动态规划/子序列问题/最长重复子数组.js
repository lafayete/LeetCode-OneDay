var findLength = function(nums1, nums2) {

    let n1 = nums1.length;

    let n2 = nums2.length;


    let max = 0;

    let dp = Array.from(new Array(n1 + 1), () => {

        return new Array(n2 + 1).fill(0);

    })


    for(let i =1 ;i<=n1; i++) {

        for(let j=1; j <=n2; j++) {
            
            if(nums1[i-1] === nums2[j-1]) {

                dp[i][j] = dp[i-1][j-1] + 1;

            } 

            max= Math.max(dp[i][j], max);

        }

    }


    return max;

};


findLength([1,2,3,2,1], [3,2,1,4]);