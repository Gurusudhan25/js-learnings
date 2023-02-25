const events = require("node:events");
const EventEmitter = new events();

//Listeners
const sayName = () => {
  console.log("Hi Successfully logined");
};
const badCredentials = () => {
  console.log("Invalid User authentication");
};

//Register event
EventEmitter.on(true, sayName);
EventEmitter.on(false, badCredentials);

//event name
const validate = (name) => {
  if (String(name).toLowerCase() == "gurusudhan") return true;
  else return false;
};

//event emitt or raising an event
EventEmitter.emit(validate("Gurusudhan")); // Hi This is Emmited event
EventEmitter.emit(validate("Bharath")); // Invalid User authentication

//Listeners
console.log(EventEmitter.listeners(true), EventEmitter.listeners(false));

const sayDay = () => {
  console.log("Welcome Monday");
};
const sayTime = () => {
  console.log("10:30 am");
};
const greet = () => {
  console.log("Good Morning");
};
EventEmitter.on("today", sayDay);
EventEmitter.on("today", sayTime);
EventEmitter.on("today", greet);
EventEmitter.emit("today");
console.log(EventEmitter.listeners("today")); //[ [Function: sayDay], [Function: sayTime], [Function: greet] ]
console.log(EventEmitter.listenerCount("today")); // 3
