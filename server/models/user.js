import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    isDoctor:{type:Boolean, default:false},
    isPatient:{type:Boolean, default:false},
    email:{type:String, required:true}, 
    password:{type:String, required:true},
    name:{type:String, required:true},
    age:{type:String, required:true},
    gender:{type:String, required:true},
    phone:String,
    specification:String,
    family:String,
    address:String,
})

const User = mongoose.model('User', userSchema)

export default User
  