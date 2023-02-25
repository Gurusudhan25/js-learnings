export const personName = "gurusudhan";

export const hi = () => {
  console.log("hello");
};

export class Studentdetails {
  constructor(name, std) {
    this.name = name;
    this.std = std;
  }
  details() {
    console.log(`I'm ${this.name} from ${this.std}`);
  }
}