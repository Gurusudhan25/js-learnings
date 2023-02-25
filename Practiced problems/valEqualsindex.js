//This function checks whether value equals to index
function valEqualsindex(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i == arr[i]) {
        count++;
        console.log(`At index ${i} val equals`);
      }
    }
    if (count == 0) "Nothing matches the index";
  }
  //get user input array//
  const prompt = require("prompt-sync")();
  console.log("Enter array elements with space");
  let numArr = prompt().split(" ");
  numArr = numArr.map((val) => Number(val));
  valEqualsindex(numArr);
  