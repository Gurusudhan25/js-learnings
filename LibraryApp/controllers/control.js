import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import customerLog from '../log/winston.js'
import { CronJob } from 'cron'
import { Users, Books, IssuedBook  , Admin} from '../models/model.js'
import { spawn } from 'child_process'
const logger = customerLog
dotenv.config()

// Controllers
export const getHome = (req, res) => {
  res.redirect('/home')
}

export async function login (req, res) {
  const createToken = jwt.sign(req.body, process.env.SECRET_KEY)
  res.cookie('jwt', createToken)
  Users.find({ username: req.body.username }, (err, found) => {
    if (err) res.send('Not found user or Invalid username broke')
    else if (found.length === 0) res.send('No user in that name')
    else {
      bcrypt
        .compare(req.body.password, found[0].password)
        .then((data) => {
          if (data) {
            logger.log('info', 'successfully logged in with password')
            res.redirect('/home')
          } else {
            logger.log('error', 'incorrect password')
            res.send('Wrong password')
          }
        })
        .catch((err) => console.log(err))
    }
  })
}

export const adminLogin = (req, res) => {
  const createToken = jwt.sign(req.body, process.env.SECRET_KEY)
  res.cookie('jwt', createToken)
  res.cookie('admin',true)
  Admin.find({ Adminname: req.body.username }, (err, found) => {
    if (err) res.send('Not found user or Invalid username broke')
    else if (found.length === 0) res.send('No user in that name')
    else {
     if(req.body.password == found[0].password){
            logger.log('info','successfully admin logged in with password')
            res.redirect('/admin')
     }else {
            logger.log('error', 'incorrect password')
            res.send('Wrong password')
          }
    }
  })
}

export const adminPage = (req, res) => {
  IssuedBook.find({}, { title: 1, _id: 0 }, (err, book) => {
    const bookArr = []
    book.forEach((books) => {
      bookArr.push(books.title)
    })
    if (err) console.log(err)
    else res.send('The Issued Books are \n' + bookArr.join(' \n'))
  })
}


export async function register (req, res) {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    res.json(error.errors[0].msg)
  } else {
    Users.find({ username: req.body.username }).then((userdetail) => {
      bcrypt.hash(req.body.password, 10).then((encrypt) => {
        if (userdetail[0] == null) {
          const user = new Users({
            username: req.body.username,
            password: encrypt,
            email: req.body.email
          })
          user.save((err, data) => {
            if (err) console.log('error here')
            else {
              logger.log('info', 'successfully Registered')
              res.send('Succesfully registered')
            }
          })
        } else {
          logger.log('error', 'user already registered')
          res.send('User already exists')
        }
      })
    })
  }
}

export const notLogin = (req, res) => {
  res.send('Login for further details...')
}

export const logout = (req, res) => {
  res.clearCookie('jwt')
  res.clearCookie('admin')
  res.send('Succesfully logged out')
}

export const homePage = (req, res) => {
  Books.find({}, { title: 1, _id: 0 }, (err, book) => {
    const bookArr = []
    book.forEach((books) => {
      bookArr.push(books.title)
    })
    if (err) console.log(err)
    else res.send('The Available Books are \n' + bookArr.join(' \n'))
  })
}

export const addBooks = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.send('Enter a valid Book details')
  } else {
    const newBook = new Books({
      title: req.body.title,
      author: req.body.author,
      pageNumber: req.body.pageNumber
    })
    newBook.save((err) => {
      if (err) {
        console.log(err)
      }
      res.send('Book Added Successfully')
    })
  }
}

export const showBook = (req, res) => {
  const bookTitle = req.body.title
  Books.find({ title: bookTitle }, (err, book) => {
    if (err) {
      console.log('Book Title Not Found')
    }
    res.send(book)
  })
}

export const editBook = (req, res) => {
  const id = req.params.id.replace(':', '')
  Books.findByIdAndUpdate(
    id,
    {
      $set: {
        title: req.body.title,
        author: req.body.author,
        pageNumber: req.body.pageNumber
      }
    },
    (err, book) => {
      if (err) {
        res.send('Something went wrong Could not update')
      } else res.send('Updated the book' + book)
    }
  )
}

export const issueBook = (req, res) => {
  const id = req.params.id.replace(':', '')
  Books.findByIdAndRemove(id, (err, book) => {
    if (err) {
      res.send('Something went wrong Could not delete')
    } else {
      const issuedBook = new IssuedBook({
        title: book.title,
        author: book.author,
        pageNumber: book.pageNumber
      })
      issuedBook.save((err) => {
        if (err) {
          logger.log('error', 'error issuing book')
        }
      })
      res.send('Thanks for getting the book , return within 7 days')
    }
  })
}

export const returnBook = (req, res) => {
  const bookTitle = req.body.title
  IssuedBook.findOneAndRemove({title:bookTitle},(err, book) => {
    if (err) {
      res.send("There is no book with that title in our library");
    }else{
      const returnBook = new Books({
        title: book.title,
        author: book.author,
        pageNumber: book.pageNumber
      })
      returnBook.save((err) => {
        if (err) {
          console.log('error', 'error returning book')
        }
      })
      res.send('Thank you for returning the book')
    }
  })
}

export const deleteBook = (req, res) => {
  const id = req.params.id.replace(':', '')
  Books.findByIdAndRemove(id, (err, book) => {
    if (err) {
      res.send('Something went wrong Could not delete')
    } else {
      IssuedBook.findOneAndRemove({title:book.title},(err, book) => {
        if (err) {
          res.send("There is no book with that title in our library");
        }else{
          res.send('Deleted the book')
        }
      })
    }
  })
}

