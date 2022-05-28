/*
849. Maximize Distance to Closest Person

You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.

Return that maximum distance to the closest person.

*/
/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function (seats) {
  const len = seats.length
  let before = -1
  let output = 0
  for (let i = 0; i < len; i++) {
    if (!seats[i]) continue
    if (before === -1) {
      output = i - before - 1
    } else {
      output = Math.max(output, Math.floor((i - before) / 2))
    }
    before = i
  }
  return Math.max(output, len - before - 1)
}

console.log(
  // maxDistToClosest([1, 0, 0, 0, 1, 0, 1])
  maxDistToClosest([0, 1])
)
