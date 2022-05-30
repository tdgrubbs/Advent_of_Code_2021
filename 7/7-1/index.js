const input = require('./input.js');
const inputArr = input.split(',').map((x) => parseInt(x))
const INPUT_MAX = inputArr.sort((a, b) => b - a)[0] // 1937

let max = INPUT_MAX
const fuelSums = []

const mostEfficient = (input) => {
  const fuelDistances = []

  for (const number of input) {
    fuelDistances.push(Math.abs(max - number))
  }

  const sum = fuelDistances.reduce((a, b) => a + b, 0)
  fuelSums.push(sum)

  if (max === 0) return fuelSums.sort((a, b) => a - b)[0]
  max--;

  return mostEfficient(input)
}

mostEfficient(inputArr)
