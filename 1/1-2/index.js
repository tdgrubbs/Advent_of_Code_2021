const inputArr = input.split(' ').map((x) => parseInt(x));

const windows = (l, xs) =>
  xs.flatMap((_, i) =>
    i <= xs.length - l
      ? [xs.slice(i, i + l)]
      : []);

const sumWindows =
  windows(3, inputArr).map((x) => x.reduce((a, b) => a + b, 0))
    .map((_, i, arr) => {
      return (i > 0 && (arr[i] > arr[i - 1])) ? 'i' : 'd'
    }).filter((x) => x === 'i').length

console.log(sumWindows)
