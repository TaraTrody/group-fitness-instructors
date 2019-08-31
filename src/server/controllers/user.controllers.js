import _ from 'lodash'
import User from '../db/models/user.model'
import errorHandler from '../utils/dbErrorHandler'

const createUser = (req, res, next) => {

  const newUser = new User(req.body)
  console.log(newUser)

  newUser.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json({
      message: 'Successfully signed up!',

    })
  }
  )
}

const getUserList = (req, res) => { 
  User.find((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(user)
  })
    .select('-password')
}

const userByID = (req, res, next, id) => {

  User.findById(id).exec((err, user) => {
    if (err || !user)
      return res.status('400').json({
        error: "User not found"
      })

    req.profile = user
    next()
  })
}

const getUser = (req, res) => {
  req.profile.password = undefined

  return res.json(req.profile)
}

const updateUser = (req, res, next) => {
  let user = req.profile
  user = _.extend(user, req.body)
  user.updated = Date.now()
  user.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    user.password = undefined
    res.json({
      message: 'User account updated',
      user
    })
  })
}

const removeUser = (req, res, ) => {
  let user = req.profile
  User.deleteOne(user, (err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    user.password = undefined
    res.json({
      message: 'User account deleted',
      deletedUser
    })
  }
  )
}

export default { createUser, getUserList, userByID, getUser, updateUser, removeUser }