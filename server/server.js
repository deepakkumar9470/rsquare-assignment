import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000
import cors from 'cors'
import cookieParser from 'cookie-parser'
import db from './db/db.js'

import authRoute from './routes/auth.js'


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use(express.urlencoded({extended : false}));

app.use('/api/auth', authRoute)
app.get('/', (req,res)=>{
    res.send('Hello')
})

db();

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
})