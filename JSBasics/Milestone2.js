console.log("Hello world Programme");
//Single line comment
/* Multi line comment*/

//Datatypes

//Number
let a = 10;
console.log(a, typeof a);

//String
let b = "Gurusudhan";
console.log(b, typeof b);

//Boolean
let c = true;
console.log(c, typeof c);

//NUll
let d = null;
console.log(d, typeof d);

//Undefined
let e;
console.log(e);
//Object
let O = {
  p1: 10,
  p2: 20,
};
console.log(typeof O);

//Strings
let firstName = "John";
let lastName = "John";
let new1 = new String("John");

console.log(firstName.length); //Some methods of string
let numTOstr = 29;
console.log(typeof numTOstr); //Number here
console.log(numTOstr.toString);
console.log(typeof numTOstr); //String here

//Numbers
let num1 = 10;
let num2 = 10.345;
let num3 = 10e2;
console.log(num1, num2, num3);
console.log(typeof num1, typeof num2, typeof num3);

//object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person.firstName); //Accesing using properties
console.log(person["firstName"]); //two diff ways prints same output
person.new = "just add to ob"; //adding new property
console.log(person.new);
//changing values of properties
person.firstName = "Guru";
person.lastName = "Sudhan";
person.age = 21;
person.eyeColor = "Black";
delete person.new; //deleteing a property
console.log(person);

//Arrays
const cars = ["audi", "toyato", "benz"];
console.log(cars);
cars[1] = "Gurusudhan";
console.log(cars);
cars.push("Hari"); //pushing new value
console.log(cars);
cars.pop(); //poping up last element
console.log(cars.length); //Shows length of array

//JSON
let object = JSON.parse('{"N1":"stu","Class": 4}');
console.log(object);

let x = 10;
let y = 2;
console.log(x + y); // simple addition

//Operators
console.log(x == y); //True
console.log(x === y); //False

//Arithmetic operators
console.log(x - y); //Subtraction
console.log(x * y); //Multipilaction
console.log(x / y); //Division
console.log(x % y); //Remainder or True division
console.log(x ** y); //powerof
console.log(x++); //Increment
console.log(x--); //Decrement

//Assignment operators
let z;
console.log((z = x), (z += x), (z -= x), (z *= x), (z **= x), (z /= x));

//Bitwise operators
console.log(x & y); //And
console.log(x | y); //Or
console.log(x ^ y); //Xor
console.log(x << y); //left shift
console.log(x >> y); //right shift
console.log(x >>> y); //Unsigned right shift

//Type conversion
let st = "Gurusudhan";
let num = 10;
console.log(num + st);
console.log(typeof (num + st));

//Nested objects
const car = {
  name: "Civic",
  brand: "Honda",
  mileage: 15,
  colors: ["green", "blue", "red"],
  factories: {
    city1: "Chennai",
    city2: "mumbai",
  },
  made: function () {
    //console.log("This is new model honda car made in India");
    console.log(`${car.name} is first Sedan made in ${this.factories.city1}`);
  },
};

car.made(); //Civic is first Sedan made in Chennai


