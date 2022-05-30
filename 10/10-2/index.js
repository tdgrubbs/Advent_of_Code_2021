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
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4,
}

const scoresArr = Object.entries(scores)

const findError = (arr) => {

  const trim = arr.map((x, i, arr) => i > 0 && arr[i][1] === 'R' &&
    (arr[i - 1][0] === arr[i][0] && arr[i - 1][1] !== arr[i][1]) ? 0 : x)
    .map((x, i, arr) => i < arr.length && arr[i + 1] === 0 ? 0 : x)
    .filter((x) => typeof x !== 'number')

  if (trim.length === arr.length) {
    if (trim.every((x) => x[1] === 'L')) {
      return trim
    }
    const errorChar = right[(trim.find((x) => x[1] === 'R')[0])]
    return errorChar
  }

  return findError(trim)

}

const trimmedIncomplete = indexLetterPairs.map((x) => findError(x))
  .filter((x) => typeof x !== 'string')

const findScore = (char) => {
  const score = scoresArr.find((x) => x[0] === char)[1]
  return score
}

const incompleteCharsArr = trimmedIncomplete.map((x) => x.map((x) => left[x[0]])).map((x) => x.reverse())
const incompleteCharsScores = incompleteCharsArr.map((x) => x.map((x) => findScore(x)))
const tallies = incompleteCharsScores.map((x) => x.reduce((a, c) => (a * 5) + c, 0))
const middleScore = tallies.sort((a, b) => a - b).slice(tallies.length / 2)[0]

console.log(middleScore)
