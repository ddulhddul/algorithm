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
## 비트연산자
  - &	대응되는 비트가 모두 1이면 1을 반환함. (비트 AND 연산)
  - |	대응되는 비트 중에서 하나라도 1이면 1을 반환함. (비트 OR 연산)
  - ^	대응되는 비트가 서로 다르면 1을 반환함. (비트 XOR 연산)
  - ~	비트를 1이면 0으로, 0이면 1로 반전시킴. (비트 NOT 연산)
  - <<	지정한 수만큼 비트들을 전부 왼쪽으로 이동시킴. (left shift 연산)
  - >>	부호를 유지하면서 지정한 수만큼 비트를 전부 오른쪽으로 이동시킴. (right shift 연산)

https://stackoverflow.com/questions/69649911/count-number-of-wonderful-substrings
*/
