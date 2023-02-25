import express from "express";
import {
  getUser,
  addUser,
  userID,
  deleteUser,
  updateUser,
} from "../controllers/control.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", addUser);
router.get("/:id", userID);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;

// //Router for get methods
// router.get("/", (req, res) => {
//   FS.readFile("user.json", (err, data) => {
//     const USERS = JSON.parse(data);
//     res.send(USERS);
//   });
// });
// //Router for post methods
// router.post("/", (req, res) => {
//   const newUser = req.body;
//   const data = FS.readFileSync("user.json");
//   let oldUsers = JSON.parse(data);
//   const userWithID = { ...newUser, id: uuidv4() };
//   oldUsers.users.push(userWithID);
//   const fullData = JSON.stringify(oldUsers);
//   FS.writeFile("user.json", fullData, (err) => {
//     if (err) throw err;
//   });
//   res.send(`New user ${req.body.name} is added to data base `);
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   const userList = FS.readFileSync("user.json");
//   const oldUsers = JSON.parse(userList);
//   const userArr = [...oldUsers.users];
//   let foundUser = "USER NOT FOUND";
//   for (let value = 0; value < userArr.length; value++) {
//     if (userArr[value].id == id) {
//       foundUser = userArr[value];
//     }
//   }
//   res.send(foundUser);
// });

// // router.delete("/:id", (req, res) => {
// //   const id = req.params.id;
// //   const userList = FS.readFileSync("user.json");
// //   const oldUsers = JSON.parse(userList);
// //   let userArr = [...oldUsers.users];
// //   userArr = userArr.filter((user) => {
// //     console.log(userArr);
// //     user.id !== id;
// //   });
// //   console.log(userArr);
// //   // res.send(`User ${foundUser.name} has been deleted from database`);
// // });

// //Patch Mthod

// //Admin route
// router.get("/Admin", (req, res) => {
//   res.send("This is Admins Page");
// });
// export default router;

//Admin route
// router.get("/Admin", (req, res) => {
//   res.send("This is Admins Page");
// });
