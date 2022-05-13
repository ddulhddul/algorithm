/*
1035. Uncrossed Lines
https://leetcode.com/problems/uncrossed-lines/

You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.

We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:

nums1[i] == nums2[j], and
the line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).

Return the maximum number of connecting lines we can draw in this way.

*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const arr = [[]]
  let std = 0
  // std 0 인 경우, 따로
  for (let i = std; i < len2; i++) {
    if (nums1[std] === nums2[i]) arr[std][i] = 1
    else arr[std][i] = arr[std][i - 1] || 0
  }
  for (let i = std + 1; i < len1; i++) {
    arr.push([])
    if (nums2[std] === nums1[i]) arr[i][std] = 1
    else arr[i][std] = (!arr[i - 1] ? 0 : arr[i - 1][std]) || 0
  }
  while (++std < len1) {
    // console.log('std', std)
    for (let i = std; i < len2; i++) {
      if (nums1[std] === nums2[i]) {
        arr[std][i] = arr[std - 1][i - 1] + 1
      } else {
        arr[std][i] = Math.max(arr[std - 1][i], arr[std][i - 1])
      }
    }
    for (let i = std + 1; i < len1; i++) {
      if (nums2[std] === nums1[i]) {
        arr[i][std] = arr[i - 1][std - 1] + 1
      } else {
        arr[i][std] = Math.max(arr[i][std - 1], arr[i - 1][std])
      }
    }
  }
  return arr[len1 - 1][len2 - 1]
}

console.log(
  // maxUncrossedLines([1, 4, 2], [1, 2, 4])
  // maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2])
  maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1])
  // maxUncrossedLines([3,2],[2,2,2,3])
)

/*
i,j 일때, 직전의 ij 가 같은경우와 다른경우의 dp 를 memoization
*/
