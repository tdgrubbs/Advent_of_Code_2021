const input = require('./input.js');

const inputArr = input.split('\n')
  .map((x) => [...x]
    .map((x) => parseInt(x)))

const total = []

const lowPoints = inputArr.map((x, i, arr) => {
  return x.map((y, j, arr2) => {
    return (i === 0 && j === 0)
      && (y < arr2[j + 1] && y < arr[i + 1][0]) ? `${y}` // 'TLC'
      : (i === 0 && j === (arr2.length - 1))
        && (y < arr2[j - 1] && y < arr[i + 1][arr2.length - 1]) ? `${y}` // 'TRC'
        : (i === (arr.length - 1) && j === 0)
          && (y < arr2[j + 1] && y < arr[i - 1][0]) ? `${y}` // 'BLC'
          : (i === (arr.length - 1) && j === (arr2.length - 1))
            && (y < arr2[j - 1] && y < arr[i - 1][arr2.length - 1]) ? `${y}` // 'BRC'
            : (i === 0 && (j > 0 && j < (arr2.length - 1)))
              && (y < arr2[j - 1] && y < arr2[j + 1] && y < arr[i + 1][j]) ? `${y}` // 'THE'
              : i === (arr.length - 1) && (j > 0 && j < (arr2.length - 1))
                && (y < arr2[j - 1] && y < arr2[j + 1] && y < arr[i - 1][j]) ? `${y}` // 'BHE'
                : ((i > 0 && i < (arr.length - 1)) && j === 0)
                  && (y < arr2[j + 1] && y < arr[i - 1][j] && y < arr[i + 1][j]) ? `${y}` // 'LVE'
                  : ((i > 0 && i < (arr.length - 1)) && j === (arr2.length - 1))
                    && (y < arr2[j - 1] && y < arr[i - 1][j] && y < arr[i + 1][j]) ? `${y}` // 'RVE'
                    : (i > 0 && i < arr.length)
                      && (y < arr2[j - 1] && y < arr2[j + 1] && y < arr[i - 1][j] && y < arr[i + 1][j]) ? `${y}` // ALL
                      : y
  })
})

const search = (arr) => {

  let count = 0

  const adjacent = arr.map((x, i, arr) => {
    return x.map((y, j, arr2) => {
      if ((i === 0 && j - 1 === 0 && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === 1 && j === 0 && typeof arr[i - 1][0] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][0])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === 0 && j === 0 && typeof arr2[1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[1]) >= 1))) {
        count++
        return `${y}`
      } else if ((i === 0 && j === 0 && typeof arr[i + 1][0] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][0]) >= 1))) {
        count++
        return `${y}`
      } // 'TLC' ///////

      else if ((i === 0 && j + 1 === (arr2.length - 1) && typeof arr2[j + 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j + 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === 1 && j === (arr2.length - 1) && typeof arr[i - 1][arr2.length - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][arr2.length - 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === 0 && j === (arr2.length - 1) && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === 0 && j === (arr2.length - 1) && typeof arr[i + 1][arr2.length - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][arr2.length - 1])) >= 1)) {
        count++
        return `${y}`
      } // 'TRC' ///////

      else if ((i === (arr.length - 1) && j - 1 === 0 && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === (arr.length - 2) && j === 0 && typeof arr[i + 1][0] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][0])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === (arr.length - 1) && j === 0 && typeof arr[i - 1][0] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][0])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === (arr.length - 1) && j === 0 && typeof arr2[1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[1])) >= 1)) {
        count++
        return `${y}`
      } // 'BLC' ///////

      else if ((i === (arr.length - 1) && j + 1 === (arr2.length - 1) && typeof arr2[j + 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j + 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === (arr.length - 2) && j === (arr2.length - 1) && typeof arr[i + 1][arr2.length - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][arr2.length - 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === (arr.length - 1) && j === (arr2.length - 1) && typeof arr[i - 1][arr2.length - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][arr2.length - 1])) >= 1)) {
        count++
        return `${y}`
      } else if ((i === (arr.length - 1) && j === (arr2.length - 1) && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      } // 'BRC' ///////

      else if ((i === 0 && (j > 0 && j < (arr2.length - 1)) && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      }
      else if ((i === 0 && (j > 0 && j < (arr2.length - 1)) && typeof arr2[j + 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j + 1])) >= 1)) {
        count++
        return `${y}`
      }
      else if ((i === 1 && (j > 0 && j < (arr2.length - 1)) && typeof arr[i - 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if ((i === 0 && (j > 0 && j < (arr2.length - 1)) && typeof arr[i + 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][j])) >= 1)) {
        count++
        return `${y}`
      } // 'THE'  ///////

      else if (i === (arr.length - 1) && (j > 0 && j < (arr2.length - 1) && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      }
      else if (i === (arr.length - 1) && (j > 0 && j < (arr2.length - 1) && typeof arr2[j + 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j + 1])) >= 1)) {
        count++
        return `${y}`
      }
      else if ((i === (arr.length - 2) && (j > 0 && j < (arr2.length - 1)) && typeof arr[i + 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if ((i === (arr.length - 1) && (j > 0 && j < (arr2.length - 1)) && typeof arr[i - 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][j])) >= 1)) {
        count++
        return `${y}`
      } // 'BHE'  ///////

      else if (((i > 0 && i < (arr.length - 1)) && j === 0 && typeof arr[i - 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1)) && j === 0 && typeof arr[i + 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1)) && j === 1 && typeof arr2[0] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[0])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1)) && j === 0 && typeof arr2[1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[1])) >= 1)) {
        count++
        return `${y}`
      } // 'LVE' ///////

      else if (((i > 0 && i < (arr.length - 1)) && j === (arr2.length - 1) && typeof arr[i - 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1)) && j === (arr2.length - 1) && typeof arr[i + 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1)) && j === (arr2.length - 2) && typeof arr2[j + 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j + 1])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1)) && j === (arr2.length - 1) && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      }
      // 'RVE' ///////


      else if (((i > 0 && i < (arr.length - 1) && j > 0 && j < (arr2.length - 1)) && typeof arr[i - 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i - 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1) && j > 0 && j < (arr2.length - 1)) && typeof arr[i + 1][j] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr[i + 1][j])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1) && j > 0 && j < (arr2.length - 1)) && typeof arr2[j + 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j + 1])) >= 1)) {
        count++
        return `${y}`
      }
      else if (((i > 0 && i < (arr.length - 1) && j > 0 && j < (arr2.length - 1)) && typeof arr2[j - 1] === 'string' && typeof y === 'number')
        && (y !== 9 && Math.abs(y - parseInt(arr2[j - 1])) >= 1)) {
        count++
        return `${y}`
      }
      else { return y }
    })
  })

  total.push(count)

  if (total.length > 1 && (total[total.length - 1] === 0)) return adjacent

  return search(adjacent)

}


const returnTotal = (arr) => {

  const lowCoordinates = arr.map((x, i) => x.map((y, j) => {
    if (typeof y === 'string') return [i, j]
  })).map((x) => x.filter((x) => typeof x === 'object')).flat()


  const lowCoordinatesArr = lowCoordinates.map((x) => inputArr)
    .map((b, c) => b.map((d, e) => d.map((f, g) => {
      return e === lowCoordinates[c][0] && g === lowCoordinates[c][1] ? `${f}` : f
    })))

  const basinsArr = lowCoordinatesArr.map((a) => search(a)
    .map((x) => x.filter((x) => typeof x === 'string')).flat())

  const basinSizes = basinsArr.map((a) => a.length)

  const topThreeBasinSizes = basinSizes.sort((a, b) => a - b).slice(-3)

  const totalSize = topThreeBasinSizes.reduce((a, b) => a * b, 1)

  return totalSize

}

returnTotal(lowPoints)
