/*
1209. Remove All Adjacent Duplicates in String II
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
    if (!s || k <= 1) return ''
    const sarr = [s[0]]
    const narr = [1]
    let current = ''
    let index = 0
    const len = s.length
    for (let i = 1; i < len; i++){
        if (sarr[index] === s[i]) {
            narr[index]++
            if (narr[index] === k) {
                sarr.pop()
                narr.pop()
                index--

            }
        } else {
            sarr.push(s[i])
            narr.push(1)
            index++
        }
    }
    
    const len2 = sarr.length
    let result = ''
    for (let i = 0; i < len; i++){
        if(!sarr[i]) continue
        result += sarr[i].repeat(narr[i])
        }
    
    return result
}
