const input = require('./input.js');

const inputArrRight = input.split('\n')
  .map((x) => x.split(' | '))
  .map((x) => x[1])
  .map((x) => x.split(' '))

const inputArrLeft = input.split('\n')
  .map((x) => x.split(' | '))
  .map((x) => x[0])
  .map((x) => x.split(' '))

const generateLookup = (arr) => {

  const difference = (arrA, arrB) => arrA.filter(x => !arrB.includes(x));

  const generateLookup1 = (letters) => {
    return letters.map((x) => {
      return x.length === 2 ? [x, 1]
        : x.length === 3 ? [x, 7]
          : x.length === 4 ? [x, 4]
            : x.length === 7 ? [x, 8]
              : x
    })
  }

  const oneSevenEightFour = generateLookup1(arr)

  const generateLookup2 = (letters) => {
    const oneLettersArr = [...letters.filter((x) => typeof x === 'object' && x[1] === 1)[0][0]]
    return letters.map((x) => {
      return typeof x === 'object' ? x
        : x.length === 6 && difference(oneLettersArr, [...x]).length === 1 ? [x, 6]
          : x.length === 5 && difference(oneLettersArr, [...x]).length === 0 ? [x, 3]
            : x
    })
  }

  const sixThree = generateLookup2(oneSevenEightFour)

  const generateLookup3 = (letters) => {
    const sixLettersArr = [...letters.filter((x) => typeof x === 'object' && x[1] === 6)[0][0]]
    const fourLettersArr = [...letters.filter((x) => typeof x === 'object' && x[1] === 4)[0][0]]
    return letters.map((x) => {
      return typeof x === 'object' ? x
        : x.length === 5 && difference(sixLettersArr, [...x]).length === 1 ? [x, 5]
          : x.length === 5 ? [x, 2]
            : x.length === 6 && difference(fourLettersArr, [...x]).length === 0 ? [x, 9]
              : [x, 0]
    })
  }

  return generateLookup3(sixThree)
}



const lookupArr = inputArrLeft.map((x) => generateLookup(x))

const twoThreeFourSeven = (val) => {
  return val.length === 2 || val.length === 3 || val.length === 4 || val.length === 7 ?
    true : false
}

const findByLength = (arr, val) => {
  return arr.filter((x) => x[0].length === val.length)[0][1]
}

const findByLetters = (arr, val) => {
  return arr.filter((x) => x[0].length === val.length
    && [...x[0]].every((x) => [...val].includes(x)))[0][1]
}

const final = inputArrRight.map((x, i) => {
  return x.reduce((a, c) => {
    return a + (twoThreeFourSeven(c) ? `${findByLength(lookupArr[i], c)}`
      : `${findByLetters(lookupArr[i], c)}`)
  }, '')
}).map((x) => parseInt(x)).reduce((a, c) => a + c, 0)

console.log(final)
