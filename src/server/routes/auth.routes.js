import express from 'express'
import authCtrl from '../controllers/auth.controllers'

const router = express.Router()


router.post('/auth/signin', authCtrl.signin)

router.get('auth/signout', authCtrl.signout)


export default router