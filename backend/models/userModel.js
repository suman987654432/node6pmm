
const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
     rollno:Number,
     name:String,
     city:String,
     fees:Number,
     imgname:String
})

module.exports = mongoose.model("student", userSchema);