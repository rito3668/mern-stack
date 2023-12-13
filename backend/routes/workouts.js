const express = require('express')
const Workout = require('../models/Workout')
const router = express.Router()
const {postWorkout,getAllWorkouts,getWorkoutById, deleteWorkout} = require('../controllers/WorkoutControllers')
router.get('/',getAllWorkouts)
router.get('/:id',getWorkoutById)
router.post('/',postWorkout)
router.delete('/:id',deleteWorkout)
router.patch('/:id',(req,res)=>{
    res.send({mssg:"update a workout"})
})
module.exports = router