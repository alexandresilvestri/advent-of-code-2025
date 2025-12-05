const fs = require("fs");
const path = require("path");

function readInput(filePath) {
  return fs
    .readFileSync(path.resolve(__dirname, filePath), "utf-8")
    .trim()
    .split("\n");
}

function calculatePasswordPart2(rotations) {
  let dialPosition = 50;
  let zeroCount = 0;

  rotations.forEach((rotation) => {
    const direction = rotation[0];
    const distance = parseInt(rotation.slice(1), 10);

    // Count zero crossings during the rotation
    for (let i = 1; i <= distance; i++) {
      if (direction === "L") {
        dialPosition = (dialPosition - 1 + 100) % 100;
      } else if (direction === "R") {
        dialPosition = (dialPosition + 1) % 100;
      }

      if (dialPosition === 0) {
        zeroCount++;
      }
    }
  });

  return zeroCount;
}

const rotations = readInput("input.txt");
const passwordPart2 = calculatePasswordPart2(rotations);
console.log(passwordPart2)