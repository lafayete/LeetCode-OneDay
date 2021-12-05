
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"


//动态规划法求解
var longestPalindrome = function(s) {

    let n = s.length;

    if(n == 0) {
        return 0 ;
    }

    if( n == 1) {
        return s[0];
    }

    let dp = Array.from(new Array(n), () => {
        return new Array(n).fill(false);
    })


    for(let i =0; i< n; i++) {

        dp[i][i] = true;
    }

    let start = 0;
    let maxLength = 1;
    

    for(let i = n - 1; i >= 0; i--) {

        for(let j= i+ 1; j< n; j++) {

            if(s[i] !==s[j]) {


                dp[i][j] = false;

            } else {

                if(j - i < 3) {

                    dp[i][j] = true;

                } else {

                    dp[i][j] = dp[i+1][j-1];
                }

            }



            if (dp[i][j] === true && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                start = i;
            }


        }


    }


    return s.substring(start, start + maxLength);

};



