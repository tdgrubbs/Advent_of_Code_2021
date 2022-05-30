const input = `5421451741
3877321568
7583273864
3451717778
2651615156
6377167526
5182852831
4766856676
3437187583
3633371586`;

const inputArr = input.split('\n')
  .map((x) => [...x])
  .map((x) => x.map((x) => parseInt(x)))

const numTest = (arr, num) => {
  const combined = arr.reduce((a, c) => a.concat(c), [])
  return combined.filter((x) => x === num).length ? true : false
}

const changeTest = (arr, newArr) => {
  const test = newArr.map((x, i, _) => x.map((y, j, _) => {
    return arr[i][j] !== 0 && y === 0 ? true : false
  })).flat(Infinity)

  return test.filter((x) => x === true).length ? true : false
}

const result = (arr, val) => {
  const numObj = arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  return numObj[val] || 0
}

const stepArr = []

let count = 0
let nextCount = 0
let firstStepRef

const firstStep = (arr) => {

  console.log('first step', arr)

  const stepArrLast = stepArr[stepArr.length - 1]
  const stepArrPrev = stepArr[stepArr.length - 2]

  console.log({ stepArrPrev, stepArrLast })

  if (stepArr.length > 1 && changeTest(stepArrPrev, stepArrLast)) {
    firstStepRef = stepArrPrev
    while (stepArr.length > 0) {
      stepArr.pop();
    }
    return arr
  }

  const test = arr.map((x, i, arr) => x.map((y, j, arr2) => {
    if (i === 0 && j === 0 ) {
      const TLC = Array.from([arr2[j + 1], arr[i + 1][j + 1], arr[i + 1][j]])
      const total = ++y + result(TLC, 9)
      return total > 9 ? 0 : total
    } else if (i === 0 && (j > 0 && j < arr2.length - 1)) {
      const THE = Array.from(
        [arr2[j - 1], arr2[j + 1], arr[i + 1][j + 1], arr[i + 1][j], arr[i + 1][j - 1]]
      )
      const total = ++y + result(THE, 9)
      return total > 9 ? 0 : total
    } else if (i === 0 && j === arr2.length - 1) {
      const TRC = Array.from([arr2[j - 1], arr[i + 1][j - 1], arr[i + 1][j]])
      const total = ++y + result(TRC, 9)
      return total > 9 ? 0 : total
    } else if ((i > 0 && i < arr.length - 1) && j === 0) {
      const LVE = Array.from(
        [arr[i - 1][j], arr[i - 1][j + 1], arr2[j + 1], arr[i + 1][j], arr[i + 1][j + 1]]
      )
      const total = ++y + result(LVE, 9)
      return total > 9 ? 0 : total
    } else if (i === arr.length - 1 && j === 0) {
      const BLC = Array.from([arr2[j + 1], arr[i - 1][j + 1], arr[i - 1][j]])
      const total = ++y + result(BLC, 9)
      return total > 9 ? 0 : total
    } else if (i === arr.length - 1 && (j > 0 && j < arr2.length - 1)) {
      const BHE = Array.from(
        [arr2[j - 1], arr2[j + 1], arr[i - 1][j + 1], arr[i - 1][j], arr[i - 1][j - 1]]
      )
      const total = ++y + result(BHE, 9)
      return total > 9 ? 0 : total
    } else if (i === arr.length - 1 && j === arr.length - 1) {
      const BRC = Array.from([arr2[j - 1], arr[i - 1][j - 1], arr[i - 1][j]])
      const total = ++y + result(BRC, 9)
      return total > 9 ? 0 : total
    } else if ((i > 0 && i < arr.length - 1) && j === arr2.length - 1) {
      const RVE = Array.from(
        [arr[i + 1][j], arr[i + 1][j - 1], arr2[j - 1], arr[i - 1][j], arr[i - 1][j - 1]]
      )
      const total = ++y + result(RVE, 9)
      return total > 9 ? 0 : total
    } else if ((i > 0 && i < arr.length - 1) && (j > 0 && j < arr2.length - 1)) {
      const ALL = Array.from(
        [
          arr[i - 1][j - 1], arr[i - 1][j], arr[i - 1][j + 1],
          arr2[j - 1], arr2[j + 1],
          arr[i + 1][j - 1], arr[i + 1][j], arr[i + 1][j + 1]
        ]
      )
      const total = ++y + result(ALL, 9)
      return total > 9 ? 0 : total
    }
  }))

  if (count > 0) {
    console.log({ test })
    return test
  }

  stepArr.push(test)
  return firstStep(test)
}

const firstStepArr = firstStep(inputArr)
const flashCountArr = []

let flashRef
let laterSteps


const flash = (arr) => {

  const next = (gridArr) => {

    console.log({ firstStepRef, gridArr, nextCount, flashRef })

    const newFlashes = gridArr
      .map((x, i, _) => x
        .map((y, j, _) => {
          if (nextCount > 0) {
            return y === 0 && (firstStepRef[i][j] === 9 || typeof flashRef[i][j] === 'string') ? 0
              : y === 0 || (y === 0 && typeof flashRef[i][j] !== 'string') ? 't'
                : y === 't' ? 0
                  : y
          }
          return y === 0 && firstStepRef[i][j] === 9 ? 0
            : y === 0 ? 't'
              : y
        }))

    const checkNewFlashCount = newFlashes
      .map((x) => x
        .reduce((a, c) => c === 't' ? a + 1 : a + 0, 0))
      .reduce((a, c) => a + c, 0)

    console.log({ newFlashes, checkNewFlashCount })

    if (checkNewFlashCount === 0 && nextCount > 0) return newFlashes

    const addToNewFlashes = newFlashes.map((x, i, arr) => x.map((y, j, arr2) => {

      if (i === 0 && j === 0 && y !== 0 && typeof y !== 'string') {
        const TLC = Array.from([arr2[j + 1], arr[i + 1][j + 1], arr[i + 1][j]])
        const total = y + result(TLC, 't')
        return total > 9 ? 0 : total
      } else if (i === 0 && (j > 0 && j < arr2.length - 1) && y !== 0 && typeof y !== 'string') {
        const THE = Array.from(
          [arr2[j - 1], arr2[j + 1], arr[i + 1][j + 1], arr[i + 1][j], arr[i + 1][j - 1]]
        )
        const total = y + result(THE, 't')
        return total > 9 ? 0 : total
      } else if (i === 0 && j === arr2.length - 1 && y !== 0 && typeof y !== 'string') {
        const TRC = Array.from([arr2[j - 1], arr[i + 1][j - 1], arr[i + 1][j]])
        const total = y + result(TRC, 't')
        return total > 9 ? 0 : total
      } else if ((i > 0 && i < arr.length - 1) && j === 0 && y !== 0 && typeof y !== 'string') {
        const LVE = Array.from(
          [arr[i - 1][j], arr[i - 1][j + 1], arr2[j + 1], arr[i + 1][j], arr[i + 1][j + 1]]
        )
        const total = y + result(LVE, 't')
        return total > 9 ? 0 : total
      } else if (i === arr.length - 1 && j === 0 && y !== 0 && typeof y !== 'string') {
        const BLC = Array.from([arr2[j + 1], arr[i - 1][j + 1], arr[i - 1][j]])
        const total = y + result(BLC, 't')
        return total > 9 ? 0 : total
      } else if (i === arr.length - 1 && (j > 0 && j < arr2.length - 1) && y !== 0 && typeof y !== 'string') {
        const BHE = Array.from(
          [arr2[j - 1], arr2[j + 1], arr[i - 1][j + 1], arr[i - 1][j], arr[i - 1][j - 1]]
        )
        const total = y + result(BHE, 't')
        return total > 9 ? 0 : total
      } else if (i === arr.length - 1 && j === arr.length - 1 && y !== 0 && typeof y !== 'string') {
        const BRC = Array.from([arr2[j - 1], arr[i - 1][j - 1], arr[i - 1][j]])
        const total = y + result(BRC, 't')
        return total > 9 ? 0 : total
      } else if ((i > 0 && i < arr.length - 1) && j === arr2.length - 1 && y !== 0 && typeof y !== 'string') {
        const RVE = Array.from(
          [arr[i + 1][j], arr[i + 1][j - 1], arr2[j - 1], arr[i - 1][j], arr[i - 1][j - 1]]
        )
        const total = y + result(RVE, 't')
        return total > 9 ? 0 : total
      } else if ((i > 0 && i < arr.length - 1) && (j > 0 && j < arr2.length - 1) && y !== 0 && typeof y !== 'string') {
        const ALL = Array.from(
          [
            arr[i - 1][j - 1], arr[i - 1][j], arr[i - 1][j + 1],
            arr2[j - 1], arr2[j + 1],
            arr[i + 1][j - 1], arr[i + 1][j], arr[i + 1][j + 1]
          ]
        )
        const total = y + result(ALL, 't')
        return total > 9 ? 0 : total
      }
      return y
    }))

    flashRef = addToNewFlashes

    console.log({ addToNewFlashes, flashRef })

    const addNewZeros = addToNewFlashes.map((x) => x.map((x) => typeof x === 'string' ? '0' : x))

    console.log({ addNewZeros })

    nextCount++
    return next(addNewZeros)

  }

  const nextArr = next(arr).map((x) => x.map((x) => typeof x === 'string' ? 0 : x))
  const nextArrFlat = nextArr.flat(Infinity)

  firstStepRef = nextArr

 const flashCount = (arr) => {
    return arr.flat(Infinity).reduce((a, c) => c === 0 ? a + 1 : a + 0, 0)
  }

  flashCountArr.push(flashCount(nextArr))

  count++
  laterSteps = firstStep(nextArr)
  nextCount = 0
  console.log({ count, flashCountArr, nextArrFlat })
  if (nextArrFlat.every((x) => x === 0)) return count + 1

  return flash(laterSteps)

}

flash(firstStepArr)
