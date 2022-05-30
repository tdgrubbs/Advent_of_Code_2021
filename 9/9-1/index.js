const input = require('./input.js');

const inputArr = input.split('\n')
  .map((x) => [...x]
    .map((x) => parseInt(x)))

const search = (arr) => {

  const matches = arr.map((x, i, arr) => {
    return x.map((y, j, arr2) => {
      return (i === 0 && j === 0)
        && (y < arr2[j + 1] && y < arr[i + 1][0]) ? y // 'TLC' [TOP LEFT CORNER]
        : (i === 0 && j === (x.length - 1))
          && (y < arr2[j - 1] && y < arr[i + 1][x.length - 1]) ? y // 'TRC'
          : (i === (arr.length - 1) && j === 0)
            && (y < arr2[j + 1] && y < arr[i - 1][0]) ? y // 'BLC'
            : (i === (arr.length - 1) && j === (x.length - 1))
              && (y < arr2[j - 1] && y < arr[i - 1][x.length - 1]) ? y // 'BRC'
              : (i === 0 && (j > 0 && j < (x.length - 1)))
                && (y < arr2[j - 1] && y < arr2[j + 1] && y < arr[i + 1][j]) ? y // 'THE' [TOP HORIZ EDGE]
                : i === (arr.length - 1) && (j > 0 && j < (x.length - 1))
                  && (y < arr2[j - 1] && y < arr2[j + 1] && y < arr[i - 1][j]) ? y // 'BHE'
                  : ((i > 0 && i < (arr.length - 1)) && j === 0)
                    && (y < arr2[j + 1] && y < arr[i - 1][j] && y < arr[i + 1][j]) ? y // 'LVE' [LEFT VERT EDGE]
                    : ((i > 0 && i < (arr.length - 1)) && j === (x.length - 1))
                      && (y < arr2[j - 1] && y < arr[i - 1][j] && y < arr[i + 1][j]) ? y // 'RVE'
                      : (i > 0 && i < arr.length)
                        && (y < arr2[j - 1] && y < arr2[j + 1] && y < arr[i - 1][j] && y < arr[i + 1][j]) ? y // ALL
                        : 'a'
    })
  })

  const numberArr = matches.map((x) => x.filter((x) => typeof x === 'number')).flat()

  return numberArr.reduce((a, c) => a + (c + 1), 0)

}

search(inputArr)
