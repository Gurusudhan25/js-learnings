/**This programme is to display the binary time of 24hrs time//
 * Example 10:15:25
 *
 * 8    0   0   0   0   0   0
 * 4    0   0   0   1   0   1
 * 2    0   0   0   0   1   0
 * 1    1   0   1   1   0   1
 *
 *      1   0   1   5   2   5
 */

console.log("----Binary clock----");
const binaryWatch = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
const prompt = require("prompt-sync")();
const time = prompt("Enter time in format (HH:MM:SS) :").split(":");
const timeNums = [];
const dec2bin = (dec) => {
  return (dec >>> 0).toString(2).padStart(4, 0); //this converts decimal into binary
};
for (let i = 0; i < time.length; i++) {
  for (let j = 0; j < time[i].length; j++) {
    timeNums.push(dec2bin(time[i][j]));
  }
}
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    binaryWatch[j][i] = timeNums[i][j];
  }
}
console.log("----The Binary clock time is----\n");
for (let i = 0; i < 4; i++) {
  binaryWatch[i] = binaryWatch[i].join(" ");
  console.log("\t", binaryWatch[i]);
}
