require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/users')

const app = express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`listening on ${process.env.PORT}`)
        })
    })
    .catch(err=>console.log(err))
