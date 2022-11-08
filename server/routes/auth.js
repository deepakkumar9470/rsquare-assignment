import express from 'express'
import { login, register, logout, verifyUser } from '../controller/user.js'
import multer from 'multer'
import { getMultipleFiles, multipleFile, singleFile } from '../controller/fileUploader.js'

const storage = multer.diskStorage({
  diskStorage: (req, file, cb) => {

    cb(null, `public/uploads`)

  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage })

const router = express.Router()

// @api/auth/register
router.post('/register', register)

// @api/auth/login
router.post('/login', login)

// @api/auth/logout
router.post('/logout', logout)


// @api/auth/123/verify/ababfbf
router.get('/:id/verify/:token', verifyUser)


// @api/auth/upload
router.post('/upload', upload.array('files'), multipleFile)

// @api/auth/upload/mul
router.post('/upload/mul', upload.single('file'), singleFile)


// @api/auth/getfiles
router.get('/getfiles', getMultipleFiles)

export default router