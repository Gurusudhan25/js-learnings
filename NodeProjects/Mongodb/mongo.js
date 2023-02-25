import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/sample", (err, db) => {
  if (err) console.log(err);
  console.log("Connected to MongoDB");
});
