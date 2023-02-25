//Factorial of Numbers without recursion
function Factorial(n) {
  let fac = 1;
  for (let i = n; i > 1; i--) {
    fac = fac * i;
  }
  return `${n} Factorial is ${fac}`;
}
console.log(Factorial(5));
//the time complexity of this code will be O(n)-Linear time complexity

//Factorial with recursion
function FacwithRec(n) {
  if (n == 1) {
    return 1;
  } else return n * FacwithRec(n - 1);
}
console.log(FacwithRec(5)); //120
//The time complexity is O(n)-Linear in factorial
