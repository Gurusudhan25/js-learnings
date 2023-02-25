/**Poping the array (water balloon)
 * [0,0,2,0,0]=[0,1,2,1,0]
 * [0,0,3,0,0,0]=[0,1,2,3,2,1,0]
 * [0,0,0,0,4,0,0,0,0]=[0,1,2,3,4,3,2,1,0]
 */

console.log("-----Water ballon pop up-----");

const WaterPop = (arr) => {
  if (arr.length == 1) {
    return [0];
  }
  let popLength = Math.floor(arr.length / 2);
  for (
    let i = 0, j = arr.length - 1;
    i < arr[popLength], j >= arr[popLength];
    i++, j--
  ) {
    arr[i] = i;
    arr[j] = i;
  }
  return arr;
};
const prompt = require("prompt-sync")();
let arr = prompt().split(" ");
arr = arr.map((x) => Number(x)); //single line conversion
console.log(WaterPop(arr));
