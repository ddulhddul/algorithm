/*
2121. Intervals Between Identical Elements

You are given a 0-indexed array of n integers arr.

The interval between two elements in arr is defined as the absolute difference between their indices. More formally, the interval between arr[i] and arr[j] is |i - j|.

Return an array intervals of length n where intervals[i] is the sum of intervals between arr[i] and each element in arr with the same value as arr[i].

Note: |x| is the absolute value of x.

*/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const getDistances = function (arr) {
  const result = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (result[i] !== undefined) continue
    const indexes = [i]
    let indexSum = i
    let indexLen = 1
    const unitResult = [0]
    for (let j = i + 1; j < len; j++) {
      if (arr[i] !== arr[j]) continue
      // 1. 이전까지 index 처리
      indexes[indexLen] = j
      unitResult[indexLen] = indexLen * j - indexSum
      indexSum += j
      indexLen++
    }
    // 2. reverse 하여 sum 로직 처리
    indexSum = 0
    const maxIndex = indexes[indexLen - 1]
    for (let k = 0; k < indexLen; k++) {
      const index = indexes[indexLen - k - 1]
      result[index] = unitResult[indexLen - k - 1] + k * (maxIndex - index) - indexSum
      indexSum += maxIndex - index
    }
  }
  return result
}
console.log(
  // getDistances([10, 5, 10, 10, 10])
  getDistances([10, 5, 10, 10])
  // getDistances([2, 1, 3, 1, 2, 3, 3])
)
