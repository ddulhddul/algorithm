/*
2274. Maximum Consecutive Floors Without Special Floors

Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.

You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.

Return the maximum number of consecutive floors without a special floor.

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
const maxConsecutive = function (bottom, top, special) {
  const arr = []
  for (let i = special.length - 1; i >= 0; i--) {
    const value = special[i]
    arr[value] = value
  }
  arr[top + 1] = top + 1
  const arr2 = arr.filter(data => data)
  const len2 = arr2.length
  let target = bottom - 1
  let result = 0
  for (let i = 0; i < len2; i++) {
    const value = arr2[i]
    result = Math.max(value - target - 1, result)
    target = value
  }
  return result
}
