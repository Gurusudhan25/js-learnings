const PROMPT = require("prompt-sync")();
const month = PROMPT("Enter the number of month:");
const findMonth = (month) => {
  month--;
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (monthArr[month]) return monthArr[month];
  else throw new Error("Invalid");
};

try {
  console.log(findMonth(month));
} catch (e) {
  console.log("Error invalid");
}

const checkFun = () => {
  try {
    console.log("In try block");
    throw "to catch"; //it throws to catch block
  } catch {
    //catches the error throw and process
    console.log("In catch block");
  } finally {
    //after the try and catch block finally block executes
    console.log("In final block");
  }
};

checkFun();

const practiceTryCatch = () => {
  try {
    console.log("In try block");
    throw err;
  } catch {
    console.log("In catch block");
    throw err;
  } finally {
    console.log("Finally...");
  }
};

try {
  practiceTryCatch();
} catch {
  //catches the catch blocks throw
  console.log("In outer catch block");
}

//Simple exception handling  using promises
const simplepromise = () => {
  return new Promise((res, rej) => {
    try {
      res("Resolved");
    } catch (e) {
      rej("Rejected");
    }
  });
};
simplepromise()
  .then((data) => {
    console.log(data);
    decoration1
      .then((data) => {
        console.log(data);
        return "Hello world";
      })
      .then((data) => {
        console.log(data);
      });
  })
  .catch((error) => {
    console.log(error);
  });

const decoration1 = new Promise((res, rej) => {
  try {
    res("----------------");
  } catch (e) {
    rej();
  }
});
const decoration2 = new Promise((res, rej) => {
  try {
    res("***********");
  } catch (e) {
    rej();
  }
});

decoration1
  .then((data) => {
    console.log(data);
    return "Hello world";
  })
  .then((data) => {
    console.log(data);
  });

setTimeout(() => {
  decoration2
    .then((data) => {
      console.log(data);
      return "New Hello world";
    })
    .then((data) => {
      console.log(data);
    });
}, 200);

//Promise.race([decoration1, decoration2]);
