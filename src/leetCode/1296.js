/*
1296. Divide Array in Sets of K Consecutive Numbers
https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.

Return true if it is possible. Otherwise, return false.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
const isPossibleDivide = function (nums, k) {
  if ((nums.length % k) !== 0) return false
  if (k === 1) return true

  const arr = new Array(1000000001)
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[nums[i]] = (arr[nums[i]] || 0) + 1
  }

  const keyArr = arr.reduce((entry, obj, index) => {
    entry.push(index)
    return entry
  }, [])

  const len = keyArr.length
  for (let i = 0; i < len; i++) {
    const index = keyArr[i]
    const value = arr[index]
    if (value) {
      if (value > 0) {
        for (let i = k - 1; i >= 0; i--) {
          arr[index + i] = (arr[index + i] || 0) - value
        }
      } else {
        return false
      }
    }
  }
  return !arr.find((count) => count)
}

// isPossibleDivide([1, 2, 3, 4, 8, 3], 3)
// console.log(isPossibleDivide([16, 21, 26, 35], 4))
// console.log(isPossibleDivide([1,2,3,3,4,4,5,6], 4))
// console.log(isPossibleDivide(testcase, 500))

/*
순회에서
최소값부터 시작해서 k 개의 값들을 갯수로 제거하면되는데,
전체 순회를 할 수 없는 부분 (time exeed)
최소한 order 를 찾는 부분 다시 정의 필요
*/
