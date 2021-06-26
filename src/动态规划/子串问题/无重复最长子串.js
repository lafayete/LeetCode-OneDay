// var lengthOfLongestSubstring = function(s) {

//     let n = s.length;

//     if(n === 0 || n===1) {

//         return n;
//     }


//     let dp = Array.from(new Array(n), () => {
//         return new Array(n).fill(false);
//     })

//     for(let i = 0; i< n; i++) {

//         dp[i][i] = true;
//     }

//     let res = 1;

//     for(let i = n - 1; i >=0 ; i--) {

//         for(let j = i + 1; j< n; j++) {

//             dp[i][j] = (dp[i][j-1] && dp[i+1][j] && s[i] != s[j]);

//             if (dp[i][j] && j - i + 1 > res) res = j - i + 1;
//         }

//     }

//     return res;

// };

//滑动窗口
var lengthOfLongestSubstring = function(s) {

  let map = new Map();

  let start = 0;

  let maxLength = 0;

  for(let i=0; i< s.length; i++) {

    if(map.get(s[i]) >= start) {

        start = map.get(s[i]) + 1;
    
    }

    map.set(s[i], i);

    maxLength =  Math.max(maxLength, i - start + 1);

  }

  return maxLength;

};


lengthOfLongestSubstring('abcabcbb');