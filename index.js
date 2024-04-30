import express from 'express'
const app = express()

import 'dotenv/config'
import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://name:password@cluster0.nr9e50u.mongodb.net/test')
const PORT = process.env.PORT || 4200

app.get('/',()=>{

})

import userRoute from './routes/userRoute.js'
app.use('/api',userRoute)

app.listen(PORT,()=>{
    console.log('Wow, Server connected!! '+PORT)
})
