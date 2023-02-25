/**Encapsulation
 * Abstraction
 * Polymorphism
 * Inheritance
 */

// Using a constructor
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

const person1 = new Person("Guru", "Sudhan");
const person2 = new Person("Hari", "Haran");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

const details = {
  person_name: "Gurusudhan",
  dob: new Date("dec 26 2001"),
  age: 21,
  favs: ["cric", "football", "chess"],
};
const age = details.age; //Dot notation
const person_name = details["person_name"]; //Square or Dynamic form
const { dob } = details; //Object destructuring
console.log(person_name, age, dob);

Object.defineProperty(details, "favMovie", { writable: true, value: "Premam" });
console.log(details.favMovie); //Premam

Object.defineProperties(details, {
  PhoneNumber: { writable: true, value: 12345 },
  Address: { value: "Chennai",writable:true }
});
console.log(details.PhoneNumber); //12345
console.log(details.Address); //Chennai
