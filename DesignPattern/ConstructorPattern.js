function Cars(brand, year = 2023, color) {
  this.brand = brand;
  this.year = year;
  this.color = color;

  this.colorDetails = () => {
    console.log("This " + this.brand + " is " + this.color);
  };
  this.boughtYear = () => {
    console.log("This " + this.brand + " is bought on " + this.year);
  };
}

const civic = new Cars("Honda", 2019, "White");
const q5 = new Cars("Audi", 2022, "Blue");
const Verna = new Cars("Toyoto", 2017, "Grey");
//Calling Methods
civic.colorDetails(); //This Honda is White
civic.boughtYear(); //This Honda is bought on 2019
Verna.colorDetails(); //This Toyoto is Grey

class Fruits {
  constructor(fruitName) {
    this.fruitName = fruitName;
  }
  displayFruit() {
    console.log(this.fruitName, "is a fruit");
  }
}

const item1 = new Fruits("Apple");
const item2 = new Fruits("Orange");
item1.displayFruit(); //Apple is a Fruit
