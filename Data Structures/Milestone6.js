/*Mutable and Immutable Objects
 *Primitive and reference data types
 * Dynamic properies
 * Copying values
 * Argument passing and determining type
 */

//Immutable Objects - Primitive data types
//Primitive datatypes - String,Number,Boolean
let teamName = "CSK"; //String
const newName = teamName; //copying value of teamName to newName
//now
teamName = "Chennai damaka kings";
console.log(teamName); //Chenai super kings
console.log(newName); //CSK
teamName[2] = "b"; //does notchange the value
console.log(teamName);
//Number
let teamScore = 200;
const chaseScore = teamScore;
teamScore = 250; //This doesnot change the chasescore
console.log(teamScore); //250
console.log(chaseScore); //200
//
//Muttable Objects - Reference datatypes
//Reference datatypes - Array, Objects, Functions
const teamList = ["CSK", "MI", "RCB"];
const finalTeamList = teamList;
teamList[3] = "DC"; //change value in both the array
console.log(teamList); //[ 'CSK', 'MI', 'RCB', 'DC' ]
console.log(finalTeamList); //[ 'CSK', 'MI', 'RCB', 'DC' ]
const newTeam = "RR";
teamList.push(newTeam);
console.log(teamList); //[ 'CSK', 'MI', 'RCB', 'DC', 'RR' ]
console.log(finalTeamList); //[ 'CSK', 'MI', 'RCB', 'DC', 'RR' ]
let copyTeam = [...teamList]; //copies the values here
copyTeam[1] = "Sydney sixers";
console.log(copyTeam); //[ 'CSK', 'Sydney sixers', 'RCB', 'DC', 'RR' ]
console.log(teamList); //[ 'CSK', 'MI', 'RCB', 'DC', 'RR' ]

const matchFix = {
  place1: "Mumbai",
  place2: "Chennai",
  place3: "Bihar",
};
matchFix["place4"] = "Delhi";
// console.log(matchFix);
const placeList = Object.assign({}, matchFix);
console.log(placeList);
//Due to rain matchfix has to change bihar -> gujarat
for (let key in matchFix) {
  if (matchFix[key] == "Bihar") {
    //tentatively change the fix
    matchFix[key] = "Gujarat";
  }
}
//now the new matchFix and placeList be
console.log(matchFix); //{place1: 'Mumbai',place2: 'Chennai',place3: 'Gujarat',place4: 'Delhi'}
//placeList be the same as it is tentative
console.log(placeList); //{place1: 'Mumbai',place2: 'Chennai',place3: 'Bihar',place4: 'Delhi'}
/*Here We can use spread operator also placeList= {...matchFix}*/
//Converting Muttable Objects to immutable with Object.freeze()
Object.freeze(matchFix);
matchFix["place3"] = "Bihar";
console.log(matchFix["place3"]); //This still shows Gujarat as changed before as freezed the object
Object.seal(placeList); //this seals as no new entry allowed but exisitng can be changed
placeList["place3"] = "Gujarat";
console.log(placeList["place3"]);

//Dynamic Property -->
const PROMPT = require("prompt-sync")();
const brandName = PROMPT("Enter brand name:");
const memory = PROMPT("Enter RAM value:");
const boughtYear = PROMPT("Enter year bought:");
const os = PROMPT("Enter OS type:");
const laptopType = {
  brand: brandName,
  ram: memory,
  year: boughtYear,
  os,
};
console.log(laptopType); //User input values

//Dynamic Object Property
const sideDish = "chutney";
const listFood = {
  food1: "idly",
  food2: "dosa",
  [sideDish]: "coconut",
};
//Function to addProperties
const addProp = (obj, propKey, propVal) => {
  obj[propKey] = propVal;
  obj.propKey = propVal;
};
addProp(listFood, "food4", "chicken");
console.log(listFood);
//Output will be
/**{
    food1:"idly",
    food2:"dosa",
    [sideDish] : "coconut",
    food4: 'chicken', //obj["anything"] create dynamic property
    propKey: 'chicken'  //obj.antying create anything a property
}; */

//Object.defineProperty
const studentDeatils = {
  name: "Gurusudhan",
  age: 21,
  class: 12,
  DOB: "25/12/2001",
};
Object.defineProperties(studentDeatils, {
  name: { writable: false },
  DOB: { writable: false },
});
studentDeatils.name = "Hari";
studentDeatils.DOB = "26/27/18";
studentDeatils.class = 11;
console.log(studentDeatils.name); //Gurusudhan -->property defined writable false
console.log(studentDeatils.DOB); //25/12/2001 --> property defined writable false
console.log(studentDeatils.class); //11 property not defined

//Shallow and deep copy-->
const totalItems = {
  fruit1: "Apple",
  fruit2: "Banana",
  fruit3: "orange",
  vege: {
    veg1: "carrot",
    veg2: "chili",
  },
};
const availItem = Object.assign({}, totalItems); //{...totalItems}
console.log(totalItems); //{ fruit1: 'Apple', fruit2: 'Banana', fruit3: 'orange' .. }
console.log(availItem); //{ fruit1: 'Apple', fruit2: 'Banana', fruit3: 'orange' .. }
availItem.fruit4 = "Mango"; //only availItem changes
console.log(availItem);

//This case dosenot work while in nested Objects
availItem.vege.veg1 = "beetroot";
console.log(totalItems); //veg1=beetroot
console.log(availItem); //veg1=beetroot

//to overcome this we can use JSON.stringfy
const shallowCopy = JSON.parse(JSON.stringify(totalItems));
console.log(shallowCopy);
shallowCopy.vege.veg1 = "beetroot";
console.log(totalItems); //veg1=carrot
console.log(shallowCopy); //veg2=beetroot

//Rest parameters and Arguments
const addFunc = (a, b) => {
  return a + b;
};
const updateAddFunc = (...args) => {
  let sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum;
};
let marks = addFunc(19, 17);
let totalMark = addFunc(100, 37, 29, 125, 18);
console.log(marks, totalMark); //19+17=36 , 100+37=137
marks = addFunc(13, 18, 12, 17, 15);
totalMark = updateAddFunc(100, 37, 29, 125, 18);
console.log(marks, totalMark); //13+18=31 , 100+37+29+125+18=137

function mulFunc() {
  let total = 1;
  for (let val in arguments) {
    total *= arguments[val];
  }
  return total;
}
const multiply = mulFunc(3, 4, 5, 6);
console.log(multiply);

//DeterMining Type
console.log(typeof 7); // returns 'number'
console.log(typeof typeof 7); // returns 'string'
console.log(typeof (999 - 3223)); // returns, "number"
console.log(typeof 999 - 3223); // returns, NaN
console.log(typeof 0); //'number'
console.log(typeof +0); //'number'
console.log(typeof -0); //'number'
console.log(typeof Math.sqrt(2)); //'number'
console.log(typeof Infinity); //'number'
console.log(typeof NaN); //'number', even if it is Not a Number
console.log(typeof Number("100")); //'number', After successfully coerced to number
console.log(typeof Number("freeCodeCamp")); //'number', despite it can not be coerced to a number
console.log(typeof true); //'boolean'
console.log(typeof false); //'boolean'
console.log(typeof Boolean(0)); //'boolean'
console.log(typeof 12n); //'bigint'
console.log(typeof ""); //'string'
console.log(typeof "freeCodeCamp"); //'string'
console.log(typeof `freeCodeCamp is awesome`); //'string'
console.log(typeof "100"); //'string'
console.log(typeof String(100)); //'string'
console.log(typeof Symbol()); //'symbol'
console.log(typeof Symbol("freeCodeCamp")); //'symbol'
console.log(typeof { blog: "freeCodeCamp", author: "Tapas A" }); //'object';
console.log(typeof ["This", "is", 101]); //'object'
console.log(typeof new Date()); //'object'
console.log(typeof Array(4)); //'object'
console.log(typeof new Boolean(true)); //'object';
console.log(typeof new Number(101)); //'object';
console.log(typeof new String("freeCodeCamp")); //'object';
console.log(typeof new Object()); //'object'
console.log(typeof alert); //'function'
console.log(typeof function () {}); //'function'
console.log(typeof (() => {})); //'function' - an arrow function so, parenthesis is required
console.log(typeof Math.sqrt); //'function'
let a;
console.log(typeof a); //'undefined'
console.log(typeof b); //'undefined'
console.log(typeof undefined); //'undefined'
console.log(typeof null); //'object'

//Context
/**Global Execution Context - GEC
 * Function Execution Context - FEC
 * At first window object and global context is created
 */
sayHello(); //global execution context
//Function is not declaraed before ,prints "Hello" becoz of Global context
function sayHello() {
  // this is function execution context
  console.log("hell0");
  function sayMorning() {
    console.log("Good Morning");
  }
}

//Scope chaining
var name = "Gurusudhan "; //var declares in global scope
function sayName() {
  console.log(name); //Gurusudhan
  //greet in the below scope cannot be used in this scope level
  var hey = "hey"; //This can be used by below function
  function greetPerson() {
    console.log("Good to see, " + name);
    var greet = "hie";
    console.log(hey);
  }
  greetPerson(); //Good to see, Gurusudhan
}
sayName();

//block level scopes
const number = 10;
console.log(number); //10
if (number == 10) {
  const number = 20;
  console.log(number); //20
}
console.log(number); //10

//No-block level scope
if (number == 10) {
  var color = "red";
}
console.log(color); //red
for (var count = 0; count < 10; count++) {
  //
}
console.log(count); //10
