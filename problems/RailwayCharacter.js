//This programme is to check the railway character in a array
/**east,tall,leather,run,neat -> Railway character
 * east,ball,loot,honey -> Not a Railway character
 */
console.log("----Railway characters problem-----");
const prompt = require("prompt-sync")();
console.log("Enter characters with space");
let arr = prompt().split(" ");
console.log("\n");

CheckRailwaycharc = (arr) => {
  const unique = Array.from(new Set(arr));
  if (arr.length != unique.length) {
    return "Invalid!!!";
  } else {
    let state = "Invalid railway characters";
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][arr[i].length - 1] == arr[i + 1][0]) {
        state = "Valid railway characters";
      } else {
        state = "Invalid railway characters";
      }
    }
    return state;
  }
};
console.log(CheckRailwaycharc(arr));
