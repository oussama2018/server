const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:Number,
    role:{type:String,enum:["admin","user"],default:"user"}
})
const User=mongoose.model('user',userSchema)
module.exports =User; 