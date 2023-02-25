
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