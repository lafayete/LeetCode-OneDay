//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。



var lengthOfLongestSubstring = function(s) {

    const map = {};

    let left = 0;
    let right = 0;
  
    let max = 0;
    while (right < s.length) {
      if (!map[s[right]]) {
        map[s[right]] = 1;
        right++;
      } else {
        while (left < right) {
          delete map[s[left]];
          if (map[s[left++]] === map[s[right]]) {
            break;
          }
        }
      }
  
      max = Math.max(max, right - left);
    }
  
    return max;
};

console.log(lengthOfLongestSubstring('abacd'))