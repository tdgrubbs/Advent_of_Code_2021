const input = require('./input.js');

const inputArr = input.split(' ').map((x) => parseInt(x));

inputArr.map((x, i, arr) => {
  if (i > 0  && (arr[i] > arr[i - 1])) {
    return 'INCREASE'
  }
    return x
}).filter((x) => x === 'INCREASE').length
