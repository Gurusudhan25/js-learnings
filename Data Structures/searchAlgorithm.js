/**
 * Linear search
 * Binary search
 * recursive Binary search
 */

//Linear search
const prompt = require("prompt-sync")();
let numArr = prompt("Enter elements with space:").split(" ");
numArr = numArr.map((x) => Number(x));
const number = Number(prompt("Enter a number to search in array:"));

function linearSearch(numArr, number) {
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] == number) return i;
  }
  return -1;
}
//console.log(linearSearch(numArr, number));
//Time complexity of this function is O(n)

function binarySearch(numArr, number) {
  let leftIndex = 0;
  let rightIndex = numArr.length;
  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (numArr[middleIndex] === number) return middleIndex;
    else if (number > numArr[middleIndex]) leftIndex = middleIndex + 1;
    else rightIndex = middleIndex - 1;
  }
  return -1;
}
//console.log(binarySearch(numArr, number));
//The time complexity of binarySearch is O(logn)

//Recursive binary search
function recurBinarySearch(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) return middleIndex;
  if (target > arr[middleIndex])
    return recurBinarySearch(arr, target, middleIndex + 1, rightIndex);
  else return recurBinarySearch(arr, target, leftIndex, middleIndex - 1);
}
console.log(recurBinarySearch(numArr, number));
//The time complexity of recursive binarySearch is O(logn)