const input = require('./input.js');

const inputArr = input.split('\n').map((x) => [...(x)]
  .map((x) => parseInt(x)))

let index = 0;

const findOxygen = (arr) => {
  let zeroCount = [];
  let oneCount = [];
  let filteredArr = [];

  arr.forEach((x) => {
    if (arr.length === 1) {
      index = 0
      return arr
    } else {
      x[index] === 0 ? zeroCount.push(0) : oneCount.push(1)
    }
  })

  const compareAndFilter = (zero, one, arr) => {
    if (arr.length === 1) {
      index = 0
      return parseInt(arr.flat().join(''), 2)
    } else if (one.length > zero.length || (one.length === zero.length)) {
      filteredArr = [].concat(arr.filter((x) => x[index] === 1))
      index++;
      return findOxygen(filteredArr)
    } filteredArr = [].concat(arr.filter((x) => x[index] === 0))
    index++;
    return findOxygen(filteredArr)
  }

  return compareAndFilter(zeroCount, oneCount, arr)

}

const findCO2 = (arr) => {
  let zeroCount = [];
  let oneCount = [];
  let filteredArr = [];

  arr.forEach((x) => {
    if (arr.length === 1) {
      index = 0
      return arr
    } else {
      x[index] === 0 ? zeroCount.push(0) : oneCount.push(1)
    }
  })

  const compareAndFilter = (zero, one, arr) => {
    if (arr.length === 1) {
      index = 0
      return parseInt(arr.flat().join(''), 2)
    } else if (one.length > zero.length || (one.length === zero.length)) {
      filteredArr = [].concat(arr.filter((x) => x[index] === 0))
      index++;
      return findCO2(filteredArr)
    } filteredArr = [].concat(arr.filter((x) => x[index] === 1))
    index++;
    return findCO2(filteredArr)
  }

  return compareAndFilter(zeroCount, oneCount, arr)

}

const findOSProduct = findOxygen(inputArr) * findCO2(inputArr)

console.log(findOSProduct)
