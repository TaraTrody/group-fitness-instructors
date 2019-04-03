import _ from 'lodash'
import User from '../models/user.model'
import errorHandler from '../helpers/dbErrorHandler'

const create = (req, res, next) => {
  let newUser = new User(req.body)
  newUser.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    } else {
      res.status(200).json({
        message: 'Successfully signed up!',
        result
      })
    }
  })
}

const list = (req, res) => {
  User.find((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(user)
  }).select('-hashed_password')
}

const userByID = (req, res, next, ID) => {
  User.findById().exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }
    req.profile = user
    next()
  })
}

const read = (req, res) => {
  return res.json(req.profile)
}

const update = (req, res, next) => {
  let user = req.profile
  user = _.extend(user, req.body)
  user.updated = Date.now()
  user.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    user.hashed_password = undefined
    res.json({
      message: 'User account updated',
      user
    })
  })
}

const remove = (req, res, next) => {
  let user = req.profile
  user.deleteOne((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    user.hashed_password = undefined
    res.json({
      message: 'User account deleted',
      deletedUser
    })
  }
  )
}

export default { create, list, userByID, read, update, remove }