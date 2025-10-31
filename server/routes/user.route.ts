import express from 'express'
import signupController from '../controllers/auth/signup.js'
import loginController from '../controllers/auth/login.js'
import { upgradeToTeacher } from '../controllers/user/updateRoleController.js'
import { tokenVerify } from '../middlewares/tokenVerify.js'
import { getCurrentUser } from '../controllers/user/getCurrentUser.js'

const router = express.Router()

router.post('/signup',signupController)
router.post('/login',loginController)


router.put('/upgrade-teacher', tokenVerify ,upgradeToTeacher)
router.get('/me', tokenVerify ,getCurrentUser)


export default router