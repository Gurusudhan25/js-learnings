const axiosrequest = require("axios");
const blueBird = require("bluebird");

const response = axiosrequest.get("http://www.boredapi.com/api/activity/");
// console.log(response.data.activity); This shows error

// const result = new blueBird((resolve, reject) => {
//    axiosrequest.get("http://www.boredapi.com/api/activity/")
//     .then((response) => {
//       console.log(response.data.activity);
//     });
// });
const resultResolve = new blueBird((resolve, reject) => {
  const response = axiosrequest.get("http://www.boredapi.com/api/activity/");
  try {
    resolve(response);
  } catch {
    reject();
  }
});

resultResolve
  .then((response) => {
    console.log(response.data.activity);
  })
  .catch(() => {
    console.log("Error");
  });

const resultReject = new blueBird((resolve, reject) => {
  const response = axiosrequest.get("https://httpstat.us/404");
  try {
    resolve(response);
  } catch {
    reject();
  }
});
resultReject
  .then((response) => {
    console.log(response.data.activity);
  })
  .catch(() => {
    console.log("Error requesting API");
  });

//Async - await function
async function getActivity() {
  try {
    const response = await axiosrequest.get(
      "http://www.boredapi.com/api/activity/"
    );
    console.log(response.data.activity, "--> check");
  } catch (err) {
    console.log(`ERORR ${err} --> err check`);
  }
}
getActivity();

//Geting information

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (String(location).toUpperCase() === "GOOGLE") {
      resolve("Google says Hi..");
    } else {
      reject("Only Google can be accessed");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("<<<<<<Pocessing Response>>>>>>\n");
    resolve(response);
  });
}

makeRequest("Google")
  .then((response) => {
    return processRequest(response);
  })
  .then((response) => {
    console.log(">>>>>>Response Received<<<<<<");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
/*
Making request to Google
<<<<<<Pocessing Response>>>>>>

>>>>>>Response Received<<<<<<
Google says Hi..
*/
