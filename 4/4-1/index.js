const input = require('./input.js');

const inputArr = input.split('\n\n').map((x) => x.split('\n'))
  .map((x, i) => i > 0 ? x.join(' ').trim().replace(/\s/gi, ',') : x)
  .map((x, i) => i > 0 ? x.replace(/,,+/gi, ',') : x)
  .map((x, i) => i > 0 ? x.split(',') : x)
  .map((x, i) => i < 1 ?
    x.join(',').split(',').map((x) => parseInt(x))
    : [...x].map((x) => parseInt(x)))

const numbersDrawn = inputArr[0];
const grids = inputArr.slice(1)

// 10 ways to win (diagonal doesn't count)
// HORIZONTAL
// [0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14], [15,16,17,18,19], [20,21,22,23,24]
// VERITCAL
// [0,5,10,15,20], [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], [4,9,14,19,24]

const run = (arr) => {

  const checkWinner = (grid, winningNumbers) => {
    return grid.map((x) => {
      return [x[0], x[1], x[2], x[3], x[4]].every(x => winningNumbers.includes(x))
        || [x[5], x[6], x[7], x[8], x[9]].every(x => winningNumbers.includes(x))
        || [x[10], x[11], x[12], x[13], x[14]].every(x => winningNumbers.includes(x))
        || [x[15], x[16], x[17], x[18], x[19]].every(x => winningNumbers.includes(x))
        || [x[20], x[21], x[22], x[23], x[24]].every(x => winningNumbers.includes(x))
        || [x[0], x[5], x[10], x[15], x[20]].every(x => winningNumbers.includes(x))
        || [x[1], x[6], x[11], x[16], x[21]].every(x => winningNumbers.includes(x))
        || [x[2], x[7], x[12], x[17], x[22]].every(x => winningNumbers.includes(x))
        || [x[3], x[8], x[13], x[18], x[23]].every(x => winningNumbers.includes(x))
        || [x[4], x[9], x[14], x[19], x[24]].every(x => winningNumbers.includes(x))
        ?
        true
        : false
    })
  }

  const checkArr = []

  arr.reduce((acc, cur) => {
    checkWinner(grids, [...acc, cur]).includes(true) ? checkArr.push('TRUE') : checkArr.push('FALSE')
    return [...acc, cur]
  }, [])

  const winningNumbersArr = arr.slice(0, checkArr.indexOf('TRUE') + 1)
  const trueLocation = checkWinner(grids, winningNumbersArr)
  const winningGrid = grids[trueLocation.indexOf(true)]
  const unmarkedNumbers = []

  for (const number of winningGrid) {
    !winningNumbersArr.includes(number) ? unmarkedNumbers.push(number) : number
  }

  const unmarkedNumbersTotal = unmarkedNumbers.reduce((acc, cur) => acc + cur)
  const finalWinningNumber = winningNumbersArr[winningNumbersArr.length - 1]
  const finalProduct = unmarkedNumbersTotal * finalWinningNumber

  return finalProduct

}

run(numbersDrawn)
