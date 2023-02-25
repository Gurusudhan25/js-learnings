
//Factorial with recursion
function FacwithRec(n) {
  if (n == 1) {
    return 1;
  } else return n * FacwithRec(n - 1);
}
console.log(FacwithRec(5));  //120
//The time complexity is O(n)-Linear in factorial 