
//Multi dimensional array
const mdArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 2, 3, 4, 5],
  ];
  //to print all the rows
  for (let rowndex = 0; rowndex < mdArray.length; rowndex++) {
    console.log(mdArray[rowndex]);
  }
  
  //to print all elements
  for (let row = 0; row < mdArray.length; row++) {
    for (let col = 0; col < mdArray[row].length; col++) {
      console.log(mdArray[row][col]);
    }
  }
  //Deleting and adding new values using rowndex
  mdArray[2][4] = 78; //throwrd row =[11,2,3,4,78]
  delete mdArray[1][1]; //second row = [ 6, <1 empty rowtem>, 8, 9, 10 ] delete partrowcular value
  delete mdArray[1]; //it removes the row from mdArray
  
  //foreach loop
  mdArray.forEach((x) => console.log(x)); //prints the row
  //foreach loop to print elements
  mdArray.forEach(row => (row.forEach(col => {
      console.log(col);
  })));
  
  const grades = [
    [75, 45, 86, 27, 89], //grade of person1
    [67, 78, 23, 78, 69], //grade of person2
    [81, 97, 89, 45, 94], //grade of person3
    [75, 43, 39, 57, 49], //grade of person4
    [100, 98, 63, 8, 29], //grade of person5
    [67, 73, 89, 65, 94], //grade of person6
  ];
  
  //to check the person passed all the subjects pass mark > 40
  grades.forEach((row) => {
    let state = "pass";
    row.forEach((col) => {
      if (col < 40) state = "fail";
    });
    if (state == "pass") console.log(row);  //which returns the array with all the elemnts above 40
  });
  
  //linear search in md array
  const PROMPT = require('prompt-sync')();
  const numToSearch =Number(PROMPT("Enter a Number to search:"));
  for (const row in grades) {
      var state ,rIndex,cIndex;
      for (const col in grades) {
          if (grades[row][col]==numToSearch)
          {
              state = true
              rIndex=row;
              cIndex=col;
          }
      }
  }
  if (state)
      console.log(`The index of ${numToSearch} is [${rIndex},${cIndex}]`);
  else
      console.log(-1);