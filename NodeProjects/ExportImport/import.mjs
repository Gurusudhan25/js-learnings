import {
  hi,
  personName,
  Studentdetails as database,
} from "../ExportImport/module/export.mjs";

import { square as tellSquare, Student } from "./module/export.js";
import * as numbers from "./module/Newexports.js";

//In built module imports
const PROMPT = require('prompt-sync');
const HTTP = require('http');
const URL = require('url');


//imports from .mjs file
console.log(personName);
hi();
const newPerson = new database("Praveen", 12);
newPerson.details();
//imports from js file
tellSquare();
const person1 = new Student("Gurusudhan", 12);
person1.details();
//imports from new imports
console.log(numbers.one, numbers.two, numbers.three);
console.log(numbers.add(5, 6));
