
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
    let len = s.length;
    if(len < 2) {
        return s;
    };

    var dp = new Array(len); 
    for(var i = 0;i< len; i++){ 
        dp[i] = new Array(); 
        for(var j = 0;j < len; j++){ 
            if (i === j) {
                dp[i][j]= true;
            } else {
                dp[i][j]= false;
            }
        }
    }


    let maxLen = 1;
    let start = 0;

    for(j = 1;j < len; j++) {

        for(i = 0;i < len; i++) {

            if(s.charAt(i) === s.charAt(j)) {
                if( j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                } 
            }else {
                dp[i][j] = false;
            }

            if(dp[i][j]) {
                let curLen = j - i + 1;
                if (curLen > maxLen) {
                    maxLen = curLen;
                    start = i;
                }
            }
        }
    }
    return s.substring(start , start + maxLen);
};


