const Workout = require('../models/Workout')
const mongoose = require('mongoose')
const postWorkout = async(req,res)=>{
    const {title,load,reps} = req.body
    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0)return res.status(404).json({error:"empty field man",emptyFields})
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(err){    
        res.status(400).json({mssg:"could not create workout"})
    }
}
const getAllWorkouts = async(req,res)=>{
    try{
        const workouts = await Workout.find({}).sort({createdAr:-1})
        res.status(200).json(workouts)
    }catch(err){
        res.status(400).json({mssg:"could not fetch workouts"})
    }
}
const getWorkoutById = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"no such workout"})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(400).json({mssg:"cant find the workout"})
    }
    res.status(200).json(workout)
}
const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"could not find the document"})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({mssg:"no such workout"})
    }
    res.status(200).json(workout)
}
const updateWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"could not find the document"})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(400).json({error:"no such workout"})
    }
    res.status(200).json(workout)
}
module.exports = {
    postWorkout,
    getAllWorkouts,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
}