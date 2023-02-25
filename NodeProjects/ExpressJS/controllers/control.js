import { v4 as uuidv4 } from "uuid";

let userData = [];

export const getUser = (req, res) => {
  res.send(userData);
};

export const addUser = (req, res) => {
  const newUser = req.body;
  const userWithID = { ...newUser, id: uuidv4() };
  userData.push(userWithID);
  res.send(`New user ${req.body.name} is added to data base `);
};

export const userID = (req, res) => {
  const id = req.params.id;
  let foundUser = "USER NOT FOUND";
  for (let index = 0; index < userData.length; index++) {
    if (userData[index].id == id) foundUser = userData[index];
  }
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const idval = req.params.id;
  userData = userData.filter((val) => val.id !== idval);
  res.send(`USER DELETED`);
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  const foundUsertoPatch = userData.find((user) => {
    user.id == id;
  });
  if (name) foundUsertoPatch.name = name;
  if (age) foundUsertoPatch.age = age;
};
