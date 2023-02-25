class Stack {
  constructor() {
    this.arr = [];
    this.count = 0;
  }

  //pushing new elements to the stack
  push(itemAdd) {
    this.arr[this.count] = itemAdd;
    this.count++;
    //console.log(this.arr);
  }

  //popping out the last element in stack
  pop() {
    if (this.count == 0) return undefined;
    else {
      let deleteItem = this.arr[this.count - 1];
      this.count -= 1;
      //console.log(this.arr);
      return `${deleteItem} has been removed form ${this.arr}`;
    }
  }

  //method to check whether the stack is empty
  isEmpty() {
    if (this.count == 0) console.log(true);
    else console.log(false);
  }

  //Method to display all the stack elements
  printStack() {
    let displayStack = "";
    if (this.count == 0) console.log(undefined);
    for (let index = 0; index < this.count; index++) {
      displayStack = displayStack + this.arr[index] + " ";
    }
    console.log(displayStack);
  }

  //Method to display the peak element in stack
  displayPeak() {
    console.log(this.arr[this.count - 1]);
  }
}

const stack = new Stack();

stack.isEmpty(); //true
stack.printStack(); //undefined
stack.push(100);
stack.printStack(); //100
stack.push(102);
stack.push(108);
stack.push(104);
stack.printStack(); //100 102 108 104
stack.pop();
stack.printStack(); //100 102 108
stack.displayPeak(); //108
stack.push(107);
stack.push(109);
stack.printStack(); //100 102 108 107 109
stack.displayPeak(); //109
stack.isEmpty(); //flase
