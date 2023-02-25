class Queue {
  constructor() {
    this.arr = [];
    this.count = 0;
  }
  //creating a queue
  enqueue(itemAdd) {
    this.arr[this.count] = itemAdd;
    this.count++;
  }
  //dequeuing all the elements in array
  dequeue() {
    // this.arr.shift();  shift property can also be used
    // this.count--;
    if (this.count==0) console.log("Underflow, A empty queue nothing to dequeue");
    for (let index = 0; index < this.count; index++) {
      this.arr[index] = this.arr[index + 1];
    }
    this.count--;
  }

  //printing all the elements in queue
  printQueue() {
    let displayQueue = "";
    for (let index = 0; index < this.count; index++) {
      displayQueue += this.arr[index] + " ";
    }
    console.log(displayQueue);
  }
  //Method to log the front in queue
  front() {
    console.log(`${this.arr[0]} is front at the queue`);
  }
  //method to check whether the queue is empty
  isEmpty() {
    if (this.count == 0) console.log(true + " The queue is empty");
    else console.log(false + " Queue is not empty");
  }
}

const queue = new Queue();
queue.isEmpty(); //true
queue.enqueue("Gurusudhan");
queue.enqueue("sudhan");
queue.enqueue("Guru");
queue.printQueue(); // Gurusudhan sudhan guru
queue.front(); //Gurusudhan
queue.dequeue();
queue.front(); //sudhan
queue.printQueue(); //sudhan guru
queue.enqueue("Abi");
queue.printQueue(); //sudhan guru abi
queue.isEmpty(); //false
