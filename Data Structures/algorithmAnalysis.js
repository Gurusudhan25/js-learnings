//Algorithm Analysis Big O notation

//Function to find sum of n natural numbers

/*
the size of the complexity incearses when n increase.so,
This fuction's time complexity is O(n)-Linear
*/
function Summation1(n) {
    let sum = 0; //statement 1 executes 1 time
    for (let i = 0; i < n; i++) {
      sum += i; //statement 2 executes n times
    }
    return sum; //statement 3 executes 1 time
  }
  console.log(Summation1(10));
  
  // The time complexity here is O(1)-Constant time complexity
  function Summation2(n) {
    return (n * (n + 1)) / 2;
  }
  console.log(Summation2(10));

  /*Time complexity of this function is O(n^2)-Quadratic
  Same kind if the function has three nested loop then the complexity is O(n^3)-Cubic
  other then this O(logn)-Logrithmic */
  const nameArr = ["Gurusudhan"];
  function nameLetter(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]); //This prints each letter in a word
      }
    }
  }
  nameLetter(nameArr);
  
  //Big O of Objects
  /**To insert in Objects -O(1)
   * To remove in Objects -O(1)
   * To Access in Objects -O(1)
   * To Search in Objects -O(n)
   * To Object.keys()     -O(n)
   * To Object.values()   -O(n)
   * To Objects.entries() -O(n)
   */
  const Person = {
    firstName: "Gurusudhan",
    lastName: "V",
    role: "Developer",
  };
  Person.age = 21;
  delete Person.role;
  
  //Big O of Arrays
  /**To insert in Arr from end -O(1)
   * To remove in Arr from end -O(1)
   * To insert in Arr from start -O(n)
   * To remove in Arr from start -O(n)
   * To Access in Arr -O(1)
   * To Search in Arr -O(n)
   * push/pop -O(1)
   * Slice/Concat/Unshift -O(n)
   */
  const favArr = ["Tea", 7, "Blue", "New york"];
  favArr.push("Chicken");
  console.log(favArr); //["Tea",07,"Blue","New york","Chicken"]
  favArr.pop(); //["Tea",07,"Blue","New york"]
  favArr.unshift("Chicken"); //["Chicken",Tea",07,"Blue","New york"]
  