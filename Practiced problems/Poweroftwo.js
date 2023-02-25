//function that returns if number is power of 2
const prompt = require("prompt-sync")();
let n = Number(prompt());
const isPowerOfTwo = (n) => {
  let state = false;
  while (n > 1) {
    if (n % 2 != 0) {
      state = false;
      break;
    }
    n /= 2;
    state = true;
  }
  return state;
};
console.log(isPowerOfTwo(n));
//The time complexity of this function is O(log(n))

//This is optimised code to check if number is power of 2
function powerBitwise(n) {
  if (n > 1) return false;
  return (n & (n - 1)) === 0;
}
//The time complexity here is O(1)-Constant

//Innovative using the same logic [learning new]
function dec2bin(n) {
  let binArr = [];
  if (n < 0) return 0;
  while (n >= 1) {
    binArr.unshift(Math.floor(n % 2));
    n = n / 2;
  }
  return binArr.join(" ");
}
console.log(`Binary value of ${n} is `, dec2bin(n));
//The time complexity of this function is O(log(n))
