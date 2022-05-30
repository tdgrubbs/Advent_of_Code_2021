const input = require('./input.js');

const inputArr = input.split('\n')
  .map((x) => x.split(' -> '))
  .map(([...x]) => [x[0].split(','), x[1].split(',')])
  .map((x) =>
    [
      [parseInt(x[0][0]), parseInt(x[0][1])],
      [parseInt(x[1][0]), parseInt(x[1][1])]
    ])

const inputHV = inputArr.filter((x) => x[0][0] === x[1][0] || x[0][1] === x[1][1])

const range =
  [
    inputHV.flat(Infinity).sort((a, b) => a - b)[0],
    inputHV.flat(Infinity).sort((a, b) => b - a)[0]
  ]

const indexPlacement = (arr, gridWidth) => {

  const lineIndexes = []
  const compareInputHV = inputHV.map((x) => JSON.stringify(x))
  const lineArr = new Array(1000000).fill(0)

  arr.forEach((x) => {
    const [[x1, y1], [x2, y2]] = x

    // Horizontal or Vertical line
    if (compareInputHV.includes(JSON.stringify(x))) {
      if (x1 > x2) {
        lineIndexes.push(Array.from(
          { length: x1 - x2 + 1 },
          (_, i) => i < 1 ? i + ((y2 * gridWidth) + x2)
            : ((y2 * gridWidth) + x2) + i))
      } else if (x2 > x1) {
        lineIndexes.push(Array.from(
          { length: x2 - x1 + 1 },
          (_, i) => i < 1 ? i + ((y1 * gridWidth) + x1)
            : ((y1 * gridWidth) + x1) + i))
      } else if (y1 > y2) {
        lineIndexes.push(Array.from(
          { length: y1 - y2 + 1 },
          (_, i) => i < 1 ? i + ((y2 * gridWidth) + x2)
            : (((y2 * gridWidth) + x2) + i) + ((i * gridWidth) - i)))
      } else if (y2 > y1) {
        lineIndexes.push(Array.from(
          { length: y2 - y1 + 1 },
          (_, i) => i < 1 ? i + ((y1 * gridWidth) + x1)
            : (((y1 * gridWidth) + x1) + i) + ((i * gridWidth) - i)))
      }
    } /// UP-LEFT DIAG 
    else if ((x1 > x2 && y1 > y2) || (x2 > x1 && y2 > y1)) {
      lineIndexes.push(Array.from(
        { length: y2 > y1 ? y2 - y1 + 1 : y1 > y2 ? y1 - y2 + 1 : 0 },
        (_, i) => i < 1 ? i + (((y2 < y1 ? y2 : y1) * gridWidth) + (y2 < y1 ? x2 : x1))
          : ((((y2 < y1 ? y2 : y1) * gridWidth) + (y2 < y1 ? x2 : x1)) + i)
          + ((i * gridWidth))))
    } /// UP-RIGHT DIAG
    else if ((x1 > x2 && y2 > y1) || (x2 > x1 && y1 > y2)) {
      lineIndexes.push(Array.from(
        { length: y2 > y1 ? y2 - y1 + 1 : y1 > y2 ? y1 - y2 + 1 : 0 },
        (_, i) => i < 1 ? i + ((y2 < y1 ? y2 : y1) * gridWidth) + (y2 < y1 ? x2 : x1)
          : ((((y2 < y1 ? y2 : y1) * gridWidth) + (y2 < y1 ? x2 : x1)) + i)
          + ((i * (gridWidth - 2)))))
    }
  })

  lineIndexes.forEach((x) => {
    [...x].forEach((x) => {
      lineArr[x] === 0 ? lineArr[x] = 1 : lineArr[x]++
    })
  })

  const overlap = lineArr.filter((x) => x >= 2)

  return overlap.length
}

indexPlacement(inputArr, 1000)
