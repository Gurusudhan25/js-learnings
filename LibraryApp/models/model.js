import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// Mongodb connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.lib, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('connected')
})
// Creating a Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pageNumber: Number
})

// creating a model for mongo database
export const Books = mongoose.model('books', bookSchema)

// Creating a Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})
// creating a model for mongo database
export const Users = mongoose.model('users', userSchema)

export const IssuedBook = mongoose.model('issued_books', bookSchema)

const adminSchema = new mongoose.Schema({
  adminname: String,
  password: String,
  isAdmin: Boolean
})

export const Admin = mongoose.model('admin', adminSchema)

// const newAdmin = new Admin({
//   adminname:'Gurusudhan',
//   password: '1234',
//   isAdmin: true
// })
// newAdmin.save()

export default { Users, Books, IssuedBook , Admin}
