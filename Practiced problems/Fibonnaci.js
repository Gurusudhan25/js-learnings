//Fibonacci of n numbers without recursion
const prompt = require("prompt-sync")();
let n = prompt("Enter a number:");
console.log("---The fibonnaci series of n numbers---");

function fibonnaciOf(n) {
  const fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
  }
  return fibArr.join(" ");
}
console.log(fibonnaciOf(n)); //the timw complexity will be 0(n)

//This is recursive fibonacci series return nth fibonaaci number 
function fibonacciRecur(n) {
  if (n < 2) return n;
  return fibonacciRecur(n - 1) + fibonacciRecur(n - 2);
}
console.log(fibonacciRecur(n));
//Time complexity of this function is O(2^n)
