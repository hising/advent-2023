const readFile = require("fs").readFileSync;
const path = require("path");
const input = readFile(path.join(__dirname, "data.txt"), "utf8");
const values = input.split("\n");

const parseStringToDigitArray = (value) => {
  const digitArray = [];
  const digitRegex = /\d/g;
  const digitMatches = value.match(digitRegex);
  if (digitMatches) {
    digitMatches.forEach((digit) => {
      digitArray.push(parseInt(digit));
    });
  }
  const num = Number(
    digitArray[0].toString() + digitArray[digitArray.length - 1].toString()
  );
  console.log(digitArray, num);
  return num;
};

const numValues = values.map(parseStringToDigitArray);
// Calculate the sum of the array
const sum = numValues.reduce((a, b) => a + b, 0);
console.log(sum);
