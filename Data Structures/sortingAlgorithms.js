/*
 * Selection Sort
 * Bubble sort
 * Insertion sort
 * Quick sort
 * Merge sort
 */
const PROMPT = require("prompt-sync")();
let numArr = PROMPT("Enter numbers with space:").split(" ");
numArr = numArr.map((x) => Number(x));

//selection sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        minIndex = j;
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
  return arr;
};
console.log("Selection sort:", selectionSort(numArr));
//Bubble sort  (worst sorting algorithm with time complexity)
const bubbleSort = (arr) =>{
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped); //Use-case example for do{}while().
  return arr;
}
console.log("Bubble sort:", bubbleSort(numArr));
//The time complexity of this sort will be O(n^2)-Quadratic

//Insertion Sort
const insertionSort= (arr)=> {
  for (let i = 1; i < arr.length; i++) {
    const num2Insert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num2Insert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = num2Insert;
  }
  return arr;
}
console.log("Insertion sort:", insertionSort(numArr));
//The time complexity of this sort is O(n^2)

//QuickSort
const quickSort=(arr)=> {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("Quick sort:", quickSort(numArr));
//Worst case complexity is O(n^2)
//Average case complexity is O(logn)

//Merge Sort
const merge = (arr1, arr2) => {
  const sortedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  return [...sortedArr, ...arr1, ...arr2];
}
const mergeSort=(arr)=> {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
 
console.log("Merge sort:", mergeSort(numArr));
//The time complexity of mergeSort is O(nlogn)
//Merge sort is best sorting algorithm comparing all the other algo
