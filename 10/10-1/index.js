const input = require('./input.js');

const inputArr = input.split('\n')
  .map((x) => [...x])

const left = ['(', '[', '{', '<']
const right = [')', ']', '}', '>']

const indexLetterPairs = inputArr.map((x) =>
  x.map((x) => left.indexOf(x) !== -1 ? [left.indexOf(x), 'L']
    : right.indexOf(x) !== -1 ? [right.indexOf(x), 'R']
      : x))

const scores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}

const scoresArr = Object.entries(scores)

const findError = (arr) => {

  const trim = arr.map((x, i, arr) => i > 0 && arr[i][1] === 'R' &&
    (arr[i - 1][0] === arr[i][0] && arr[i - 1][1] !== arr[i][1]) ? 0 : x)
    .map((x, i, arr) => i < arr.length && arr[i + 1] === 0 ? 0 : x)
    .filter((x) => typeof x !== 'number')

  if (trim.length === arr.length) {
    if (trim.every((x) => x[1] === 'L')) {
      return 0
    }
    const errorChar = right[(trim.find((x) => x[1] === 'R')[0])]
    return errorChar
  }

  return findError(trim)

}

const findScore = (char) => {
  const score = scoresArr.find((x) => x[0] === char)[1]
  return score
}

const errorCharArr = indexLetterPairs.map((x) => findError(x)).filter((x) => typeof x !== 'number')
const finalScore = errorCharArr.map((x) => findScore(x)).reduce((a, c) => a + c, 0)

console.log(finalScore)
