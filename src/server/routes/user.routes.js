import express from 'express'
import userCtrl from '../controllers/user.controllers'
import authCtrl from '../controllers/auth.controllers'

const router = express.Router()

router
  .route('/users')
  .get(userCtrl.getUserList)
  .post(userCtrl.createUser)


router.route('/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.getUser)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateUser)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization,  userCtrl.removeUser)

router.param('userId', userCtrl.userByID)

export default router;