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
  // 해당 코인으로 불러올수 있는 dp 를 추적
  // const dp = new Array(amount + 1).fill(0)
  const dp = new Array(amount + 1)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = (dp[i] || 0) + (dp[i - coin] || 0)
    }
  }
  return dp[amount]
}
// const change = function (amount, coins) {
//   if (amount === 0) return 1
//   // 직전까지 index 값까지의 경우의수
//   const prev = new Array(amount).fill(0)
//   let sum = 0
//   for (const value of coins) {
//     let thisAmount = amount
//     while (true) {
//       thisAmount -= value
//       if (thisAmount < 0) break
//       else if (thisAmount === 0) {
//         sum++
//         break
//       }
//       sum += prev[thisAmount]
//       prev[thisAmount]++
//     }
//   }
//   return sum
// }

// console.log(change(5, [1, 2, 5]))
// console.log(change(10, [10]))
// console.log(change(0, [7]))
console.log(change(500, [1, 2, 5])) // 12701
// console.log(change(10, [1, 2, 5]))
