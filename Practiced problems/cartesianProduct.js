//Cartesian Products of array
/**const arr1=[1,2]
 * consr arr2=[3,4]
 * The cartesianProduct arr1xarr2 should return [[1,3],[1,4],[2,3],[2,4]]
 */
const PROMPT = require("prompt-sync")();
let arr1 = PROMPT("Enter array1 elements with space:").split(" ");
let arr2 = PROMPT("Enter array2 elements with space:").split(" ");
arr1 = arr1.map((x) => Number(x));
arr2 = arr2.map((x) => Number(x)); 
function cartesianProduct(arr1, arr2) {
  const cartesianProduct = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      cartesianProduct.push([arr1[i], arr2[j]]);
    }
  }
  return cartesianProduct;
}
console.log(cartesianProduct(arr1, arr2));
/*The time complexity in this case is Big-O = O(m*n)
where m= length arr1 and n = length arr2
if n==m then O(n^2)*/



