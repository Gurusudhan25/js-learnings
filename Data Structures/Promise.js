/**States of promise
 *  pending
 *  fullfilled
 *  rejected
 */
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Succesfully resolved");
  }, 2000);
});
const promise2 = new Promise((reject) => {
  setInterval(() => {
    reject("Rejected");
  }, 2000);
});
promise1.then(console.log); //Succesfully resolved
promise2.then(console.log).catch(console.log); //Rejected

const p1 = (val) =>
  new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(val + 20);
    }, 2000);
  });

p1(20).then(console.log); //40

//Promises - to overcome disadvantage in callback
function decoration(callBack) {
  console.log("---------");
  console.log(".........");
  callBack();
  console.log("---------");
}

decoration(() => {
  console.log("call back");
});
/* [Output]
    ---------
    .........
    call back
    ---------
  */

function decoration2() {
  return new Promise((resolve, reject) => {
    console.log("---------");
    resolve();
    console.log(".........");
    console.log("---------");
  });
}
decoration2().then(() => {
  console.log("Promise executed");
});
/*OUTPUT OF PROMISE
        ---------
        .........
        ---------
        Promise executed
   */

//call back loop using promise
decoration2()
  .then(() => {
    console.log("First Promise");
  })
  .then(() => {
    console.log("Second Promise");
  });

const blueBird = require("bluebird");
const bluBridPromiseResolve = new blueBird((resolve) => {
  resolve("Successfully resolved");
});
const bluBridPromiseReject = new blueBird((reject) => {
  Test.display();
  reject();
});

bluBridPromiseResolve.then((val) => {
  console.log("Response:", val);
}); //Response: Successfully resolved

bluBridPromiseReject
  .then((val) => {
    console.log("Response:", val);
  })
  .catch(() => {
    console.log("Response: Rejected Promise"); //Response: Rejected Promise
  });

//Convert call back to promises
function main(callback) {
  console.log("Main Function exected");
  callback();
}
main(() => {
  console.log("Callback function executed");
});

const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    console.log("promise main function 1");
    resolve();
    console.log("line 2 to check promise 2");
  });
};
promiseFunc()
  .then(() => {
    console.log("promise call back function 3");
  })
  .then(() => {
    console.log("Third promise chain 4");
  });
