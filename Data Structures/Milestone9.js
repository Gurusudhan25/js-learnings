/**Recursion, Closures with variables
 * This. keyword
 * Memory leaks and mimicking block scope
 */
//Recursion
log = console.log;
function printNumbers(n) {
  if (n == 10) {
    return [n];
  } else if (n < 10) {
    return [n, ...printNumbers(++n)];
  } else {
    return [n, ...printNumbers(--n)];
  }
}
//Time complextiy of this function in O(logn)
log(printNumbers(14).join(" ")); //14 13 12 11 10
log(printNumbers(4).join(" ")); //4 5 6 7 8 9 10

//Closures  -> Function along with its lexical scope
function displayFun() {
  const num1 = 10;
  return function anotherFun() {
    log(num1);
  };
}
let output = displayFun();
output(); //10

//Closures with variable -> they return with the reference
const outFun = (_) => {
  let num1 = 10;
  const inFun = (_) => {
    console.log(num1);
  };
  num1 = 100;
  return inFun;
};
output = outFun();
output(); //100

const newFun = (_) => {
  let num2 = 200;
  const outFun = (_) => {
    let num1 = 10;
    const inFun = (_) => {
      console.log(num1, num2);
    };
    num1 = 100;
    num2 = 1000;
    return inFun;
  };
  num2 = 200;
  return outFun();
};
const y = newFun();
y(); //100 1000

//The This keyword
//Metod -> Obj
//Function -> Global (window,global)
const ThisFun = (num1, num2) => {
  this.num1 = num1;
  this.num2 = num2;
  console.log(this); //refereing to window objcet
};
ThisFun();

const fruits = {
  fruitList: ["Apple", "Orange", "Grapes"],
  fruitPrice: [100, 150, 500],
  advantage: "Good for health",
  disadvantage: "They are less high cost preservative",
  showAdvantage() {
    console.log("Eating fruits are", this.advantage);
  },
  showDisadvantage() {
    console.log(this.disadvantage);
  },
  showPrice() {
    this.fruitList.forEach(function (item, i = 0) {
      console.log(item + " - " + this.fruitPrice[i]);
      i += 1;
    }, this); //passing the whole object to call-back function
  },
};
fruits.showAdvantage();
fruits.showDisadvantage();
fruits.showPrice();

//Memory Leaks
let emptyArr = [];
for (let number = 0; number < 1024 * 1024 * 108; number++) {
  emptyArr.push(number);
}
console.log(emptyArr); //Fatal JavaScript invalid size error 169220804

emptyArr = [];
for (let number = 0; number < 1024 * 1024 * 107; number++) {
  emptyArr.push(number);
  console.log(process.memoryUsage());
}
console.log(emptyArr); //This runs succesfully -> same with objects too

//closure with memory leaks
let value = null;
function closure() {
  let last = value;
  (function () {
    last;
  })(last);
  value = {
    a: function () {},
  };
}
setInterval(function () {
  closure();
}, 1); //this create memory leak in heap

//Mimicking scope
var num1 = 10;
console.log(num1); //10
{
  num1 = 100;
  let num2 = 20;
  const num3 = 30;
  {
    console.log(num2, num3); //20 30
  }
}
console.log(num1); //100
// console.log(num2, num3); //refernce error-> undefined

//Sync nd Async
console.log("Sync"); //->1
setTimeout(() => {
  console.log("Async");
}, 2000); //->3
console.log("sync second"); //->2

//callBack-functions
function main(callBack) {
  console.log("Main function executed");
  const name = "Gurusudhan";
  callBack(name);
}
function callBack(name) {
  console.log("Hello to call-back function " + name);
}
main(callBack);

//Asynchronous call back
function Fun1(Fun2) {
  setTimeout(() => {
    console.log("calling function");
  }, 3000);
  Fun2();
}
Fun1(function Fun2() {
  console.log("call back function");
});

//In-built call-back -> setTimeout , forEach
setTimeout(callBack, 2000, "Guru"); //Hello to call-back function Guru
const names = ["Gurusudhan", "Hari", "Saravana"];
names.forEach(callBack);
