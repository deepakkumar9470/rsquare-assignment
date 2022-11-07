import User from '../models/Auth.js'
import Token from '../models/Token.js'
import sendEmail from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import crypto from 'crypto'


export const register = async (req,res) =>{
      
    const user = User.findOne({email})
    if(!user) return res.status(400).json('User does not exist')

    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password,salt)
        const newuser = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            phone:  req.body.phone,
            password : hash
        })

        const savedUser = await newuser.save()
       
        const token = await new Token({
            userId : savedUser._id,
            token : crypto.randomBytes(32).toString('hex')
        })
        const url = `${process.env.BASE_URL}users/$${savedUser._id}/verify/${token.token}`

        await sendEmail(user.email, "Verify Email", url)

      
       return res.status(201).json('An email sent to your account please verify to start')

        
    } catch (error) {
        return res.status(400).json(error)
    }

}

export const login = async (req,res) =>{

    try {
        
    const user = User.findOne({email:email})
    if(!user) return res.status(400).json('User does not exist')

    const checkPassword  = await bcrypt.compare(req.body.password, user.password)
    if(!checkPassword) return res.status(400).json('Invalid credentials')

    if(!user.verified){
        const token = await Token.findOne({userId : user.id})
        if(!token){

            token = await new Token({
                userId : savedUser._id,
                token : crypto.randomBytes(32).toString('hex')
            }).save()
            const url = `${process.env.BASE_URL}/users/${savedUser._id}/verify/${token.token}`

            await sendEmail(user.email, "Verify Email", url)            
        }
        return res.status(200).json('An email sent to your account please verify to start')

    }

    const token = await jwt.sign({id : user._id}, process.env.JWT_SECRET)
    
    res
    .cookie('accessToken', token, {
       httpOnly: true
    })
    .status(200)
    .json(user)
     

    } catch (error) {
        return res.status(400).json(error)
    }
}


export const verifyUser = async  () =>{
    try {
        const user = await User.findOne(req.params.id)
        if(!user) return res.status(400).json('Invalid link')
        const token = await Token.findOne({
            userId:  user._id,
            token : req.params.token
        })

        if(!token) return res.status(400).json('Invalid link')

        await User.updateOne({id:  user._id, verified : true})
        await Token.remove()
        return res.status(200).json('Email verified successfully')

    } catch (error) {
        return res.status(400).json(error)
    }
}


export const logout = (req,res) =>{
    res.clearCookie('accessToken', {
        secure : true,
        sameSite:  'none'
    }).status(200).json('User logged out')
}


