const mongoose= require('mongoose')

const connectDB=()=>{
mongoose.connect(process.env.URI)
.then(()=>console.log("db is connect"))
.catch((err)=>console.log(err))
}
module.exports=connectDB