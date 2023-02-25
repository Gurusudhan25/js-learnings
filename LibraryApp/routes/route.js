import express from 'express'
import {
  getHome,
  login,
  adminLogin,
  notLogin,
  logout,
  register,
  homePage,
  adminPage,
  addBooks, 
  showBook,
  editBook,
  issueBook,
  deleteBook,
  returnBook
} from '../controllers/control.js'
import {authController, adminAuth} from '../middleware/authcontrol.js'
import { body } from 'express-validator'

const route = express.Router()

// Login routes
route.get('/', authController, getHome)
route.get('/notlogin', notLogin)

route.post('/login', login)
route.post(
  '/register',
  [
    body('username').trim().isLength(6).withMessage('To short name'),
    body('password').trim().isLength(5).withMessage('short password')
  ],
  register
)
route.post('/adminlogin',adminLogin)
route.get('/admin',authController,adminAuth,adminPage)
route.get('/logout', logout)

// Library routes
route.get('/home', authController, homePage)
route.post('/home/newentry', authController, adminAuth,addBooks)
route.post('/home/returnbook', authController,returnBook)
route.get('/home/book', authController, showBook)
route.patch('/home/book/:id', authController, adminAuth,editBook)
route.delete('/home/book/borrow/:id', authController, issueBook)
// route.delete('/home/book/borrow/:id', authController, deleteBook)
export default route
