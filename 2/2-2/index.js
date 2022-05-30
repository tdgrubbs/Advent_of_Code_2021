

const inputArr = input.split('\n').flatMap((x) => [x.split(' ')])

const positionObj = {
  'forward': 0,
  'up': 0,
  'down': 0,
  'aim': 0,
}

inputArr.map((x) => {
  if (x[0] === 'forward') {
    positionObj.forward = positionObj.forward + parseInt(x[1])
    positionObj.down = positionObj.down + (positionObj.aim * parseInt(x[1]))
  } else if (x[0] === 'down') {
    positionObj.aim = positionObj.aim + parseInt(x[1])
  } else if (x[0] === 'up') {
    positionObj.aim = positionObj.aim - parseInt(x[1])
  } []
})

const depth = positionObj.down - positionObj.up
const finalPosition = depth * positionObj.forward

console.log(finalPosition)
