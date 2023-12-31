const express = require('express')
const Workout = require('../models/Workout')
const router = express.Router()
const {postWorkout,getAllWorkouts,getWorkoutById, deleteWorkout, updateWorkout} = require('../controllers/WorkoutControllers')
router.get('/',getAllWorkouts)
router.get('/:id',getWorkoutById)
router.post('/',postWorkout)
router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)
module.exports = router