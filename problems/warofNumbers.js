/**This programme is to find war between even and odd numbers */
const WarofNumbers = (arr) => {
  let evenSum = 0;
  let oddSum = 0;
  for (x of arr) {
    if (x % 2 == 0) {
      evenSum += x;
    } else {
      oddSum += x;
    }
  }
  if (evenSum > oddSum) {
    console.log("Even number wins the war");
  } else {
    console.log("Odd number wins the war");
  }
  let final = Math.abs(evenSum - oddSum);
  return `The difference between even sum and odd sum is ${final}`;
};

console.log("-----War of Numbers-----");
const PROMPT = require("prompt-sync")();
let ARRAY = PROMPT("Enter numbers with space:").split(" ");
ARRAY = ARRAY.map((x) => Number(x));
console.log(WarofNumbers(ARRAY));
