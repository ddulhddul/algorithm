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
    const element = arr[i]
    const indexes = [i]
    let indexSum = i
    const unitResult = [0]
    for (let j = i + 1; j < len; j++) {
      const element2 = arr[j]
      if (element !== element2) continue
      // 같은게 나왔을 경우,
      // 1. 이전까지 index 처리
      const indexLen = indexes.length
      for (let k = 0; k < indexLen; k++) {
        unitResult[k] += (j - indexes[k])
      }
      // 2. 현재 index 추가
      indexes[indexLen] = j
      unitResult[indexLen] = indexLen * j - indexSum
      indexSum += j
    }
    // element 에 대해 result 반영
    const indexLen = indexes.length
    for (let k = 0; k < indexLen; k++) {
      result[indexes[k]] = unitResult[k]
    }
  }
  return result
}
console.log(
  // getDistances([10, 5, 10, 10, 10])
  // getDistances([10, 5, 10, 10])
  getDistances([2, 1, 3, 1, 2, 3, 3])
)
