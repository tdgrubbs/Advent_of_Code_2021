const input = require('./input.js');

const bitObjZero = {
  '00': 0,
  '10': 0,
  '20': 0,
  '30': 0,
  '40': 0,
  '50': 0,
  '60': 0,
  '70': 0,
  '80': 0,
  '90': 0,
  '100': 0,
  '110': 0,
}

const bitObjOne = {
  '01': 0,
  '11': 0,
  '21': 0,
  '31': 0,
  '41': 0,
  '51': 0,
  '61': 0,
  '71': 0,
  '81': 0,
  '91': 0,
  '101': 0,
  '111': 0,
}

const inputArr = input.split('\n')
const gamma = []


inputArr.forEach((x) => [...x]
  .forEach((x, i) => {
    if (parseInt(x) === 0) {
      bitObjZero[`${i}0`] ++
    } else if (parseInt(x) === 1) {
      bitObjOne[`${i}1`] ++
    }
  }))

console.log(bitObjZero)
console.log(bitObjOne)

const bitArrZero = Object.entries(bitObjZero)
const bitArrOne = Object.entries(bitObjOne)

bitArrZero.map((x, i) => x[1] > bitArrOne[i][1] ? gamma.push(0) : gamma.push(1))

const epsilon = new Array(gamma.length).fill(0).map((_,i) => gamma[i] === 0 ? 1 : 0)

gamma.unshift(gamma.pop())
epsilon.unshift(epsilon.pop())

const gammaDecimal = parseInt(gamma.join(''), 2)
const epsilonDecimal = parseInt(epsilon.join(''), 2)
const product = gammaDecimal * epsilonDecimal

console.log(product)
