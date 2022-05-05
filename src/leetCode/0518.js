/*
518. Coin Change 2
https://leetcode.com/problems/coin-change-2/
*/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  if (amount === 0) return 1
  // 직전까지 index 값까지의 경우의수
  const prev = new Array(amount).fill(0)
  const len = coins.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    const value = coins[i]
    let thisAmount = amount
    while (true) {
      thisAmount -= value
      if (thisAmount < 0) break
      else if (thisAmount === 0) {
        sum++
        break
      }
      sum += prev[thisAmount]
      prev[thisAmount]++
    }
  }
  return sum
}

// console.log(change(5, [1, 2, 5]))
// console.log(change(10, [10]))
// console.log(change(0, [7]))
console.log(change(500, [1, 2, 5])) // 12701
// console.log(change(10, [1, 2, 5]))
