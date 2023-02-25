const square = () => {
  console.log("This is square function");
};

class Student {
  constructor(name, std) {
    this.name = name;
    this.std = std;
  }
  details() {
    console.log(`I'm ${this.name} from ${this.std}`);
  }
}

module.exports = { Student, square };
