const User = require('../models/User')



//login user
const loginUser = async(req,res)=>{
    res.json({mssg:'login user'})
}

//signup user
const signupUser = async(req,res)=>{
    const {email,password} = req.body 
    try{
        const user = await User.signup(email,password)
        res.status(200).json({email,user})
    }catch(err){
        res.status(400).json({err:err.message})
    }
}


module.exports = {signupUser,loginUser}