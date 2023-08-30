const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    bookname:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    createAt:{
        type:Date,
        default:new Date()
       },
       owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
       },
    summary:{type:String,required:true},
    
})
const Book=mongoose.model('books',postSchema)
module.exports =Book; 