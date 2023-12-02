const readFile = require("fs").readFileSync;
const path = require("path");
const input = readFile(path.join(__dirname, "data.txt"), "utf8");
const values = input.split("\n");

const namedNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

const stringToValue = (value) => {
  const digitArray = [];
  const digitRegex = /\d/g;
  const digitMatches = value.match(digitRegex);
  if (digitMatches) {
    digitMatches.forEach((digit) => {
      digitArray.push(parseInt(digit));
    });
  }
  return Number(
    digitArray[0].toString() + digitArray[digitArray.length - 1].toString()
  );
};

const sum = values.map(stringToValue).reduce((a, b) => a + b, 0);
console.log(sum);
