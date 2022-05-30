const input = require('./input.js');

const inputArr = input.split('\n').flatMap((x) => [x.split(' ')])

const positionObj = {
  'forward': 0,
  'up': 0,
  'down': 0,
  'aim': 0,
}

inputArr.map((x) => {
  x[0] === 'forward' 
    ? positionObj.forward = positionObj.forward + parseInt(x[1])
    : x[0] === 'down'
    ? positionObj.down = positionObj.down + parseInt(x[1])
    : x[0] === 'up'
    ? positionObj.up = positionObj.up + parseInt(x[1])
    : []
})

const depth = positionObj.down - positionObj.up
const finalPosition = depth * positionObj.forward

console.log(finalPosition)

