//Recollecting all the topics and overview

//functions
function displayOut() {
  console.log("Hello World");
}

const basicOutput = () => {
  console.log("Hello");
};

//Objects
const person = {
  name: "Gurusudhan V",
  age: 21,
  address: {
    city: "Nagapattinam",
    state: "Tamilnadu",
  },
  interest: ["playing", "Reading"],
  gmail: "xyz@gmail",
};
//Object is not iterable
// for (let key of person) console.log(key); - Error

for (let key in person) console.log(key); //name ,age,address,int..
for (let key in Object.entries(person)) console.log(key); // 1,2,3,4
for (let key of Object.entries(person)) console.log(key); //[name,gurusudhan] [age,24],[..

//Factory Functions
//creating application with greetings
const createPerson = (name) => {
  const person = {
    name: name,
    greeting: function () {
      return `Welcome ${this.name}`;
    },
  };
  return person.greeting();
};

const member1 = createPerson("Gurusudhan");
const member2 = createPerson("Hariharan");
const member3 = createPerson("Kavya");
console.log(member3); //Welcome Kavya

//Primitve datatype and refrence data type
/*Number,boolean,String,Null=>Primitve datatypes
 *Object,array =>refrence datatypes
 */
//Primitive types
let guruAge = 10;
console.log(guruAge); //10
const gurusudhanAge = guruAge;
guruAge = 20;
console.log(gurusudhanAge); //10
console.log(guruAge); //20
console.log(gurusudhanAge); //10 - Value doesnot change here

//Refernce types
const teamMembers = {
  mem1: "gs",
  mem2: "sv",
  mem3: "vgs",
};
const oldTeam = teamMembers;
teamMembers.mem2 = "Guru";
console.log(teamMembers.mem2); //guru
console.log(oldTeam.mem2); //guru
//Both the value changes as it refers to the address

//Cloning a Object using spread opretor
const newTeam = { ...oldTeam, mem4: "rahul" };
console.log(newTeam); //Updated team
for (let key in newTeam) {
  const value = newTeam[key];
  console.log(key, value);
}
//cloning using assign property
const updateTeam = Object.assign(newTeam, { mem5: "arjun" });
console.log(updateTeam);

//Traditional method cloning of object
const finalTeam = {};
for (let player in updateTeam) {
  finalTeam[player] = updateTeam[player];
}

//Student database application
//Constructor Function - (Pascal case for constructor function)
function Student(name, year) {
  this.name = name;
  this.year = Number(year);
  return `${this.name} is studying in ${this.year} year`;
}
const student1 = new Student("Gurusudhan", 2);
const student2 = new Student("Hariharan", 3);
console.log(student1.name); //Gurusudhan

//The database is created using constructor
class StudentDatabase {
  constructor(name, year, college = "MCET") {
    this.name = name;
    this.year = year;
    this.college = college;
  }
  displayDetails() {
    console.log(
      `${this.name} is studying in ${this.year} year in ${this.college}`
    );
  }
}
const student3 = new StudentDatabase("Abinaya", 3);
const student4 = new StudentDatabase("Abi", 2);
student3.displayDetails(); //Abinaya is studying in 3 year in MCET
const student5 = new StudentDatabase("Sindhu", 4, "PSG");
student5.displayDetails(); //Sindhu is studying in 4 year in PSG

/**Function Declarartion type
 *  Declaration
 *  Expressions
 *  constructoe
 *  Hoisting
 */
//Function expression
const addFunc = function (a, b) {
  return a + b;
};
//Function declaration
function subbFunc(a, b) {
  return Math.abs(a - b);
}
//function Hoisting
squareFunc(5); // returns 25
function squareFunc(n) {
  return n * n;
}
//Function Constructor
const multiply = new Function("a", "b", "return a*b");
console.log(multiply(3, 4)); // 12

const checkArr = [];
checkArr["Guru"] = "name";
checkArr["hari"] = "nam2";
console.log(checkArr);

const val = new Boolean(false);
if (val) console.log("This IF state"); //output
else console.log("This is ELSE state");

const val2 = null;
if (val2) console.log("This IF state");
else console.log("This is ELSE state"); //output
