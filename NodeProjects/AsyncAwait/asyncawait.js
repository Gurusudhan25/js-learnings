//function that returns a promise
function maintainNumber(n) {
  return new Promise(function (resolve, reject) {
    if (typeof n === 'number') {
      resolve(n);
    } else {
      reject("n is not a number");
    }
  });
}
maintainNumber(1)
  .then((data) => increment(data))
  .then((data) => increment(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); //3

maintainNumber(5)
  .then((data) => increment(data))
  .then((data) => increment(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); //7

//same function can be written in async await
async function maintain(value) {
  try {
    const forex = await maintainNumber(value);
    const val1 = await increment(forex);
    const val2 = await increment(val1);
    console.log(val2);
  } catch (err) {
    console.log("It is not a number");
  }
}

maintain(3); //5
maintain(5); //7
maintain("n"); //It is not a number

//jus a function
function increment(n) {
  return n + 1;
}
