const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

userSchema.statics.signup = async(email,password)=>{
    const exist = await this.findOne({email})
    if(exist){
        throw Error("Email already in use!")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = await this.create({email,password:hashedPassword})
    return user
}


module.exports = mongoose.model('User',userSchema)