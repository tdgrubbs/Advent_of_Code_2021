// UNFINISHED ---------

const input = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const inputArr = input.split('\n')
  .map((x) => x.split('-'))
  .map((x) => x[1] === 'start' ? [0, x.reverse()]
    : x[0] === 'start' ? [0, x]
      : x[0] === 'end' ? [2, x.reverse()]
        : x[1] === 'end' ? [2, x]
          : [1, x])
  .sort(([a], [b]) => a - b)
  .map((x) => x.pop())

const smallCave = (val) => val.toUpperCase() !== val ? true : false

const startEnd = ['start', 'end']

const uniquePoints = [...new Set(inputArr.flat())].filter((x) => !startEnd.includes(x))

const startPoints = inputArr.map((x) => x[0] === 'start' ? x[1] : x)
  .filter((x) => typeof x === 'string')

const endPoints = inputArr.map((x) => x[1] === 'end' ? x[0] : x)
  .filter((x) => typeof x === 'string')

const midPoints = uniquePoints.filter((x) => ![...startPoints, ...endPoints].includes(x))



console.log({ inputArr, uniquePoints, startPoints, endPoints, midPoints })



// end is smallCave && next connection has no connections?  stop

// start > cave > all connections
//        .. HN > dc, HN > kj, HN > end
//        >> HN, dc + all of dc routes
