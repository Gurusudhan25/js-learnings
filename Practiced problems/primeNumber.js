//function to check whether the number is prime or not
const prompt = require("prompt-sync")();
const n = Number(prompt("Enter a number:"));
function checkPrime(n) {
  if (n < 0) return `No ${n} is not a Prime Number`;
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) return `No ${n} is not a Prime Number`;
  }
  return `Yes ${n} is Prime Number`;
}
console.log(checkPrime(n));
//The time complexity of this fuction is O(n)-Linear

function checkPrime1(n) {
  if (n < 0) return `No ${n} is not a Prime Number`;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return `No ${n} is not a Prime Number`;
  }
  return `Yes ${n} is Prime Number`;
}
//here the time complexity reduce as the input size is reduced O(sqrt(n))//
