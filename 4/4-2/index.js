const input = require('./input.js');

const inputArr = input.split('\n\n').map((x) => x.split('\n'))
  .map((x, i) => i > 0 ? x.join(' ').trim().replace(/\s/gi, ',') : x)
  .map((x, i) => i > 0 ? x.replace(/,,+/gi, ',') : x)
  .map((x, i) => i > 0 ? x.split(',') : x)
  .map((x, i) => i < 1 ?
    x.join(',').split(',').map((x) => parseInt(x))
    : [...x].map((x) => parseInt(x)))

const numbersDrawn = inputArr[0];

const run = (arr) => {

  const grids = inputArr.slice(1)

  // (DIAGONAL DOESN'T COUNT)
  const checkWinner = (grid, winningNumbers) => {
    return grid.map((x) => {
      return [x[0], x[1], x[2], x[3], x[4]].every(x => winningNumbers.includes(x)) // HORIZONTAL
        || [x[5], x[6], x[7], x[8], x[9]].every(x => winningNumbers.includes(x)) // HORIZONTAL
        || [x[10], x[11], x[12], x[13], x[14]].every(x => winningNumbers.includes(x)) // HORIZONTAL
        || [x[15], x[16], x[17], x[18], x[19]].every(x => winningNumbers.includes(x)) // HORIZONTAL
        || [x[20], x[21], x[22], x[23], x[24]].every(x => winningNumbers.includes(x)) // HORIZONTAL
        || [x[0], x[5], x[10], x[15], x[20]].every(x => winningNumbers.includes(x)) // VERITCAL
        || [x[1], x[6], x[11], x[16], x[21]].every(x => winningNumbers.includes(x)) // VERITCAL
        || [x[2], x[7], x[12], x[17], x[22]].every(x => winningNumbers.includes(x)) // VERITCAL
        || [x[3], x[8], x[13], x[18], x[23]].every(x => winningNumbers.includes(x)) // VERITCAL
        || [x[4], x[9], x[14], x[19], x[24]].every(x => winningNumbers.includes(x)) // VERITCAL
        ?
        true
        : false
    })
  }

  const checkArr = []
  const checkArr2 = []

  for (const number of arr) {
    checkArr.push(number)
    checkArr2.push(checkWinner(grids, checkArr))
  }

  const lastWinnerGridPos = checkArr2.find((x) => (x.filter((x) => x === false).length === 1))
  const lastWinningGrid = grids[lastWinnerGridPos.indexOf(false)]
  const lastWinningNumberPos = checkArr2.indexOf(checkArr2.find((x) => (x.filter((x) => x === false).length === 0)))
  const lastWinningNumber = arr[lastWinningNumberPos]
  const winningNumbersArr = arr.slice(0, lastWinningNumberPos + 1)
  const unmarkedNumbers = []

  for (const number of lastWinningGrid) {
    !winningNumbersArr.includes(number) ? unmarkedNumbers.push(number) : number
  }

  const unmarkedNumbersTotal = unmarkedNumbers.reduce((acc, cur) => acc + cur)
  const finalProduct = unmarkedNumbersTotal * lastWinningNumber

  return finalProduct

}

run(numbersDrawn)
