class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  push(itemAdd) {
    this.arr[this.length] = itemAdd;
    this.length++;
  }
  pop() {
    this.length--;
    return this.arr[this.length];
  }
  peek() {
    console.log(this.arr[0]);
  }
  invalid() {
    console.log("Invalid Instruction");
  }
}
const calc = (operations) => {
  const stack = new Stack();
  operations = String(operations).split(" ");
  for (val in operations) {
    switch (operations[val]) {
      case "":
        stack.push(0);
        break;
      case "+":
        stack.push(parseInt(stack.pop()) + parseInt(stack.pop()));
        break;
      case "-":
        stack.push(parseInt(stack.pop()) - parseInt(stack.pop()));
        break;
      case "*":
        stack.push(parseInt(stack.pop()) * parseInt(stack.pop()));
        break;
      case "/":
        stack.push(parseInt(stack.pop()) / parseInt(stack.pop()));
        break;
      case "DUP":
        stack.push(parseInt(operations[val - 1]));
        break;
      default:
        if (-Infinity <= operations[val] && operations[val] <= Infinity) {
          stack.push(parseInt(operations[val]));
        } else {
          return stack.invalid();
        }
    }
  }
  return stack.peek();
};

calc("3 9 DUP * +");
calc("3 DUP +");
calc("6 5 5 7 * - /");
calc("x 6 9 + -");
calc("3 4 8 3 9 / + /");
calc("-3 3 -"); 
