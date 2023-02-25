
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