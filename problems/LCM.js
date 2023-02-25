//LCM of two numbers
console.log("-----LCM of two numbers program-----");

LcmofTwo = (x, y) => {
  let finalOutput = (x * y) / gcd(x, y);
  return `LCM of the numbers ${x} and ${y} is ${finalOutput}`;
};

const prompt = require("prompt-sync")();
const x = prompt("Enter a number:");
const y = prompt("Enter a number:");
console.log(LcmofTwo(x, y));
console.log("\n\n");
//LCM of two numbers
console.log("-----LCM of multiple numbers program-----");

LcmofMany = (arr) => {
  let i = 0;
  let lcm = arr[0];
  for (i = 1; i < arr.length; i++) {
    lcm = (arr[i] * lcm) / gcd(arr[i], lcm);
  }
  return `LCM of the numbers ${arr} is ${lcm}`;
};

const arrSize = prompt("Enter array size:");
const arr = [];
for (let i = 0; i < arrSize; i++) {
  arr.push(Number(prompt()));
}
console.log(LcmofMany(arr));

//Gcd Function
function gcd(x, y) {
  let mini = Math.min(x, y);
  for (let i = mini; i >= 2; i--) {
    if (x % i == 0 && y % i == 0) {
      return i;
    }
  }
  return 1;
}
