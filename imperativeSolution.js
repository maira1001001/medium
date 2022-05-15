function totalAmounts(numbers) {
  let amountOfPositives = 0;
  let amountOfNegatives = 0;
  let amountOfZeros = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) amountOfPositives = ++amountOfPositives;
    else if (numbers[i] < 0) amountOfNegatives = ++amountOfNegatives;
    else amountOfZeros = ++amountOfZeros;
  }
  return [amountOfPositives, amountOfNegatives, amountOfZeros];
}

const endTime = (startTime) => {
  const [secs, nanos] = process.hrtime(startTime);
  return secs * 1000 + nanos / 1000000 + " ms";
};

const startTime = process.hrtime();
console.log("start time", startTime);
const n = 10000000;
totalAmounts(Array(n).fill("£"));
console.log("end time", endTime(startTime));
