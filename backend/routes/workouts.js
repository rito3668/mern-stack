const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.send({mssg:"hello world"})
})
router.get('/:id',(req,res)=>{
    res.send({mssg:"get a single workout"})
})
router.post('/',(req,res)=>{
    res.send({mssg:"post a single workout"})
})
router.delete('/:id',(req,res)=>{
    res.send({mssg:"delete a workout"})
})
router.patch('/:id',(req,res)=>{
    res.send({mssg:"update a workout"})
})
module.exports = router