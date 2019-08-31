import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import User from '../db/models/user.model'
import config from '../../config/config'

const signin = (req, res) => {
  User.findOne(
    {
      'email': req.body.email
    }, (err, user) => {
      if (err || !user) {
        return res.status(401).json({
          message: 'User not found'
        })
      }
      if (!user.authenticate(req.body.password)) {
        return res.status(401).json({
          message: "Email and password don't match"
        })
      }
      const token = jwt.sign({ _id: user._id }, config.jwtSecret)
      res.cookie("t", token, {
        expire: new Date() + 9999
      })
      return res.json({
        token,
        user: { _id: user._id, lastName: user.lastName, email: user.email }
      })
    })
}
const signout = (req, res) => {
  res.clearCookie('t')
  return res.status(200).json({
    message: 'Successfully signed out'
  })
}
const requireSignin = expressJwt({
  secret: config.jwtSecret,
  requestProperty: 'auth' 
})
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id 
  console.log(req.profile)
  console.log(req.auth)
  if(!(authorized)) { 
    return res.status(403).json({
      error: 'User is not authorized'
    })
  }
  next()
}

export default { signin, signout, requireSignin, hasAuthorization }