// https://old.reddit.com/r/adventofcode/comments/r9z49j/2021_day_6_solutions/hp0svyk/

const growSchool = (data = [], days = 0) => {
  const fish = Array(9).fill()
    .map((_, i) => data.filter(t => t === i).length);

  console.log(fish)

  Array(days).fill().forEach((_, i) => {
    const newFish = fish.shift();
    fish.push(newFish);
    fish[6] += newFish;
  });

  return fish.reduce((a, b) => a + b);
};

growSchool(inputArr, 256)

