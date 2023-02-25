//GCD problem solving
const PROMPT = require('prompt-sync')();
const num1=Number(PROMPT("Enter number one:"))
const num2=Number(PROMPT("Enter number two:"))

//Fining GCD
const gcdOfTwoNum = (num1, num2) => {
  let bigNumber = num1 > num2 ? num1 : num2;
  let smallNumber = num1 > num2 ? num2 : num1;
  if (bigNumber % smallNumber == 0) return smallNumber;
  else {
    for (let i = smallNumber; i >= 1; i--) {
      if (bigNumber % i == 0 && smallNumber%i==0) return i;
    }
  }
};
console.log("GCD of two numbers without Euclid's algorithm:",gcdOfTwoNum(num1,num2));
//time complexity here is O(n)

//Finding gcd of two numbers with Eucledian's algorithm
const gcdOfTwoEuclid = (num1, num2) => {
  //Using ternary opretor to find which is big and smaller number
  let bigNumber = num1 > num2 ? num1 : num2;
  let smallNumber = num1 > num2 ? num2 : num1;
  let remainder = bigNumber % smallNumber;
  if (remainder == 0) return smallNumber;
  else return gcdOfTwoEuclid(smallNumber, remainder);
};
console.log("GCD of two numbers with Euclid's algorithm:",gcdOfTwoEuclid(num1, num2));
//The time complextiy of this function is O(logn)
