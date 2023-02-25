//reading a JSON file using JS works only with nodeJs
const fs = require("fs");
fs.readFile("File.json", function (err, data) {
  const content = JSON.parse(data);
  console.log(content.name); //This Prints out the name in JSON file
  if (content.name == "Gurusudhan") console.log(content.age);
  else {
    console.log(content.name); //This prints out the age
  }
});

const callback = () => {
  fs.readFile("File1.txt", (err, data) => {
    if (err) throw err;
    else {
      console.log(data.toString()); //This is File one Which runs in first call back
      fs.readFile("File2.txt", (err, data) => {
        if (err) console.log(err);
        else {
          console.log(data.toString()); //This is File two Which runs in second call back
        }
      });
    }
  });
};
callback();

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
readFile("File1.txt").then((data1)=>{
  console.log( data1.toString())
  return readFile("File2.txt").then((data2)=>{
    console.log(data2.toString());
  })
}).catch((err)=>{
  console.log(err);
})
