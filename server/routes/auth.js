import express from 'express'
import { login, register, logout,verifyUser } from '../controller/user.js'

const router = express.Router()

// @api/auth/register
router.post('/register',register)

// @api/auth/login
router.post('/login',login)

// @api/auth/logout
router.post('/logout',logout)


// @api/auth/123/verify/ababfbf


router.get('/:id/verify/:token',verifyUser)


export default router