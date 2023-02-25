import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function authController (req, res, next) {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) res.redirect('/notlogin')
      else next()
    })
  } else {
    res.redirect('/notlogin')
  }
}

export function adminAuth(req, res,next) {
  const isAdmin = req.cookies.admin
  if (isAdmin === 'true'){
    next();
  }else{
    res.send("You are not a admin")
  }
}

export default {authController,adminAuth}
