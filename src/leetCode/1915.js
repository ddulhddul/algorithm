/*
1915. Number of Wonderful Substrings
https://leetcode.com/problems/number-of-wonderful-substrings/

A wonderful string is a string where at most one letter appears an odd number of times.

For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.

A substring is a contiguous sequence of characters in a string.

*/
/**
 * @param {string} word
 * @return {number}
 */
const wonderfulSubstrings = function (word) {
  // 'a'.charCodeAt(0) = 97
  let cur = 0
  let ans = 0
  const bitmapCnt = { 0: 1 }
  const length = word.length
  for (let j = 0; j < length; j++) {
    const c = word[j]
    cur = cur ^ (1 << (c.charCodeAt(0) - 97))
    ans += bitmapCnt[cur] || 0
    for (let i = 0; i < 10; i++) {
      if (cur & 1 << i) {
        ans += bitmapCnt[cur ^ (1 << i)] || 0
      } else {
        ans += bitmapCnt[cur | (1 << i)] || 0
      }
      bitmapCnt[cur]++
    }
  }
  return ans
}
console.log(wonderfulSubstrings('aabb'))

/*
https://www.krammerliu.com/blog/leetcode-1915-number-of-wonderful-substrings/
## answer
: i부터 j까지 word의 wonderful string cnt
  = (0부터 j까지 cnt) - (0부터 i-1까지 cnt)
- odd / even 만 구분하면 되므로 bit 연산자로 해결 ?
*/
