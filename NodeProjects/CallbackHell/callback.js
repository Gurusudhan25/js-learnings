//Advantages and disadvantages of callback

const callingnew = (value1, value2) => {
  setTimeout(() => {
    return value1 + value2; //this is async
  }, 2000);
};
console.log(callingnew(4, 5)); //This returns undefined  as this is sync

//By using a callback function this is overcomed in async programmming
const calling = (value1, value2, callback) => {
  setTimeout(() => {
    return callback(value1 + value2);
  }, 2000);
};

calling(4, 5, (output) => {
  console.log(output);
});

//Convert callback to promise
const libraryCallback = (callback) => {
  setTimeout(() => {
    console.log(callback());
  }, 2000);
  console.log("This is calling function");
};
libraryCallback(() => {
  return true;
});

const promise = () => {
  new Promise((resolve, reject) => {
    libraryCallback(() => {
      return true;
    });
  });
};
promise();

//Callback - hell;
const first = (callback1, n) => {
  console.log(n);
};
const second = (callback2, n) => {
  setTimeout(() => {
    console.log(n);
  }, 200);
  callback2();
};
const third = () => {
  setTimeout(() => {
    console.log(3);
  }, 300);
};
first(second(third, 2), 1); //1 2 3
