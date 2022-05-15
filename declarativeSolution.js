function totalAmounts(numbers) {
  return [
    amountOfPositives(numbers),
    amountOfNegatives(numbers),
    amountOfZeros(numbers),
  ];
}
const isPositive = (number) => number > 0;
const isNegative = (number) => number < 0;
const isZero = (number) => number == 0;

const amountOf = (f) => (numbers) =>
  numbers.reduce((acc, number) => (f(number) ? acc + 1 : acc), 0);
  
const amountOfPositives = amountOf(isPositive);
const amountOfNegatives = amountOf(isNegative);
const amountOfZeros = amountOf(isZero);

const endTime = (startTime) => {
  const [secs, nanos] = process.hrtime(startTime);
  return secs * 1000 + nanos / 1000000 + " ms";
};

const startTime = process.hrtime();
console.log("start time", startTime);
const n = 10000000;
totalAmounts(Array(n).fill("£"));
console.log("end time", endTime(startTime));
