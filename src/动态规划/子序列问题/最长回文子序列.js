var longestPalindromeSubseq = function(s) {

    if(s.length <=1) {
        return s.length;
    }

    const len = s.length;

    const dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0));


    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (i == j) {
                dp[j][j] = 1
                continue
            }
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][len - 1]

};