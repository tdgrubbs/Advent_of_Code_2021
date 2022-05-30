const input = require('./input.js');

const inputArr = input.split('\n')
  .map((x) => x.split(' | '))
  .map((x) => x[1])
  .map((x) => x.split(' '))

inputArr.map((x) => x.filter((x) => 
  x.length === 2 || x.length === 3 || x.length === 4 || x.length === 7))
    .filter((x) => x.length)
    .reduce((a, c) => a + c.length, 0)
